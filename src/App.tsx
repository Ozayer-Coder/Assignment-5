import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
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
      </Suspense>
    </>
  );
}

export default App;
