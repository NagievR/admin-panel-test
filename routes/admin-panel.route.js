// const adminBro = require('admin-bro');
// const AdminBroExpress = require('admin-bro-expressjs');
// const User = require('../models/User');
// const bcrypt = require('bcrypt');

// const ADMIN = {
//   email: process.env.ADMIN_EMAIL || 'test@test',
//   password: process.env.ADMIN_PASSWORD || '11223344',
// };

// const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
//   cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
//   cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',

//   authenticate: async(email, password) => {
//     try {
//       const user = await User.findOne({ email });
//       if (user) {
//         const matched = await bcrypt.compare(password, user.passHashed);
//         if (matched) {
//           return user;
//         }
//       } else {
//         throw Error('No such user');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// });

// module.exports = router
