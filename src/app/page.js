import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className=" gap-4  flex wrap">
      <div className="w-[47%] p-8">
        <h1 className="font-bold text-white text-[60px] p-4">Creative Thoughts Agency.</h1>
        <p className="text-white px-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className=" flex gap-2 m-4" >
          <button className="bg-blue-600 text-white py-2 px-1">Learn More</button>
          <button className="bg-white px-4  ">Contact</button>
        </div>
        <div className="mt-8 ml-8 " >
          <Image src="/brands.png" alt="" width={500} height={500} />
        </div>
      </div>
      <div >
        <Image  src="/hero.gif" alt="" width={500} height={500} className="bg-sky-800" />
      </div>
    </div>
  );
};

export default Home;
