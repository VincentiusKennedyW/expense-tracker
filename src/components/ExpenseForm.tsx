import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

export type expense = {
    id?: string;
    name: string;
    amount: number;
    date: Date
    ;
}

export function ExpenseForm() {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState<number>(0);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!description.trim() || amount <= 0) return;

        try {
            await addDoc(collection(db, 'expenses'), {
                description,
                amount,
                date: serverTimestamp(),
            });

            setDescription('');
            setAmount(0);
            toast.success('Expense Added Succesfully!');
        } catch (error) {
            toast.error('Failed to Add Expense!');
            console.error("Error adding document: ", error);
        }
    }

    return (
        <>
            <Toaster /> { }
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-md mx-auto bg-white p-4 rounded shadow">
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    className="p-2 border rounded"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add Expense
                </button>
            </form>
        </>
    )
}