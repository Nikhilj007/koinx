'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
function MayLike({like}: {like:boolean}) {
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
    <>
        <div className="sm:my-14">
            <div className="text-2xl sm:px-10 sm:py-1 py-3 px-2 font-semibold">{like?'You May Also Like':'Trending'} </div>
            <div className="flex overflow-x-scroll snap-x snap-mandatory snap-center shide gap-10 sm:mx-12" style={{ scrollSnapType: 'x mandatory' }}>
                {trending?.coins?.map((coin: any, index: number) => {
                    return (
                            <div onClick={()=>{null}} key={index} className=" min-w-64 border rounded-md p-4">
                                <div className="flex gap-1">
                                    <img
                                        className="rounded-full"
                                        src={coin.item.large}
                                        width={26}
                                        alt="coin image"
                                    />
                                    <div className="">{coin.item.symbol}</div>
                                    <div className={`${coin?.item?.data.price_change_percentage_24h?.bnb>0?'bg-green-100 text-green-600':'bg-red-100 text-red-600'} px-2 rounded-md`}>{coin?.item?.data.price_change_percentage_24h?.bnb.toFixed(3)} %</div>
                                </div>
                                <div className="font-semibold text-lg">
                                    {coin.item.data.price}
                                </div>
                                <div className="flex justify-center py-2">
                                    <img src={coin.item.data.sparkline} alt="" />
                                </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </> 
    );
}

export default MayLike;