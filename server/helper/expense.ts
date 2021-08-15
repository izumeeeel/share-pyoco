import { Expense } from "../models"

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