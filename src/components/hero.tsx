import { Button } from "@/components/ui/button"
import Image from "next/image"
import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";




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
        <About/>

        
        {/* Portfolio Section */}

        <Portfolio/>
        

        {/* contact section */}
        <Contact/>
        
    </main>
    </>
  )
}

export default Hero