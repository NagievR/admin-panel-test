const UploadProvider = require('../utils/UploadProvider');
const uploadFeature = require('@admin-bro/upload');
const bcrypt = require('bcrypt');
const AdminBro = require('admin-bro');

// models. i need to move them to separate files later
const Feedback = require('../models/Feedback');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin'); // rename then 
const User = require('../models/User');

const navContentFeedback = {
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
  // Remove it to separate files later

  // **************************** DOCTOR **************************** 
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
  // **************************** /doctor **************************** 

  // **************************** FEEDBACK **************************** 
  {
    resource: Feedback, 
    options: { 
      navigation: navContentFeedback,
      properties: {
        _id: {
          isVisible: false
        },
        date: {
          type: 'datetime',
          isTitle: true,
          options: {},
          // components: {
          //   list: AdminBro.bundle('./test-comp'),
          // },
        }
      },
      actions: {
        show: {
          before: async(originalResponse, request) => {
            try {
              const toFind = { _id: request.record.params._id };

              await Feedback.findOneAndUpdate(
                toFind, { viewed: true }, (err, doc) => {
                  if (err) {
                    throw Error(err);
                  };
                  console.log('Updated')
              });

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
        },
      },
    },
  },
  // **************************** /feedback **************************** 


  // **************************** USER **************************** 
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
  },
  // **************************** /user **************************** 

    
  // **************************** ADMIN **************************** 
  {
    resource: Admin, 
    options: { navigation: navContentAdmin },
  },
  // **************************** /admin **************************** 
  
];

module.exports = resources;
