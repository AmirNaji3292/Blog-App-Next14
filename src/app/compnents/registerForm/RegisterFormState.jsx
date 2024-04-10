
'use client'
import { Register } from "@/lib/action"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useFormState } from "react-dom";
import Link from 'next/link'

function RegisterFormstate() {
    
    const [state, formAction] = useFormState(Register, undefined);

    const router = useRouter();
  
    useEffect(() => {
      state?.success && router.push("/login");
    }, [state?.success, router]);
  
  return (
    <div className="bg-slate-400 w-[40%] h-[60%] rounded-md">
    <form className="p-2" action={formAction}>
                <div className=" flex justify-center">
                    <h2 className="text-2xl text-white font-semibold">Register Form</h2>
                </div>
                  <div className=" flex justify-center">
                      <input className="w-[90%] p-2 text-lg rounded-lg m-2" type="text" name='username' placeholder="username" />
                  </div>
  
                  <div className=" flex justify-center">
                      <input className="w-[90%] p-2 text-lg rounded-xl m-2" type="text" name='email' placeholder="email" />
                  </div>
  
                  <div className=" flex justify-center">
                      <input className="w-[90%] p-2 text-xl rounded-xl m-2" type="text" name='password' placeholder="password" />
                  </div>
  
                  <div className=" flex justify-center">
                      <input className="w-[90%] p-2 text-xl rounded-lg m-2" type="text" name='RepeatPassword' placeholder="RepeatPassword" />
                  </div>

                  <div className=" flex justify-center">
                      <input className="w-[90%] p-2 text-lg rounded-lg m-2" type="text" name='img' placeholder="img" />
                  </div>
                  <div className=" flex justify-center mt-4">
                      <button className="w-[90%] text-white bg-slate-700 p-2 text-2xl rounded-lg m-2">register</button>
                  </div>
                 <p className="text-red-800 font-semibold"> {state?.error}</p>
                  <Link href='/login'>have an account? <b>login</b></Link>
              </form>
              </div>
  )
}

export default RegisterFormstate;