import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import type { Expense } from "./ExpenseForm";

export function TotalExpense() {
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "expenses"), (snapshot) => {
            const totalAmount = snapshot.docs.reduce((sum, doc) => {
                const data = doc.data() as Expense;
                return sum + (data.amount || 0);
            }, 0);

            setTotal(totalAmount);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="max-w-md mx-auto my-6 bg-white p-4 rounded shadow text-xl font-bold text-center text-green-700">
            Total Pengeluaran: Rp{total.toLocaleString("id-ID")}
        </div>
    )
}