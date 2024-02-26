'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

const CoinDetails = () => {
    const server = "https://api.coingecko.com/api/v3";
    const [coin, setCoin] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState("usd");
    const [days, setDays] = useState("24H");
    const [chartArray, setChartArray] = useState([]);

    const currencySymbol =
        currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";


    const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "All"];

    const switchChartStats = (key: string) => {
        switch (key) {
            case "24h":
                setDays("24h");
                setLoading(true);
                break;
            case "7d":
                setDays("7d");
                setLoading(true);
                break;
            case "14d":
                setDays("14d");
                setLoading(true);
                break;
            case "30d":
                setDays("30d");
                setLoading(true);
                break;
            case "60d":
                setDays("60d");
                setLoading(true);
                break;
            case "200d":
                setDays("200d");
                setLoading(true);
                break;
            case "1y":
                setDays("365d");
                setLoading(true);
                break;
            case "max":
                setDays("max");
                setLoading(true);
                break;

            default:
                setDays("24h");
                setLoading(true);
                break;
        }
    };




    const params = useParams();

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const { data } = await axios.get(
                    `${server}/coins/${'bitcoin'}`
                );

                const { data: chartData } = await axios.get(
                    `${server}/coins/${'bitcoin'}/market_chart?vs_currency=${currency}&days=${days}`
                );

                setCoin(data);
                setChartArray(chartData.prices);
                console.log(chartData.Prices + "!")
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchCoin();
    }, [params.id, currency, days]);

    return <div>
        {loading ? <>Loading</> : (
            <div className='p-8 col-span-2 bg-white'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <img
                                src={coin?.image?.large}
                                width={36}
                                height={36}
                                alt='coin image'
                            />
                            <div className='text-lg font-bold'>{coin.name}</div>
                            <div>{coin?.symbol?.toUpperCase()}</div>
                            <div className='bg-gray-500 px-3 py-1 text-white rounded-lg'>{`Rank #${coin.market_cap_rank}`}</div>
                        </div>

                    </div>
                    <div>
                    </div>
                </div>
                <div className='mt-4 pb-3'>
                    <div className='flex gap-2 my-6 items-start'>
                        <div className='font-semibold text-2xl'>${coin?.market_data?.current_price[currency]}</div>
                        <div className={`${coin.market_data?.price_change_24h > 0 ? 'bg-green-100' : 'bg-red-100 '} px-1 rounded-md  ml-4`}>
                            {coin.market_data?.price_change_24h > 0 ? <span className=' text-green-600'><GoTriangleUp className='inline text-xl' />{coin?.market_data?.price_change_24h} % </span> : <span className=' text-red-600 w-full'><GoTriangleDown className='inline text-xl' />{coin?.market_data?.price_change_24h} %</span>}
                        </div>
                        <div className='text-gray-500 text-sm'>(24H)</div>
                    </div>
                    <div className='sm:flex justify-between pt-3 text-sm border-t-2'>
                        <div className='text-lg font-semibold'>Bitcoin price chart (usd)</div>
                        <div className='flex gap-3'>
                            {btns.map((i) => (
                                <button type='button'
                                    className={`px-1 rounded-full ${days === i ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-500'}`}
                                    disabled={days === i}
                                    key={i}
                                    onClick={() => switchChartStats(i)}
                                >
                                    {i}
                                </button>
                            ))}
                        </div>
                    </div>
                    <Chart arr={chartArray} currency={currencySymbol} days={days} />

                </div>
            </div>
        )}
    </div>
};

export default CoinDetails