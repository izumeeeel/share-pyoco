import { Dialect } from "sequelize/types";

const defaults = {
  host: '127.0.0.1',
  database: 'share_pyoco',
  username: 'root',
  password: 'adminadmin',
  dialect: 'mysql' as Dialect
};

export default {
  development: defaults,
  test: {
    ...defaults,
    port: 3361 // localでtest実行する際にportのバッティングを避ける
  },
};
