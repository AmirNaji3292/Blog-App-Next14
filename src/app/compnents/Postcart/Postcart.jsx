
import Image from 'next/image'
import Link from 'next/link'


function Postcart({post}) {


  return (
    <div className='max-w-[400px] bg-red-400 rounded-md py-2'>
        <div className='flex text-white justify-center relative py-4'>
           
             <div className='bg-red-400 max-h-[400px] overflow-hidden '>

            {post.img &&<Image src={post.img} width={300} height={300} 
             className='rounded-[4px] p-4 object-cover'/>}
             </div>
          
            <p className='rotate-90 p-0 m-0 text-[14px] absolute top-[40%] 
            right-[-30px] 
             '>{post.date}</p>
        </div>
        <div className='text-white pl-8' >
            <p className='font-semibold text-2xl'>{post.title}</p>
            <p className='max-h-[160px] text-white'>{post.description}</p>

            <p className='mt-4 '>
                <Link className='border-b-2' href={`/blog/${post.slug}`}>Read 
                 more</Link>
            </p>
        </div>
    </div>
  )
}

export default Postcart