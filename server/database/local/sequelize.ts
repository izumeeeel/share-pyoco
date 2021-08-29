import { Sequelize } from 'sequelize';
import config from '../config/config';

const newSequelize = (env = 'development') => {
  console.log('newSequelizing....')
  const sequelize = new Sequelize(
    config[env].database,
    config[env].username,
    config[env].password,
    {
      dialect: config[env].dialect,
      host: config[env].host,
      port: config[env].port,
      define: {
        charset: 'utf8'
      },
      retry: {
        max: 10
      }
    }
  );
  return sequelize;
};

export default newSequelize;
