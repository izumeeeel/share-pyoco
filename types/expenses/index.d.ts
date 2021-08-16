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
    createdYear: number,
    createdMonth: number,
  }

  type IFetchedSpanExpense =
  {
    span: number,
    totalExpense: number,
  }

  type Span = 'year' | 'month'
}