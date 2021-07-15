const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const mongoose = require('mongoose');

AdminBro.registerAdapter(AdminBroMongoose);


const navigationContent = {
  name: 'Test navigation'
};

const adminBroOptions = {
  resources: [
    {
      options: {
        navigation: navigationContent
      }
    },
  ]
};


const adminBro = new AdminBro({
  databases: [mongoose],
  adminBroOptions
  // rootPath: '/admin',
});

const router = AdminBroExpress.buildRouter(adminBro);
module.exports = router;
