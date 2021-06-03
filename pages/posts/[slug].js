import { useRouter } from 'next/router'

import content from '../posts.json'

const Post = ( post ) => {

  return (
    <h1>{post.title}</h1>
  )
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const posts = content.posts

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the post `slug`.
  // If the route is like /posts/1, then params.slug is 1

  const currentPost = content.posts.find(post => {
    return post.slug === params.slug
  })
  // Pass post data to the page via props
  return { props: currentPost }
}



export default Post