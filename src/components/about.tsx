import Image from "next/image"
import { Button } from "@/components/ui/button"


const About = () => {
  return (
    <div>
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
      
    </div>
  )
}

export default About
