const Test = require('../models/test');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin');
const UploadProvider = require('../utils/UploadProvider');
const uploadFeature = require('@admin-bro/upload');

const navContentTest = {
  name: 'Тест',
};
const navContentDoctor = {
  name: 'О нас',
};
const navContentAdmin = { 
  name: 'Администрация',
};

const uploadProvider = new UploadProvider('images', 'public/images');

const resources = [
  {
    resource: Doctor, 
    options: { 
      navigation: navContentDoctor,
      properties: {
        '_id': {
          isVisible: false,
        },
        'uploadedFile': {
          isVisible: false
        }
      }
    },

    features: [
      uploadFeature({ provider: uploadProvider, 
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
