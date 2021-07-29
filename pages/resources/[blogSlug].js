import { useRouter } from 'next/router'
import { getAllPostsWithSlug, getBlogEntry } from '../../lib/api';

const Post = ({entry}) => {
  // const router = useRouter()
  // const { blogSlug } = router.query

  return (
  <>
    <p>Post: entry.title</p>
    {/*entry.landingBlocks.map((block)=>{
            console.log(block)
            return (
                <p>{ block.typeHandle }</p>
            )
        })*/}
  </>
  )
}

export default Post

export async function getServerSideProps({params}) {
  const entry = await getBlogEntry(params);

  if (!entry) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
        entry
    }, // will be passed to the page component as props
  }
}