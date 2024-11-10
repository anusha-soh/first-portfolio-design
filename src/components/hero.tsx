import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"




const Hero = () => {
  return (
    <>
    <main className="max-w-[1440px]  mx-auto">
      
<section className="flex items-center py-[50px] md:py-[114px]">
  <div className="w-full max-w-[800px] mx-auto text-center px-4">
    <h3 className="text-3xl sm:text-4xl md:text-[56px] font-bold md:leading-tight">
     {`I'm a Product Designer based in New York`}
    </h3>
    <p className="text-base sm:text-[18px] md:text-[18px] my-7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </p>
    <div className="flex justify-center gap-4 flex-wrap">
      <Button variant="outline" className="bg-slate-900 w-[96px] sm:w-[120px] m-2 h-[48px] text-white">
        Hire Me
      </Button>
      <Button variant="outline" className="bg-white w-[182px] sm:w-[200px] m-2 h-[48px] text-black border-slate-900">
        Download Resume
      </Button>
    </div>
  </div>
</section>


        {/* SECTION 2 */}
        <section className=" max-w-[1440px] mx-auto px-4 md:px-[64px] py-[80px]">
            <p className="font-bold text-[18px] mb-16">Companies i have worked With</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[35px] lg:p-14 mx-auto">
                <Image src="/logo1.png" alt="logo" width={226.61} height={70.5}  />
                <Image src="/logo2.png" alt="logo" width={226.61} height={70.5}  />
                <Image src="/logo3.png" alt="logo" width={226.61} height={70.5}  />
                <Image src="/logo4.png" alt="logo" width={226.61} height={70.5}  />
                <Image src="/logo5.png" alt="logo" width={226.61} height={70.5}  />
                        
            </div>

        </section>



        {/* About SECTION */}
        <section className="flex flex-col lg:flex-row md:justify-between px-5 md:px-24 lg:px-[80px] py-9 mx-auto md:py-24">
            <div className="my-auto">
                <h3 className=" text-3xl sm:text-4xl  md:text-[56px] font-bold py-4 sm:py-6 md:py-8">About me</h3>
                <p className="max-w-[600px] mb-6 text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos assumenda debitis quisquam voluptates nam, illo, in iure aperiam atque a vero illum excepturi error. Veniam explicabo, magni fugiat cumque ab tempora. Ullam deleniti nobis harum deserunt dolores similique! Qui blanditiis atque incidunt debitis unde libero saepe, sapiente iusto at?</p>
                <div className="flex justify-center sa:gap-1 md:gap-4 flex-wrap py-4 sm:py-6 md:py-8 ">
                    <Button variant="outline" className="bg-slate-900 w-[96px] sm:w-[120px] m-2 h-[48px] text-white">
                        Hire Me
                    </Button>
                    <Button variant="outline" className="bg-white w-[182px] sm:w-[200px] m-2 h-[48px] text-black border-slate-900">
                        Download Resume
                    </Button>
    </div>
            </div>

            <div className="grid gap-1 sm:gap-2 md:gap-3 lg:gap-4 grid-cols-2 max-w-[600px] max-h-[698px]">
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

        {/* contact section */}
        <section className="flex flex-col lg:flex-row justify-between items-center px-[40px] md:py-[80px] sm:py-[40px] ">

            
            <div className=" hidden w-[616] h-[735px] lg:block">
            <Image src="/map.png" alt="map" width={616} height={734}  />
            </div>

            
        <div className=" flex flex-col items-center lg:justify-evenly justify-between max-w-[616px] h-[650px] px-1 md:px-14 ">
                
                
                <h3 className="text-3xl sm:text-4xl  lg:text-[56px] font-bold py-4 sm:py-6 md:py-8leading-none">Contact Us</h3>
                <p className="text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab et consequuntur autem repudiandae, modi exercitationem!</p>
                

                <form className="flex flex-col gap-8">

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" placeholder="Your name here" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>

                    
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="message">Your message</Label>
                        <Textarea placeholder="Type your message here." id="message" />
                    </div>

                    <div className="flex items-center space-x-2">
                
                    <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Accept terms and conditions
                        </label>
                    </div>

                    
                    <Button variant="outline" type="submit" className="bg-slate-900 w-[96px] m-2 h-[48px] text-white ">Submit</Button>
                    
                </form>
            </div>
        </section>

    </main>
    </>
  )
}

export default Hero