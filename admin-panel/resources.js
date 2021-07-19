const UploadProvider = require('../utils/UploadProvider');
const uploadFeature = require('@admin-bro/upload');
const bcrypt = require('bcrypt');

// models. i need to move them to separate files later
const Test = require('../models/test');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin'); // rename then 
const User = require('../models/User');

const navContentTest = {
  name: 'Тест',
};
const navContentDoctor = {
  name: 'О нас',
};
const navContentAdmin = { 
  name: 'Администрация',
};
const navContentUser = {};

const uploadProvider = new UploadProvider('images', 'public/images');
const validation = {
  mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'],
}
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
      uploadFeature({ 
        provider: uploadProvider, 
        properties: {
          key: 'uploadedFile.path',
          bucket: 'uploadedFile.folder',
          mimeType: 'uploadedFile.type',
          size: 'uploadedFile.size',
          filename: 'uploadedFile.filename',
          file: 'Фото',
        },
        validation: validation
      })
    ]
  },

  {
    resource: Test, 
    options: { 
      navigation: navContentTest,
      actions: {
        show: {
          before: async(originalResponse) => {
            try {
              const prevDoc = await Test.find({});
              await Test.findOneAndUpdate(prevDoc, { viewed: true });
            } catch(err) {
              console.log(err);
            } finally {
              return originalResponse;
            }
          }
        },
        delete: {
          isAccessible: false,
        },
        edit: {
          isAccessible: false,
        },
        new: {
          isAccessible: false,
        }
      },
    },
  },
  
  {
    resource: Admin, 
    options: { navigation: navContentAdmin },
  },

  {
    resource: User,
    options: {      
      navigation: navContentUser,
      properties: {
        '_id': {
          isVisible: false,
        },
        'hashed password': {},
        'password': {
          type: 'string',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          },
        },
      },
      actions: {
        new: {
          before: async(req) => {
            if (req.payload.password) {
              req.payload = {
                ...req.payload,
                passHashed: await bcrypt.hash(req.payload.password, 8),
                password: null
              };
            }
            return req;
          },
        },
      }
    }
  }
  
];

module.exports = resources;
