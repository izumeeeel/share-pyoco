import _ from "lodash"
import { Expense } from "../models"
import { INumberDateExpense } from "../../types/expenses"

export const findExpenses = async () => {
  const expenses = await Expense.findAll({
    order: [['created_at', 'DESC']]
  })
  return expenses.map(expense => ({
    id: expense.id,
    title: expense.title,
    expense: expense.expense,
    typeId: expense.type_id,
    createdBy: expense.created_by,
    createdAt: expense.created_at,
    updatedAt: expense.updated_at
  }))
}

export const findYealyExpenses = async () => {
  const expenses = await findExpenses()
  const yearlyExpenses = _.groupBy(expenses.map(expense => ({
    ...expense,
    createdAt: expense.createdAt.getFullYear()
  })), 'createdAt')

  return Object.keys(yearlyExpenses).map(year => ({
    year,
    totalExpense: getTotalExpense(yearlyExpenses[year.toString()])
  }))
}

const getTotalExpense = (expenses: INumberDateExpense[]) => expenses.map(expense => expense.expense).reduce((acc, curr) => acc + curr)