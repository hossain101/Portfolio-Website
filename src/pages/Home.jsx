import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
//import { is } from "@react-three/fiber/dist/declarations/src/core/utils";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage,setCurrentStage] = useState(1);

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
  const adjustPlaneForScreenSize = () => {
    let screenScale,  screenPosition;
    

    if (window.innerWidth < 768) {
      screenScale = [1.5,1.5,1.5];
      screenPosition = [0,-1.5,0];
    } else {
      screenScale = [3,3,3];
      screenPosition = [0,-4,-4];
    }
    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandforScreenSize();

  const [planeScale, planePosition] =
    adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 flex items-center justify-center">
        <h1>Pop up</h1>
    </div> */}

      <Canvas
        className={`w-full h-screen ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />

          <hemisphereLight
            skyColor="#bie1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating}/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane 
          isRotating={isRotating}
          planeScale={planeScale}
          planePosition={planePosition}
          rotation={[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
