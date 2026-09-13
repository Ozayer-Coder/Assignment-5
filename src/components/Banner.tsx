import BannerImage from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="grid grid-cols-12  items-center gap-8">
        <div className="col-span-7 pr-8">
          <h2 className="font-extrabold text-6xl tracking-wide pb-6">
            Build Your Ideal{" "}
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>
          <p className="font-normal text-lg text-[#475569]  pb-10">
            Explore frontend, backend, database, and tooling options,
            <br /> compare them side by side, and put together the stack that
            fits your <br />
            next project.
          </p>
          <div className="flex gap-3 items-center pt-3">
            <button className="btn px-4 py-2 text-sm font-medium text-white rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899]">
              Explore Technologies
            </button>
            <button className="btn px-10 py-2 text-sm font-medium text-[#374151] rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-span-5">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
