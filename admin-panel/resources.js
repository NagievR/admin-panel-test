const Test = require('../models/test');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin');
const uploadFeature = require('@admin-bro/upload');

// console.log(uploadFeature);

const navContentTest = {
  name: 'Тест'
};
const navContentDoctor = {
  name: 'О нас'
};
const navContentAdmin = {
  name: 'Администрация'
};

const resources = [
  {
    resource: Doctor, 
    options: { 
      navigation: navContentDoctor,
      properties: {
        '_id': {
          isVisible: false,
        }
      }
    },
    // features: [uploadFeature({
    //   multiple: true,
    //   provider: { local: { bucket: '/public' } },
    //   properties: {
    //     key: 'img',
    //     // file: 'img',
    //     // filePath: '/public'
    //   },
    //   // validation: {
    //   //   mimeTypes: ['image/png', 'image/jpg', 'image/jpeg']
    //   // },
    // })],
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
