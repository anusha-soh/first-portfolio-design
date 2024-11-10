import Link from "next/link";
import Logo from "@/components/logo";
import { footerCwLinks, footernavlinks } from "@/constant";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-1 justify-between max-w-[1440px] mx-auto p-[80px]">
      <section className=" pb-6 md:pb-12  md:px-12">
        <div className="flex flex-col gap-10 md:gap-2 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 md:gap-2 items-center md:items-start max-w-[400ppx]">
            <div >
              <Logo />
            </div>
            <div>
            <ul className="flex justify-between items-center gap-3 md:gap-5 text-[16px] md:text-[18px]">
              {footernavlinks.map((item) => (
                  <li key={item.key}>
                  <Link href={item.link}> {item.name}</Link>
                </li>
              ))}
            </ul>
            </div>
          </div>

          {/* subscibtion form */}
          <div className="hidden md:block max-w-[400ppx]">
            <form>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="md:text-[14px]" htmlFor="email">
                  Subscribe
                </Label>
                <div className="flex gap-4">
                  <Input
                    className="border-slate-900"
                    type="email"
                    id="email"
                    placeholder={`Enter Your E-mail`}
                  />
                  <Button
                    variant="outline"
                    type="submit"
                    className="border-slate-900 bg-white w-full sm:w-[96px] text-black mt-2 sm:mt-0"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className=" flex flex-col md:flex-row-reverse md:gap-1 gap-4 justify-between max-w-[1280px] items-center pt-7 border-t-[2px] border-[#676767] ">
          <ul className="flex md:px-10 px-0 gap-1 md:gap-3">
            {footerCwLinks.map((item) => (
              <li key={item.key} className=" text-[10px]">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <p  className="text-[12px]">2023 Disgner All rights reserved</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
