const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const resources = require('./resources');
const locale = require('./locale');
const branding = require('./branding');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  resources: resources,
  locale: locale,
  branding: branding,
});


// ========= AUTH ROUTER
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',

  authenticate: async(email, password) => {
    const user = await User.findOne({ email });
    if (user) {
      const matched = await bcrypt.compare(password, user.passHashed);
      if (matched) {
        return user;
      }
    }
  }
});

module.exports = router;
// ========= /AUTH ROUTER


// const router = AdminBroExpress.buildRouter(adminBro);
// module.exports = router;
