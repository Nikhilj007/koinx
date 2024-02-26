import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="font-bold text-4xl flex justify-center items-center h-screen">
      <Link href="/home">Go To Coins Page  -{'>'}</Link>
    </div>
    </>
  );
}
