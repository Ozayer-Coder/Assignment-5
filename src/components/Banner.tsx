import BannerImage from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="container mx-auto my-2 md:my-4 lg:my-10 ">
      <div className="grid   grid-cols-1 text-center md:text-left lg:text-left md:grid-cols-2 lg:grid-cols-12  items-center gap-1 md:gap-8 ">
        <div className="md:col-span-1 gap-2 lg:col-span-7 pr-2 md:pr-8">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-6xl tracking-wide pb-6">
            Build Your Ideal{" "}
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>
          <p className="font-normal text-sm md:text-lg text-[#475569]  pb-10">
            Explore frontend, backend, database, and tooling options,
            <br /> compare them side by side, and put together the stack that
            fits your next project.
          </p>
          <div className="flex gap-3 items-center justify-center md:justify-self-start pt-3 ">
            <button className="btn px-1 md:px-2 lg:px-4 py-2 text-sm font-medium text-white rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899]">
              Explore Technologies
            </button>
            <button className="btn px-4 md:px-6 lg:px-10 py-2 text-sm font-medium text-[#374151] rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-5 flex items-center justify-center">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
