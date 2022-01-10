import React from 'react'

const foods = [
    {
        name: "Porridge",
        price: 10000
    },
    {
        name: "Chicken",
        price: 20000
    },
    {
        name: "Fish",
        price: 15000
    },
    {
        name: "Pork",
        price: 30000
    }
]

//Reduce: perhitungan total harga
const priceSum = foods.reduce((total, food) => {
    return total + food.price;
}, 0)

//Map
const Map = () => {
    return (
        <div>
            <h2>List Makanan (Map Sederhana) </h2>
            <ul>
                {foods.map((food) => 
                    <li>
                        {food.name} - Price: {food.price}
                    </li>
                )}
            </ul>

            <h2>List Makanan (Map dengan filter) </h2>
            <ul>
                {foods
                    //filter -> seleksi data, kaya if else
                    .filter((food) => food.price > 15000) 
                    .map((food) => 
                        <li>
                            {food.name} - Price: {food.price}
                        </li>
                    )
                }
            </ul>

            <h3>
                Total harga: {priceSum}
            </h3>
        </div>
    )
}

export default Map
    