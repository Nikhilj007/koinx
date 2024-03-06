import Image from "next/image";
import calProfit from '../../../public/calProfit.svg';
import tax from '../../../public/tax.svg';

function About() {
    return (
        <>
            <div className="p-6 rounded-lg my-6 bg-white">
                <h1 className="text-2xl mb-6 font-semibold">About Bitcoin</h1>
                <p className="font-bold my-4">What is Bitcoin</p>
                <p>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
                <p className="font-bold my-4 mt-10">Lorem ipsum dolor sit amet.</p>
                <div className="border-b">
                    <p className="py-4">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>

                    <p className="py-4">Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>

                    <p className="py-4">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                    </p>
                </div>
                <h1 className="text-2xl my-6 font-semibold">Already Holding Bitcoin?</h1>
                <div className="sm:flex justify-around gap-4 ">
                    <div className="bg-gradient-to-br sm:mb-0 mb-3 flex gap-4 items-center from-green-400  to-blue-800 rounded-lg">
                        <Image className="m-3" src={calProfit} width={128} height={128} alt="" />
                        <div>
                            <h1 className="text-white text-xl font-bold mb-6 ">Calculate Your Profit</h1>
                            <div className="p-2 rounded-lg bg-white inline cursor-pointer">Check Now -{">"}</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-tl flex gap-4 from-orange-400 items-center  to-red-500 rounded-lg">
                        <Image className="m-3" src={tax} width={128} height={128} alt="" />
                        <div>
                            <h1 className="text-white text-xl font-bold mb-6">Calculate Your Tax Liability</h1>
                            <div className="p-2 rounded-lg bg-white inline cursor-pointer">Check Now -{">"}</div>
                        </div>
                    </div>

                </div>
            </div>
        </>);
}

export default About;