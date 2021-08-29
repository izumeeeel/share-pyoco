import { Sequelize } from 'sequelize';
import dbConfigs from '../config/db';
import ExpenseModel from './Expense';

const dbConfig = dbConfigs['development'];

// DB接続設定
export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: dbConfig.dialect,
    host: dbConfig.host,
    // port: dbConfig.port, <- これがあるとつながらなかった
    define: {
      charset: 'utf8',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);


export const Expense = ExpenseModel(sequelize);