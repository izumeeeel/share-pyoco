export = Expense;

declare namespace Expense {
  interface IFetchedExpense{
    id: number,
    title: string,
    expense: number,
    typeId: number,
    createdBy: number,
    createdAt: Date,
    updatedAt: Date
  }

  interface INumberDateExpense extends IFetchedExpense{
    createdAt: number,
  }

  interface IFetchedYearlyExpense{
    year: number,
    totalExpense: number,
  }
}