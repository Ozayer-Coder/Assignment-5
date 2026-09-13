import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="pt-16 pb-12 border border-[#F1F5F9]">
      <div className="container mx-auto flex flex-col gap-14 pl-8 pr-8">
        <div className="grid grid-cols-1 md:grid-cols-5 text-center md:text-left">
          <div className="md:col-span-2 gap-1 ">
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <img src={Logo} alt="" />
            </div>
            <p className="text-[16px] text-[#64748B]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="pt-3 flex justify-center items-center md:justify-start md:items-start  gap-4">
              <a href="">GitHub</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
            </div>
          </div>
          <div className="hidden md:block md:col-span-1">
            <h2 className="text-[16px] font-semibold pb-4">PRODUCT</h2>
            <div className="flex flex-col gap-1 text-[#64748B]">
              <a href="">Home</a>
              <a href="">Technologies</a>
              <a href="">Projects</a>
            </div>
          </div>
          <div className="hidden md:block md:col-span-1">
            <h2 className="text-[16px] font-semibold pb-4">COMPANY</h2>
            <div className="flex flex-col gap-1 text-[#64748B]">
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Careeers</a>
            </div>
          </div>
          <div className="hidden md:block md:col-span-1">
            <h2 className="text-[16px] font-semibold pb-4">LEGAL</h2>
            <div className="flex flex-col gap-1 text-[#64748B]">
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between pt-8">
          <p className="text-[16px] text-[#64748B]">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-1 text-[#64748B] ">
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
