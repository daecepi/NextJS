import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { blogSlug } = router.query

  return <p>Post: {blogSlug}</p>
}

export default Post