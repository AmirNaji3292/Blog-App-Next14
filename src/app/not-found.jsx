import Link from 'next/link'

function NotFound() {
  return (
    <div>
        <h2 className='text-red-600'>NotFound page </h2>

       <div>
       <Link href='/'>Home page</Link>
        </div> 
    </div>
  )
}

export default NotFound