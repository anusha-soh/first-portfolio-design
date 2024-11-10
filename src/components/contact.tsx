import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

const Contact = () => {
  return (
    <div>
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

    </div>
  )
}

export default Contact
