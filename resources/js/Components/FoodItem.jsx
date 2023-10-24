import React from "react";

export default function ({addToBill, foodItem}) {
    return (
        <div
            onClick={() => addToBill(foodItem)}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden w-full h-fit hover:shadow-none cursor-pointer transition group"
        >
            <div className={'h-40'}>
                <img
                    src={foodItem.image}
                    alt={foodItem.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center py-4 text-base bg-gray-100 font-bold">
                {foodItem.name}
            </div>

            <div className={'absolute bottom-0 top-0 left-0 right-0 w-full' +
                ' group-hover:bg-black group-hover:bg-opacity-50 transition'}>
                <div className="text-center text-lg text-white font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full invisible group-hover:visible transition">
                    Click to add
                </div>
            </div>
        </div>
    )
}
