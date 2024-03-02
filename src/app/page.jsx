import React from 'react'
import Main from "./worker/Main";
import Link from "next/link";
import WorkerLocationTracker from "./maplink/WorkerLocationTracker";


const page = () => {
  return (
    <div>
       <Link  href="/maplink"><button>client</button></Link>
     <Link href="/worker"> <button>worker</button> </Link>
    </div>
  )
}

export default page
