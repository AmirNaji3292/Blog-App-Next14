
import { getPosts } from "@/data";
import Postcart from "../compnents/Postcart/Postcart";

export const metadata = {
  title: "Posts Next App",
  description: "all posts | next app",
};


 const fetchApi=async()=>{

   const res=await fetch('http://localhost:3000/api/blog',{next:{revalidate:3600}})
   if(!res.ok){
    console.log('something wrong in fetch data.')
   }
   return res.json()
}

async function blog(){


   const posts=await getPosts()
  //  const posts=await fetchApi()
   
  
    return(
        <div className="mt-8">
            <div className="grid grid-col-1 gap-2  md:grid-cols-2 lg:grid-cols-3 
             2xl:grid-cols-3" >
              {
                posts.map((post)=>(<Postcart post={post}/>))
              }
            
             
            </div>
        </div>
    )
}
export default blog;