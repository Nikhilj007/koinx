'use client';

import React, { useState, useEffect } from "react";

function Trending() {
    const [trending, setTrending] = useState<any>();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
                const data = await response.json();
                console.log(data);
                setTrending(data);
            } catch (error) {
                console.error("Error fetching trending data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="bg-white mt-3 p-4 rounded-md">
            <h1 className="text-lg font-semibold py-2">Trending Coins (24H)</h1>
            {trending?.coins?.slice(0, 3).map((coin: any, index: number) => (
                <div className="flex justify-between" key={index}>
                    <div className="flex gap-2">
                        <img src={coin?.item?.small} width={24} height={24} alt="" />
                        <div>{coin?.item?.name}</div>
                    </div>
                    <div className={`${coin?.item?.data.price_change_percentage_24h?.bnb>0?'bg-green-100 text-green-600':'bg-red-100 text-red-600'} px-2 rounded-md`}>{coin?.item?.data.price_change_percentage_24h?.bnb.toFixed(3)} %</div>
                </div>
            ))}
        </div>
    );
}

export default Trending;
