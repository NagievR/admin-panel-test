const Test = require('../models/test');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin');

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
  { resource: Doctor, options: { navigation: navContentDoctor } },
  { resource: Test, options: { navigation: navContentTest } },
  { resource: Admin, options: { navigation: navContentAdmin } }
];

// branding: {
//   companyName: 'Научно-исследовательский институт экстремальной медицины',
//   icon: 'https://w7.pngwing.com/pngs/224/500/png-transparent-telegram-logo-computer-icons-others-miscellaneous-blue-angle.png'
// },


module.exports = resources;
