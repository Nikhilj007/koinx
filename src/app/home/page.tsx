'use client';

import CoinDetails from "../components/CoinDetails";
import Image from 'next/image';
import Trending from "../components/Trending";
import MayLike from "../components/MayLike";
import Navx from "../components/Navx";
import Performance from "../components/Performance";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Sentiment from "../components/Sentiments";

const keyEvents = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt illo earum natus dolore.',
      content: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia .',
      isPositive: true,
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt illo earum natus dolore.',
      content: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia .',
      isPositive: false,
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt illo earum natus dolore.',
        content: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia .',
        isPositive: false,
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt illo earum natus dolore.',
        content: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia .',
        isPositive: false,
      },
    // Add more key events as needed
  ];
  
  const analystEstimates = {
    buy: 76,
    hold: 8,
    sell: 16,
  };

function Home() {
    return (
        <div className="">
            <div className="px-10 py-2">Cryptocurrencies  {'>>'} Bitcoin</div>
            <div className="md:flex items-start bg-gray-200 pb-14">
                <div className="flex-2 sm:m-6 sm:mt-2 m-1">
                    <CoinDetails />
                    <Navx />
                    <Performance />
                    <About/>
                    <Tokenomics />
                    <Sentiment keyEvents={keyEvents} analystEstimates={analystEstimates} />
                </div>
                    <div className="mt-2 hidden sm:flex flex-1 justify-center flex-col">
                        <Image className="mx-auto" src={'/getStarted.svg'} width={416} height={515} alt="" />
                        <Trending />
                    </div>
            </div>
            <div className="sm:px-6">
                <MayLike like={true} />
                <MayLike like={false} /> 
            </div>
                    <div className="mt-2 sm:hidden flex flex-1 justify-center flex-col">
                        <Image src={'/getStarted.svg'} width={416} height={515} alt="" />
                        <Trending />
                    </div>
        </div>
    );
}

export default Home;