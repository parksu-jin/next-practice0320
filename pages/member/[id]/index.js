const { Layout } = require("@/components/Layout")
import Link from "next/link"


const castMember = ({castMember}) => {
  // console.log(castMember);
  return(
    <Layout>
      <main id="mm">
        <h1>{castMember.name}</h1>
        <p>{castMember.bio}</p>
        <p id="btn">
          <Link href="/">Home으로 이동</Link>
        </p>
      </main>
    </Layout>
  )
}

export const getServerSideProps = async(context) =>{
  const res = await fetch('https://next-app0313.s3.ap-northeast-2.amazonaws.com/data.json');
  const data = await res.json();


  const castMember = data.filter(item => item.id == context.params.id);
  console.log(castMember)

  return {
    props : {
      castMember : castMember[0]
    }
  }
}

export default castMember;