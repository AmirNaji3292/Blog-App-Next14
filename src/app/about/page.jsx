import { connectToDb } from "@/lib/utils";
import Image from "next/image";


export const metadata = {
  title: "About Page",
  description: "About description",
};


const  AboutPage = () => {

  // console.log("lets check where it works")

  return (
    <div className="flex justify-center items-center">
      <div className="ml-4 w-[50%] mt-12" >
        <h2 className="font-bold text-[17px] text-blue-600">About Blog</h2>
        <h1 className="text-white text-[40px] font-bold mt-8 mb-8">
            ABOUT THIS BLOG APP
        </h1>
        <p className="text-white tracking-widest text-xl">
         Hello you can join to this blog and add new post ,first you must register in 
         blog , and you can with admin join to watch better this WebApplication,
         This is fullstack App . and I use Nextjs14 and MongoDb for Database,
         and NextAuth for Auth.
         you can join with <b>username:admin ,and password:1234</b>
        </p>
        <div className="text-white flex mt-6 gap-12" >
          <div className="text-white">
            <h1 className="font-semibold text-[25px]">10 K+</h1>
            <p className="text-[12px]">Year of experience</p>
          </div>
          <div >
            <h1 className="font-semibold text-[25px]">10 K+</h1>
            <p className="text-[12px]" > Year of experience</p>
          </div>
          <div >
            <h1 className="font-semibold text-[25px]"> 10 K+</h1>
            <p className="text-[12px]">Year of experience</p>
          </div>
        </div>
      </div>
      <div >
        <Image
          src="/about.png"
          alt="About Image"
          width={600}
          height={700}
         
        />
      </div>
    </div>
  );
};

export default AboutPage;
