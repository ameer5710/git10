import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className='flex gap-5 text-2xl text-white bg-black'>
<Link href="\">HOME</Link>
<Link href="\name">NAME</Link>
<Link href="\name\about">ABOUT-US</Link>
<Link href="\name\about\contact">CONTACT-US</Link>
</div>
  )
}

export default Nav