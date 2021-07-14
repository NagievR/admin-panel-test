// const AdminBro = require('admin-bro');
// const AdminBroExpress = require('@admin-bro/express');

// const adminBro = new AdminBro({
//   databases: [],
//   rootPath: '/admin',
// });

// const router = AdminBroExpress.buildRouter(adminBro);

// // app.use(adminBro.options.rootPath, router);
// // app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'));

// module.exports = router;


const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

console.log(AdminBro, AdminBroExpress);

// const express = require('express')
// const app = express()

const adminBro = new AdminBro({
  databases: [],
  rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)
module.exports = router;
