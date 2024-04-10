"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './links.module.css'
import { useState } from 'react'
import { handleLogOtGithub } from '@/lib/action'

function Links({session}) {

    const [open , setOpen]=useState(false)

    const pathName=usePathname()

    const links=[
        {
         title:"Home",
         path:'/'
        },
        {
         title:"About",
        path:'/about'
        },
        {
            title:"Blog",
            path:'/blog'
        },
        {
            title:'Contact',
            path:'/contact'
        }

    ]

    
    // const isAdmin=true;

  return(
    <div className='flex gap-4 '>
        {
           links.map((item)=>(
             <div className='hidden sm:flex md:flex xl:flex 2xl:flex'>
            <Link 
            className={`${style.container} ${pathName===item.path && style.activ }`
           } 
            
            href={item.path} key={item.title}>{item.title}</Link></div>
           ))}
        {session?.user? (<div className='hidden sm:flex md:flex xl:flex 2xl:flex'> 
         {session.user?.isAdmin && <Link className='ml-3 italic mt-1 text-sky-500' 
          href='/admin'>isAdmin</Link>} 
          <form action={handleLogOtGithub}><button className='ml-4 italic mt-1 text-sky-500'>log out</button></form></div>):<Link 
          href='/login'>login</Link>}

         { /* start responsive */}
          <p >
          <button  className='sm:hidden md:hidden  lg:hidden xl:hidden 2xl:hidden'   
           onClick={()=>setOpen((prev)=>!prev)}><Image src='/menu.png' width={25} 
            height={25}/></button></p>
          {open && <div className='flex flex-col'>
            {
           links.map((item)=>(
            <Link 
            className={`${style.container} ${pathName===item.path && style.activ}` } 
            
            href={item.path} key={item.title}>{item.title}</Link>
           ))}
           {session?.user? (<div className=' sm:flex md:flex xl:flex 2xl:flex'> 
         {session.user?.isAdmin && <Link className='border-[1px]' 
          href='/admin'>isAdmin</Link>} 
          <form action={handleLogOtGithub}><button className='ml-2'>log out</button></form></div>):<Link 
          href='/login'>login</Link>}

            </div>}
    </div>
  )
}

export default Links