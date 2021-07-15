const Test = require('../models/test');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin');
const uploadFeature = require('@admin-bro/upload');

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
    options: { navigation: navContentDoctor },
    features: [uploadFeature({
      provider: { local: { bucket: 'public' } },
      properties: {
        key: 'fileUrl', // to this db field feature will safe S3 key
        mimeType: 'mimeType' // this property is important because allows to have previews
      },
    })]
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
