
const defaults = {
  host: '127.0.0.1',
  port: 3002,
  database: 'share_pyoco',
  username: 'root',
  password: 'adminadmin',
  dialect: 'mysql'
};

module.exports = {
  development: defaults,
  test: {
    ...defaults,
    port: 3361 // localでtest実行する際にportのバッティングを避ける
  },
  staging: {
    ...defaults,
    username: 'admin',
    password: 'adminadmin',
    host: 'db-dev.ppm-cloud.com'
  },
};
