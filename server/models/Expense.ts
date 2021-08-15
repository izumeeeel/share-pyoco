import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface ExpenseAttributes {
  id: number;
  title: string;
  expense: number;
  type_id: number;
  created_by: number;
  created_at: Date;
  updated_at: Date;
}
interface ExpenseCreationAttributes
  extends Optional<ExpenseAttributes, 'id' | 'created_at' | 'updated_at'> {}

export default (sequelize: Sequelize) => {
  class Expense
    extends Model<ExpenseAttributes, ExpenseCreationAttributes>
    implements ExpenseAttributes {
    public id!: number;
    public title!: string;
    public expense!: number;
    public type_id!: number;

    public readonly created_by!: number;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
  }
  Expense.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      expense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'expense',
      modelName: 'expense'
    }
  );
  return Expense;
};
