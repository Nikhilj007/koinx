import React, { useRef } from 'react';
import inc from '../../../public/inc.svg';
import news from '../../../public/news.svg';
import Image from 'next/image';
import estimate from '../../../public/estimates.svg';

interface SentimentProps {
  keyEvents: {
    title: string;
    content: string;
    isPositive: boolean;
  }[];
  analystEstimates: {
    buy: number;
    hold: number;
    sell: number;
  };
}

const Sentiment: React.FC<SentimentProps> = ({ keyEvents, analystEstimates }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    //make the scroll in
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300; // Adjust the scroll amount as needed
    }
  };

  return (
    <div className="p-6 rounded-lg max-w-[55rem] pb-14 my-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">Sentiment</h2>
      <h3 className="text-xl font-bold mb-2">Key Events <span className='bg-gray-400 text-white rounded-full text-sm px-[0.4rem]'>i</span></h3>
      <div className="flex relative items-center mb-8">
        <div className="flex overflow-x-scroll shide " ref={scrollContainerRef}>
          {keyEvents.map((event, index) => (
            <div
              key={index}
              className={`flex gap-2 items-start ${event.isPositive ? 'bg-green-100' : 'bg-blue-100'} sm:min-w-[28.5rem] min-w-[19rem] sm:h-[15rem] p-4 mr-4 rounded-lg`}
            >
              <div className={`p-3 py-5 rounded-full ${event.isPositive?'bg-green-600':'bg-blue-600'}`}>
                <Image src={event.isPositive?inc:news} width={200} height={200} alt="" />
              </div>
              <div><h4 className="text-lg font-bold">{event.title}</h4>
              <p>{event.content}</p></div>
            </div>
          ))}
        </div>
        <button type='button'
          onClick={handleScrollRight}
          className="ml-4 bg-gray-100 absolute right-3 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full"
        >
          &gt;
        </button>
      </div>
      <h3 className="text-xl font-bold mb-2">Analyst Estimates <span className='bg-gray-400 text-white rounded-full text-sm px-[0.4rem]'>i</span></h3>
      <Image className='my-10' src={estimate} width={810} height={120} alt=''/>
    </div>
  );
};

export default Sentiment;