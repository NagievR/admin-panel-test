const Test = require('../models/test');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin');
const uploadFeature = require('@admin-bro/upload');
const path = require('path');

const navContentTest = {
  name: 'Тест'
};
const navContentDoctor = {
  name: 'О нас'
};
const navContentAdmin = { 
  name: 'Администрация'
};





const { BaseProvider } = require('@admin-bro/upload')
const { ActionContext, UploadedFile } = require('admin-bro')
const { promises, existsSync } = require("fs")
const { resolve, dirname } = require("path")

class UploadProvider extends BaseProvider {
    constructor(bucket, assetPath) {
        // it requires bucket as a parameter to properly pass it to other methods
        super(bucket)

        this.assetPath = assetPath
    }

    async upload(file, key, ActionContext) {
      console.log('****************LOG****************')
        const fullPath = resolve(this.assetPath, key)
        const dirPath = dirname(fullPath)

        if (!existsSync(dirPath)) {
            await promises.mkdir(dirPath, { recursive: true })
        }
        await promises.copyFile(file.path, fullPath)
        await promises.unlink(file.path)
        console.log('FULL PATH: ', fullPath);
        console.log('DIR PATH: ', dirPath);
        console.log('****************/LOG****************')
        return key

    }

    async delete(key, bucket, context) {
        const filePath = resolve(this.assetPath, key)

        if (existsSync(filePath)) {
            await promises.unlink(filePath)
            const dirPath = dirname(filePath)
            const otherFiles = await promises.readdir(dirPath)
            if (otherFiles && otherFiles.length == 0) {
                await promises.rmdir(dirPath)
            }
        }
    }

    path(key, bucket, context) {
        // return "/" + bucket;

      // console.log('KEY=== ', key, ' BUCK=== ', bucket)

        return "/" + key;

        // return 'https://img5.goodfon.ru/wallpaper/nbig/3/73/abstraktsiia-antisfera-vodovorot-krasok-kartinka-chernyi-fon.jpg'
        // console.log('bucket+++++++++++++', bucket);
        // return `/${bucket}/images/${key}`

        // return 
    }
}

const provider = new UploadProvider('images', path.join('public', 'images'))






const resources = [
  {
    resource: Doctor, 
    options: { 
      navigation: navContentDoctor,
      properties: {
        '_id': {
          isVisible: false,
        },
        'createdAt': {
          isVisible: false
        }
      }
    },


// https://stackoverflow.com/questions/64557467/how-to-configure-bucket-in-admin-bro-for-local-storage-of-uploaded-files

    features: [
      uploadFeature({ provider: provider, 
        properties: {
          key: 'uploadedFile.path',
          bucket: 'uploadedFile.folder',
          mimeType: 'uploadedFile.type',
          size: 'uploadedFile.size',
          filename: 'uploadedFile.filename',
          file: 'Фото',
        }
      })
    ]
  },


  {
    resource: Test, 
    options: { navigation: navContentTest },
  },
  
  {
    resource: Admin, 
    options: { navigation: navContentAdmin },
  },
  
];

module.exports = resources;
