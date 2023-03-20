import { CastList } from "@/components/CastList";
import { Layout } from "@/components/Layout";
import Head from "next/head";


export default function Home({cast}) {
  return (
    <Layout>
    <Head>
      <title>welcome start</title>
    </Head>
    <main>
      <h1>welcome</h1>
      <CastList cast={cast} />
    </main>
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://next-app0313.s3.ap-northeast-2.amazonaws.com/data.json');
  const data = await res.json();
  return {
    props: {
      cast: data
  }
  }
  
}
