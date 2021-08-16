import _ from "lodash"
import { Expense } from "../models"
import { IFetchedExpense, INumberDateExpense } from "../../types/expenses"

type Span = 'year' | 'month'

export const findExpenses = async (span?: Span) => {
  const expenses = await Expense.findAll({
    order: [['created_at', 'DESC']]
  })
  const res = expenses.map(expense => ({
    id: expense.id,
    title: expense.title,
    expense: expense.expense,
    typeId: expense.type_id,
    createdBy: expense.created_by,
    createdAt: expense.created_at,
    updatedAt: expense.updated_at
  }))
  if (!span) return res
  else {
    return getYealyExpenses(res)
  }
}

export const getYealyExpenses = (expenses: IFetchedExpense[]) => {
  const yearlyExpenses = _.groupBy(expenses.map(expense => ({
    ...expense,
    createdYear: expense.createdAt.getFullYear(),
    createdMonth: expense.createdAt.getMonth()
  })), 'createdYear')

  return Object.keys(yearlyExpenses).map(year => ({
    year: Number(year),
    monthlyExpenses: yearlyExpenses[year],
    totalExpense: getTotalExpense(yearlyExpenses[year])
  }))
}

export const getMonthlyExpenses = (expenses: IFetchedExpense[], year: number) => {
  const monthlyExpenses = getYealyExpenses(expenses).filter(yearlyExpense => yearlyExpense.year === year).map(expense => expense.monthlyExpenses)
  return monthlyExpenses
}

const getTotalExpense = (expenses: INumberDateExpense[]) => expenses.map(expense => expense.expense).reduce((acc, curr) => acc + curr)