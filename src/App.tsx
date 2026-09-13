import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import type { ITechnology } from "./types/technology";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";


const technologyFetch = async ():Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [technologyPromise]= useState(technologyFetch())
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <p className="text-6xl font-bold text-gray-500">Loading......</p>
          </div>
        }
      >
        <Navbar />
        <Banner />
        <Technologies technologyPromise={technologyPromise}/>
        <Footer/>
      </Suspense>
    </>
  );
}

export default App;
