import {Html} from '@react-three/drei';

const Loader = () => {
    return (
       <Html>
         <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
       </Html>
      );
}
 
export default Loader;