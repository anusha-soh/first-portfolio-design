import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex gap-2">
                <Image src="/logo.png" alt="logo" width={32.58} height={30.36}  />
                <h2 className=" font-bold text-[25.07px] text-[#676767]">Disgnr</h2>
    </div>
  )
}

export default Logo
