import { navItems } from "@/constant"
import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"  
import Link from "next/link"

const Header = () => {
  return (
    
    <header>
        <div className="flex max-w-[1440px] justify-between items-center  h-[72px] border-b-[2px] border-[#676767] lg:mx-auto p-5 md:p-6 lg:p-8">
            <Logo/>

{/* explain each tag and its purposr */}
            <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu className="sm:hidden" /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div>
           <ul  className="grid gap-4 py-4 justify-center"  >
                    {
                        navItems.map((item)=> <li className="border-[3px] border-red-500 " key={item.link}><Link href={item.link}> {item.name}</Link></li>)
                    }   
                    <Button variant="outline" className="bg-slate-900 w-[96px] h-[40px] text-white ">Hire Me</Button>

                </ul>                

        </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>





            <nav className="hidden sm:block">
                <ul className="flex justify-between items-center gap-5 text-[18px]">
                    {
                        navItems.map((item)=> <li key={item.link}><Link href={item.link}> {item.name}</Link></li>)
                    }   
                    <Button variant="outline" className="bg-slate-900 w-[96px] h-[40px] text-white ">Hire Me</Button>

                </ul>            
            </nav>            
        </div>
    </header>
    
  )
}

export default Header
