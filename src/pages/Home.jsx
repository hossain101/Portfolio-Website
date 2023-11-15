import {Suspense} from "react";

import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";


const Home = () => {
  return (
 <section className="w-full h-screen relative">
    {/* <div className="absolute top-28 left-0 right-0 flex items-center justify-center">
        <h1>Pop up</h1>
    </div> */}

    <Canvas className="w-full h-screen relative" camera={{near: 0.1, far:1000}}>

        <Suspense fallback={<Loader />}>
            </Suspense>

    </Canvas>

 </section>
  );
};

export default Home;
