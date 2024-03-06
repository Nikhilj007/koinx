import Image from 'next/image';
import token from '../../../public/Token.svg'

function Tokenomics() {
    return ( 
    <>
    <div className="p-6 rounded-lg pb-14 my-6 bg-white">
            <h1 className="text-2xl font-semibold">Tokenomics</h1>
            <div className='mt-6 font-semibold'>Initial Distrbution</div>
            <Image className="" src={token} width={750} height={400} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
        </div>
    </> );
}

export default Tokenomics;