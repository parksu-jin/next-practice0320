import Link from "next/link"


export const CastList = ({cast}) => {
  return(
    <div>
     {
      cast.map(member => (

        <p key={member.id}>
          <Link href="/member/[id]" as={`/member/${member.id}`}>
          {member.name}
          </Link>
          </p>

        ))
     }
    </div>
  )
}

