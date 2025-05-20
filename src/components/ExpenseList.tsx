import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { ExpenseItem } from "./ExpenseItem";
import type { Expense } from "./ExpenseForm";

export function ExpenseList() {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        const q = query(collection(db, "expenses"), orderBy("date", "desc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as Expense[];
            setExpenses(data);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="max-w-md mx-auto mt-6 space-y-2">
            {expenses.length === 0 && (
                <p className="text-center text-gray-500">Belum ada transaksi.</p>
            )}
            {expenses.map((exp) => (
                <ExpenseItem key={exp.id} expense={exp} />
            ))}
        </div>
    );
}
