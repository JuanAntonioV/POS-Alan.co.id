import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import FoodItem from "@/Components/FoodItem.jsx";

function HomePage() {
    const [foodItems, setFoodItems] = useState([
        {
            id: 1,
            name: "Cumi Tepung",
            price: 20000, // Update price to IDR format
            image: "https://pict.sindonews.net/dyn/732/pena/news/2021/03/08/185/357390/resep-cumi-goreng-tepung-yang-empuk-krenyes-ghy.jpg",
        },
        {
            id: 2,
            name: "Cumi Bakar",
            price: 30000, // Update price to IDR format
            image: "https://asset.kompas.com/crops/vkiGYr0m16eCTVHXQXcIzNYUNQE=/0x0:1000x667/750x500/data/photo/2022/03/15/623012d6e0dca.jpg",
        },
        {
            id: 3,
            name: "Cumi Cabe Garamg",
            price: 20000, // Update price to IDR format
            image: "https://img-global.cpcdn.com/recipes/fd3cdd22b9c608e2/680x482cq70/cumi-cabe-garam-goreng-tepung-16122018-foto-resep-utama.jpg",
        },
        {
            id: 4,
            name: "Cumi & Kerang",
            price: 30000, // Update price to IDR format
            image: "https://img-global.cpcdn.com/recipes/b7ac1a0d695922be/680x482cq70/seafood-kerang-dara-cumi-udang-saos-padang-foto-resep-utama.jpg",
        },
        {
            id: 5,
            name: "Cah Kangkung",
            price: 10000, // Update price to IDR format
            image: "https://assets.unileversolutions.com/recipes-v3/230520-default.jpg?im=AspectCrop=(720,459);Resize=(720,459)",
        },
        {
            id: 6,
            name: "Tahu Goreng",
            price: 10000, // Update price to IDR format
            image: "https://cdn1-production-images-kly.akamaized.net/csFeGBYbnzz8llvYCZ4PsVwfrPs=/0x0:5616x3165/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2901423/original/005536300_1567581573-tips_tahu_HL.jpg",
        },
        {
            id: 7,
            name: "Cah Toge",
            price: 10000, // Update price to IDR format
            image: "https://img.kurio.network/f3fbH227rIh2-b3LHgUig4lBQWE=/440x440/filters:quality(80)/https://kurio-img.kurioapps.com/22/03/07/411096b0-155f-4b8e-ade9-fdc100d62677.jpe",
        },
        {
            id: 8,
            name: "Kepiting Saus Padang",
            price: 50000, // Update price to IDR format
            image: "https://cdn0-production-images-kly.akamaized.net/_n0w-LsIHw7vPwJqL5g-X2FyVtQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2355329/original/078016000_1536562953-resep-masakan-sehari-hari.jpg",
        },
        {
            id: 9,
            name: "Es Teh Manis",
            price: 5000, // Update price to IDR format
            image: "https://akcdn.detik.net.id/community/media/visual/2020/05/14/0af32d8b-36b7-4555-8e79-4fd54c98f795.jpeg?w=700&q=90",
        },
        {
            id: 10,
            name: "Aneka Jus",
            price: 10000, // Update price to IDR format
            image: "https://o-cdf.sirclocdn.com/unsafe/o-cdn-cas.sirclocdn.com/parenting/images/3_Perbedaan_Nutrisi_Buah_Utuh_dan.width-800.format-webp.webp",
        },
        {
            id: 11,
            name: "Es Jeruk",
            price: 10000, // Update price to IDR format
            image: "https://doktersehat.com/wp-content/uploads/2018/09/jus-jeruk.jpg",
        },
        {
            id: 12,
            name: "Nasi Putih",
            price: 5000, // Update price to IDR format
            image: "https://asset.kompas.com/crops/_LjV7fswj8rmE70TvLkPwpSgeCo=/0x0:780x390/1200x800/data/photo/2015/05/07/1030021shutterstock-254781634780x390.jpg",
        },
    ]);

    const [billItems, setBillItems] = useState([]);

    const addToBill = (foodItem) => {
        const updatedBill = [...billItems];
        const existingItemIndex = updatedBill.findIndex(
            (item) => item.id === foodItem.id
        );

        if (existingItemIndex !== -1) {
            updatedBill[existingItemIndex].quantity += 1;
        } else {
            updatedBill.push({ ...foodItem, quantity: 1 });
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

    return (
        <>
            <Head title="Restaurant POS" />
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                                {foodItems.map((foodItem, index) => (
                                    <FoodItem key={index} addToBill={addToBill} foodItem={foodItem} />
                                ))}
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
                                            {billItems.map((billItem) => (
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
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="mt-4 px-4">
                                        Total: {calculateTotal()}
                                    </p>
                                        <div className={'mt-6 space-y-4 px-4'}>
                                            <button className="text-center py-3 bg-gray-100 rounded-xl w-full">
                                                Clear Sale
                                            </button>
                                            <div className="mt-2 flex gap-4">
                                                <button
                                                    onClick={() => alert("Bill Saved")}
                                                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 flex-1 rounded-xl"
                                                >
                                                    Save Bill
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        alert("Bill Printed")
                                                    }
                                                    className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-4 rounded-xl flex-1"
                                                >
                                                    Print Bill
                                                </button>
                                            </div>
                                            <div className="mt-2 flex">
                                                <button
                                                    onClick={() => alert("Charge")}
                                                    className="bg-green-500 hover:bg-blue-700 text-white py-4 px-4 rounded-xl flex-1"
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
