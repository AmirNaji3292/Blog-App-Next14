
import { getPost, getUser } from '@/data'
import Image from 'next/image'



// SEO OPTIMAIZING//
export const generateMetadata=async({params})=>{
   const {slug}=params;

   const post= await getPost(slug)

   return{
    title:post.title,
    description:post.description
   }

}

 const fetchApiSlug=async(slug)=>{
    const res=await fetch(`http://localhost:3000/api/blog/${slug}`)
    if(!res.ok){
        throw new Error("faile to fetchapiSlug")
    }
    return res.json()
}


async function SinglePostPage({params}){
   
 const {slug}=params
     
    // const post= await getPost(slug)
    const post= await fetchApiSlug(slug)

     const id=post.userId
     console.log(id)
    const user=await getUser(id)

    return(
        <div className='text-white grid grid-col-1 lg:grid-cols-2 2xl:grid-cols-2'>
            <div className='ml-8'>
               { post?.img && <Image src={post.img} width={400} height={600}/>}
            </div>
            <div>
                <div className='mb-4'>
        { post.img && <Image src={post.img}width={50} height={50} className='m-4 rounded-[50%]'/>}
                     <div className='py-4'>
                        <span className='px-8 font-semibold'>Author:</span>
                       <span>{user.username}</span>
                     </div>
                    <div>
                    <span className='px-8 font-semibold'>Date:</span>
                    <span>{post.createdAt}</span>
                    </div>
                </div>
                <div className='mt-8 max-w-[70%]'>
                    <span className='text-lg font-semibold py-4'>Description:</span><br></br>
                    <span className='p-2 text-xl'>{post.description} </span>
                </div>
            </div>
        </div>
    )
}
export default SinglePostPage