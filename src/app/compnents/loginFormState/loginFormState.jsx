'use client'
import { LoginAction,handleLogInGithub } from "@/lib/action"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useFormState } from "react-dom";
import Link from 'next/link'


function LoginFormState() {
    const router=useRouter()
    const [state,formAction]=useFormState(LoginAction,undefined)

    useEffect(()=>{
        state?.success && router.push('/register')
    },[state?.success,router])

  return (

    <div >


   <div className=" bg-red-100 felx justify-center items-center rounded-lg ">
       
       <div className="w-[100%]  bg-green-400 p-8 rounded-lg">
        <h2 className="text-2xl text-white ml-10">login Page</h2>


       <form className="p-2" action={formAction}  >
           

               <div className=" flex justify-center">
                     <input className="w-[90%] p-2 text-lg rounded-lg m-2" type="text" name='username' placeholder="username" />
                 </div>
 
                 
 
                 <div className=" flex justify-center">
                     <input className="w-[90%] p-2 text-xl rounded-xl m-2" type="text" name='password' placeholder="password" />
                 </div>
                 <button className="text-white text-xl m-2 border-2 p-2">login</button>
 
              
             </form>

               <form action={handleLogInGithub}>
                <button  className="text-red-600 font-semibold border-2 p-2">login with github</button>
              </form>

               </div>


   </div>
    <p className="text-red-800 font-semibold">   {state?.error}</p>
    <p className="text-blue-500">have not an account ?<Link href='/register'>register</Link></p>
    </div>
    
  )
}

export default LoginFormState