const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');

const resources = require('./resources');
const locale = require('./locale');
const branding = require('./branding');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  resources: resources,
  locale: locale,
  branding: branding,
});
 
const router = AdminBroExpress.buildRouter(adminBro);
module.exports = router;
