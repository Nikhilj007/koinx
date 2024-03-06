'use client';

import Image from "next/image";
import lowhigh from '../../../public/lowhigh.svg';

function Performance() {
    return ( 
    <div className="p-6 rounded-lg my-6 bg-white">
        <h1 className="text-2xl font-semibold">Performance</h1>
        <Image className="my-10" src={lowhigh} width={750} height={400} alt="" />
    </div> );
}

export default Performance;

