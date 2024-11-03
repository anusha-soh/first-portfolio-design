import { navItems } from "@/constant"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Header = () => {
  return (
    
    <header>
        <div className="flex max-w-[1440px] justify-between items-center  h-[72px] border-b-[1px] border-[#676767] lg:mx-auto sm:p-3 md:p-6 lg:p-8">
            <div className="flex">
                {/* <Image src={''}></Image> */}
                <h2 className=" font-bold text-[25.07px] text-[#676767]">Disgnr</h2>
            </div>
            <nav>
                <ul className="flex justify-between items-center gap-5 text-[18px]">
                    {/* <Link></Link> */}
                    {
                        navItems.map((item)=> <Link href={item.link}> <li> {item.name}</li></Link>)
                    }   
                    <Button variant="outline" className="bg-slate-900 w-[96px] h-[40px] text-white ">Hire Me</Button>

                </ul>            
            </nav>            
        </div>
    </header>
    
  )
}

export default Header
