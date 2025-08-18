import { Suspense } from 'react'
import Posts from './Posts'

async function getPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
    // {
    //   next: { revalidate: 60 }, // Revalidate every 60 seconds
    // },
  )

  const posts = await response.json()
  return posts
}

export default async function Page() {
  const posts = await getPosts()

  return (
    <>
      <h1>Fetch from API - Server Components</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Posts posts={posts} />
      </Suspense>
    </>
  )
}
