import Logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center container mx-auto py-4">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="font-semibold text-sm text-[#DB2777]">Home</p>
          <p className="font-semibold text-sm ">Technologies</p>
          <p className="font-semibold text-sm ">Projects</p>
          <p className="font-semibold text-sm ">About</p>
          <p className="font-semibold text-sm ">Contact</p>
        </div>
        <div className="flex gap-2">
          <button className="btn rounded-full ">Sign In</button>
          <button className="btn bg-[#D91B7E] rounded-full text-white">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
