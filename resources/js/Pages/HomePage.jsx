import React, {useEffect, useState} from "react";
import {Link, Head} from "@inertiajs/react";
import FoodItem from "@/Components/FoodItem.jsx";

function HomePage({products}) {
    const [foodItems, setFoodItems] = useState([]);

    const [billItems, setBillItems] = useState([]);

    useEffect(() => {
        setFoodItems(products);

        return () => {
            setFoodItems(null);
        }
    }, [products]);

    const addToBill = (foodItem) => {
        const updatedBill = [...billItems];
        const existingItemIndex = updatedBill.findIndex(
            (item) => item.id === foodItem.id
        );

        if (existingItemIndex !== -1) {
            updatedBill[existingItemIndex].quantity += 1;
        } else {
            updatedBill.push({...foodItem, quantity: 1});
        }

        setBillItems(updatedBill);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const calculateTotal = () => {
        const total = billItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        return formatPrice(total);
    };

    const clearBill = () => {
        setBillItems([]);
    }

    return (
        <>
            <Head title="Restaurant POS"/>
            <div className="font-sans bg-gray-200 p-4 min-h-[calc(100vh-5rem)]">
                <div className="text-center text-2xl font-bold mb-4">
                    Restaurant POS
                </div>
                <div className="bg-white rounded-xl px-6 py-8 shadow-md space-y-4 min-h-[calc(100vh-5rem)]">
                    <header>
                        <div className="flex justify-between items-center">
                            <h2 className={'font-bold'}>Daftar Menu ({foodItems.length})</h2>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-9 gap-10">
                        <div className="w-full mr-4 col-span-1 md:col-span-9 lg:col-span-6 2xl:col-span-7">
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                                {foodItems.length === 0 ? (
                                    <div className="text-center col-span-4">
                                        <p className="text-xl font-bold">
                                            No food items found.
                                        </p>
                                        <p className="text-lg">
                                            Add a new food item to get started.
                                        </p>
                                    </div>
                                ) : foodItems.length > 0 ? foodItems.map((foodItem, index) => (
                                    <FoodItem key={index} addToBill={addToBill} foodItem={foodItem}/>
                                )) : null}
                            </div>
                        </div>

                        <div className="w-full col-span-1 md:col-span-10 lg:col-span-3 2xl:col-span-2">
                            <div className="bg-white rounded-2xl py-4 border">
                                <div className="text-xl font-bold mb-4 text-center">
                                    New Customer
                                </div>
                                <div className="text-xl mb-4 text-center">
                                    Dine In
                                </div>

                                <div className="w-full">
                                    <div className={'h-96 overflow-auto px-4'}>
                                        <table className="w-full table-auto mb-4">
                                            <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-2">1</th>
                                                <th className="text-center py-2"></th>
                                                <th className="text-right py-2">
                                                    View Table
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {billItems.length === 0 ? (
                                                <tr>
                                                    <td
                                                        colSpan="3"
                                                        className="text-center py-4"
                                                    >
                                                        No items in the bill.
                                                    </td>
                                                </tr>
                                            ) : billItems.length > 0 ? billItems.map((billItem) => (
                                                <tr
                                                    key={billItem.id}
                                                    className="border-b"
                                                >
                                                    <td className="text-left py-2">
                                                        {billItem.name}
                                                    </td>
                                                    <td className="text-center py-2">{`x${billItem.quantity}`}</td>
                                                    <td className="text-right py-2">
                                                        {formatPrice(
                                                            billItem.price
                                                        )}
                                                    </td>
                                                </tr>
                                            )) : null}
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="mt-4 px-4">
                                        Total: {calculateTotal()}
                                    </p>
                                    <div className={'mt-6 space-y-4 px-4'}>
                                        <button
                                            className="text-center py-3 bg-gray-100 rounded-xl w-full disabled:opacity-50 hover:bg-gray-200 transition"
                                            disabled={billItems.length === 0}
                                            onClick={clearBill}>
                                            Clear Bill
                                        </button>
                                        <div className="mt-2 flex gap-4">
                                            <button
                                                onClick={() => alert("Bill Saved")}
                                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 flex-1 rounded-xl transition disabled:opacity-50"
                                                disabled={billItems.length === 0}
                                            >
                                                Save Bill
                                            </button>
                                            <button
                                                onClick={() =>
                                                    alert("Bill Printed")
                                                }
                                                className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-4 rounded-xl transition disabled:opacity-50 flex-1"
                                                disabled={billItems.length === 0}
                                            >
                                                Print Bill
                                            </button>
                                        </div>
                                        <div className="mt-2 flex">
                                            <button
                                                onClick={() => alert("Charge")}
                                                className="bg-green-500 hover:bg-green-600 text-white py-4 px-4 rounded-xl transition disabled:opacity-50 flex-1"
                                                disabled={billItems.length === 0}
                                            >
                                                Charge
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
