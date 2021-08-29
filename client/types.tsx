/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Expenses: undefined
  ExpensesMonths: { year: string }
  ExpensesMonth: { month: string }
  NotFound: undefined
}

export type BottomTabParamList = {
  TabOne: undefined
  TabTwo: undefined
}

export type TabTwoParamList = {
  TabTwoScreen: undefined
}
