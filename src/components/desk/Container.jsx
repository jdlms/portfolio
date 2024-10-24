import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Loader } from "./Loader";
import { Spinner } from "./Spinner";

export function Container() {
  return (
    <div className=" flex justify-center mt-4 mb-6 md:h-80 md:mt-0">
      <Canvas
        style={{ height: "80%", width: "80%" }}
        camera={{ position: [0, 7, -10], fov: 70 }}
      >
        <ambientLight intensity={2} />
        <pointLight position={[0, 18, -10]} intensity={500} color="#fff" distance={0}/>
        <Suspense fallback={<Spinner />}>
          <Loader />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={4.5}
          target={[2, 2.9, 1]}
        />
      </Canvas>
    </div>
  );
}


// <Canvas
// style={{ height: "80%", width: "80%" }}
// camera={{ position: [0, 7, -10], fov: 75 }}
// className="bg-[#8d4f5e] h-62 w-64 rounded-full"
// >