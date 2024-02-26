import CoinDetails from "../components/CoinDetails";
import Image from 'next/image';
import Trending from "../components/Trending";

function Home() {
    return ( 
    <div className="bg-gray-200">
    <div className="px-10 py-2">Cryptocurrencies  {'>>'} Bitcoin</div>
    <div className="sm:grid sm:grid-cols-3 bg-gray-200">
        <div className="col-span-2 sm:m-6 sm:mt-2 m-1"><CoinDetails /></div>
        <div className="mt-6">
            <Image src={'/getStarted.svg'} width={416} height={515} alt="" />
            <Trending />
        </div>
    </div>

    </div>
    );
}

export default Home;