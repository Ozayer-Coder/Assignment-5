import Logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center container mx-auto py-4">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <a className="font-semibold text-sm text-[#DB2777]" href="">
            Home
          </a>
          <a className="font-semibold text-sm " href="">
            Technologies
          </a>
          <a className="font-semibold text-sm " href="">
            Projects
          </a>
          <a className="font-semibold text-sm " href="">
            About
          </a>
          <a className="font-semibold text-sm " href="">
            Contact
          </a>
        </div>
        <div className="flex gap-2">
          <button className="cursor-pointer">Sign In</button>
          <button className="btn bg-[#D91B7E] rounded-full text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
