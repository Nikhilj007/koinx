import CoinDetails from "../components/CoinDetails";
import Image from 'next/image';

function Home() {
    return ( 
    <>
    <div>Cryptocurrencies  {'>>'} Bitcoin</div>
    <div className="sm:grid sm:grid-cols-3 bg-gray-200">
        <div className="col-span-2 sm:m-6 m-1"><CoinDetails /></div>
        <div className="mt-6">
            <Image src={'/getStarted.svg'} width={416} height={515} alt="" />
        </div>
    </div>
    </>
    );
}

export default Home;