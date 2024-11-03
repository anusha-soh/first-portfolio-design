import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <>
    <main className="max-w-[1440px]  mx-auto">
        {/* SECTION 1 */}
        <section className=" flex items-center py-[114px] ">
        <div className="w-[800px] h-[300px]  mx-auto text-center">
            <h3 className="text-[56px] font-bold ">I’m a Product Designer based in New York</h3>
            <p className="text-[18px]  my-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <Button variant="outline" className="bg-slate-900 w-[96px] m-2 h-[48px] text-white ">Hire Me</Button>
            <Button variant="outline" className="bg-white w-[182px] m-2 h-[48px] text-black border-slate-900 ">Download Resume</Button>
        </div>
        </section>

        {/* SECTION 2 */}
        <section className="w-[1440px] mx-auto px-[64px] py-[80px]">
            <p className="font-bold text-[18px] mb-16">Companies i have worked With</p>
            <div className="flex gap-[35px]">
        <Image src="/logo1.png" alt="logo" width={226.61} height={70.5}  />
        <Image src="/logo2.png" alt="logo" width={226.61} height={70.5}  />
        <Image src="/logo3.png" alt="logo" width={226.61} height={70.5}  />
        <Image src="/logo4.png" alt="logo" width={226.61} height={70.5}  />
        <Image src="/logo5.png" alt="logo" width={226.61} height={70.5}  />
                
            </div>

        </section>

        {/* About SECTION */}
        <section className="flex justify-between px-[80px] py-24">
            <div className="my-auto">
                <h3 className="text-[56px] font-bold">About me</h3>
                <p className="w-[600px] mb-6 text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos assumenda debitis quisquam voluptates nam, illo, in iure aperiam atque a vero illum excepturi error. Veniam explicabo, magni fugiat cumque ab tempora. Ullam deleniti nobis harum deserunt dolores similique! Qui blanditiis atque incidunt debitis unde libero saepe, sapiente iusto at?</p>
                <Button variant="outline" className="bg-slate-900 w-[96px] m-2 h-[48px] text-white ">Hire Me</Button>
                <Button variant="outline" className="bg-white w-[182px] m-2 h-[48px] text-black border-slate-900 ">Download Resume</Button>
            </div>

            <div className="grid gap-4 grid-cols-2 w-[600px] h-[698px]">
                <div className="w-[292] h-[340]">
                <Image src="/am4.png" alt="logo" width={292} height={340}  />
                </div>

                <div className="w-[292] h-[340]">
                <Image src="/am2.png" alt="logo" width={292} height={340}  />
                </div>

                <div className="w-[292] h-[340]">
                <Image src="/am3.png" alt="logo" width={292} height={340}  />
                </div>

                <div className="w-[292] h-[340]">
                <Image src="/am1.png" alt="logo" width={292} height={340}  />
                </div>                
            </div>
        </section>

        {/* Portfolio Section */}
        <section className=" flex flex-col px-[80px] py-[80px] gap-24 ">
            <div>
                <h3 className="text-5xl font-bold" >My Portfolio</h3>
                <p className="text-[18px] py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            {/* Project 1 */}

            <div className=" flex justify-between items-center">
                <div className="">
                    <h4 className="font-bold text-[36px]">BNB Corperation App</h4>
                    <p className="w-[560px] text-[18px] my-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, delectus qui quos beatae, voluptatum in, officia amet numquam odio eius molestias distinctio optio dolorum? Illum doloribus maiores optio odio ab.</p>
                    <div className=" text-[14px] bg-gray-100 w-[97px] h-[29px]  border border-dotted rounded border-gray-500 p-1 mb-8">Photography</div>
                    {/* <Button variant="outline" className="bg-white w-[182px] h-[48px] text-black border-slate-900 ">View Peoject{`>`}</Button> */}
                    <div className="flex"><Link href={'/'}>View Project</Link><ChevronRight className="pl-2 " /> </div>
                    
                </div>
                <div className="">
                <Image src="/p1.png" alt="Speakers" width={616} height={384}  />
                </div>

            </div>

            {/* Project 2 */}

            <div className=" flex flex-row-reverse justify-between items-center">
                <div className="">
                    <h4 className="font-bold text-[36px]">Bath and Body</h4>
                    <p className="w-[560px] text-[18px] my-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, delectus qui quos beatae, voluptatum in, officia amet numquam odio eius molestias distinctio optio dolorum? Illum doloribus maiores optio odio ab.</p>
                    <div className=" text-[14px] bg-gray-100 w-[97px] h-[29px]  border border-dotted rounded border-gray-500 p-1 mb-8">Photography</div>
                    {/* <Button variant="outline" className="bg-white w-[182px] h-[48px] text-black border-slate-900 ">View Peoject{`>`}</Button> */}
                    <div className="flex"><Link href={'/'}>View Project</Link><ChevronRight className="pl-2 " /> </div>
                    
                </div>
                <div className="">
                <Image src="/p2.png" alt="Speakers" width={616} height={384}  />
                </div>

            </div>

            {/* Project 3 */}

            <div className=" flex justify-between items-center">
                <div className="">
                    <h4 className="font-bold text-[36px]">Selena Web Portal</h4>
                    <p className="w-[560px] text-[18px] my-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, delectus qui quos beatae, voluptatum in, officia amet numquam odio eius molestias distinctio optio dolorum? Illum doloribus maiores optio odio ab.</p>
                    <div className=" text-[14px] bg-gray-100 w-[97px] h-[29px]  border border-dotted rounded border-gray-500 p-1 mb-8">Photography</div>
                    <div className="flex"><Link href={'/'}>View Project</Link><ChevronRight className="pl-2 " /> </div>
                    
                </div>
                <div className="">
                <Image src="/p1.png" alt="Speakers" width={616} height={384}  />
                </div>
            </div>
        </section>

        {/* contact section */}
        <section className="flex justify-between items-center px-[80px] py-[80px]">

            {/* MAP */}
            <div className="w-[616] h-[735px]">
            <Image src="/map.png" alt="map" width={616} height={734}  />
            </div>

            {/* Form */}
            <div className=" w-[616px] h-[553px]">
                <h3 className="font-bold text-[48px]">Contact Us</h3>
                <p className="text-[16px]">Lorem ipsum dolor sit amet.</p>
                
            </div>
        </section>

    </main>
    </>
  )
}

export default Hero