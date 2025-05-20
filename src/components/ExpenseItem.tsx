import type { Expense } from "./ExpenseForm";

type Props = {
    expense: Expense;
}

export function ExpenseItem({ expense }: Props) {
    return (
        <div>
            <span>{expense.description}</span>
            <span>
                - Rp {expense.amount}
            </span>
        </div>
    )
}