import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from 'lucide-react';

const Portfolio = () => {
  return (
    <div>
        <section className=" flex flex-col px-6 sm:px-8 md:px-[80px] py-16 sm:py-24 gap-20 sm:gap-16 md:gap-24">
            <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" >My Portfolio</h3>
                <p className="text-base sm:text-lg md:text-[18px] py-6 sm:py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            {/* Project 1 */}

            <div className="  flex flex-col lg:flex-row justify-between items-center">
                <div className="">
                    <h4 className="font-bold text-[24px] md:text-[36px]">BNB Corperation App</h4>
                    <p className="md:w-[560px] text-[18px] my-4  md:my-8 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, delectus qui quos beatae, voluptatum in, officia amet numquam odio eius molestias distinctio optio dolorum? Illum doloribus maiores optio odio ab.</p>
                    <div className=" text-[14px] bg-gray-100 w-[97px] h-[29px]  border border-dotted rounded border-gray-500 p-1 sm-4 md:mb-8">Photography</div>
                    {/* <Button variant="outline" className="bg-white w-[182px] h-[48px] text-black border-slate-900 ">View Peoject{`>`}</Button> */}
                    <div className="flex pb-16"><Link href={'/'}>View Project</Link><ChevronRight/> </div>
                    
                </div>
                <div className="">
                <Image src="/p1.png" alt="Speakers" width={616} height={384}  />
                </div>

            </div>

            {/* Project 2 */}

            <div className=" flex  flex-col lg:flex-row-reverse justify-between items-center">
                <div className="">
                    <h4 className="font-bold text-[24px] md:text-[36px]">Bath and Body</h4>
                    <p className="md:w-[560px] text-[18px] my-4  md:my-8 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, delectus qui quos beatae, voluptatum in, officia amet numquam odio eius molestias distinctio optio dolorum? Illum doloribus maiores optio odio ab.</p>
                    <div className=" text-[14px] bg-gray-100 w-[97px] h-[29px]  border border-dotted rounded border-gray-500 p-1 sm-4 md:mb-8">Photography</div>
                    <div className="flex pb-16"><Link href={'/'}>View Project</Link><ChevronRight /> </div>
                    
                </div>
                <div className="">
                <Image src="/p2.png" alt="Speakers" width={616} height={384}  />
                </div>

            </div>

            {/* Project 3 */}

            <div className=" flex flex-col lg:flex-row justify-between items-center">
                <div className="">
                    <h4 className="font-bold text-[24px] md:text-[36px]">Selena Web Portal</h4>
                    <p className="md:w-[560px] text-[18px] my-4  md:my-8 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, delectus qui quos beatae, voluptatum in, officia amet numquam odio eius molestias distinctio optio dolorum? Illum doloribus maiores optio odio ab.</p>
                    <div className=" text-[14px] bg-gray-100 w-[97px] h-[29px]  border border-dotted rounded border-gray-500 p-1 sm-4 md:mb-8">Photography</div>
                    <div className="flex pb-16"><Link href={'/'}>View Project</Link><ChevronRight /> </div>
                    
                </div>
                <div className="">
                <Image src="/p3.png" alt="Speakers" width={616} height={384}  />
                </div>
            </div>
        </section>      
    </div>
  )
}

export default Portfolio
