import Head from 'next/head'
import { fetchEntries } from "../util/ContentfulData"
import Layout from '../components/Layout'
import Image from 'next/image'
export default function Home({ data }) {
  return (
    
    <>
<Layout>
      {console.log(data)}
      <Head>
        <title>{data[0].name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <h1 className="text-gray-800 text-shadow-lg uppercase text-center font-bold mt-36 text-4xl ">Api Fun</h1>
<div className="mx-6" >
<div className="mx-auto flex  justify-center flex-wrap max-w-screen-2xl mt-24">

  { 
  data.map((result, i) => {
const {name, image: {fields: { file: { url } }}} = result 
    return (
   


      <div key={i} className="shadow-lg w-full sm:imageFlex m-4 h-96 text-center">
        <div className="relative h-56">
        <Image
        loading="lazy"
         objectFit="cover" 
         layout="fill" 
         src={`https:${url}`} 
         />  
   
</div>
        <h2 className="py-8 text-2xl">  { name }</h2>
     
      </div>
      
    )
  })
}
</div>

    </div>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const data = await res.map((post) => {
    return post.fields
  })

  return {
    props: {
      data
    },
  }
}
