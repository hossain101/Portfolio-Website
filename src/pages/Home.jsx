import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
//import { is } from "@react-three/fiber/dist/declarations/src/core/utils";

const Home = () => {
  const adjustIslandforScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }
    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandforScreenSize();
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 flex items-center justify-center">
        <h1>Pop up</h1>
    </div> */}

      <Canvas
        className="w-full h-screen relative"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2} />
          <ambientLight  />
          <pointLight  />
          <spotLight  />
          <hemisphereLight  />


          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
