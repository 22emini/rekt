
import ContentOne from '@/components/Content'
import ContentThree from '@/components/ContentThree'
import ContentTwo from '@/components/ContentTwo'
import Footer from '@/components/Footer'
import Home from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Home/>
      <ContentOne />
<ContentTwo />
<ContentThree />


      <Footer />
    </div>
  )
}

export default page
