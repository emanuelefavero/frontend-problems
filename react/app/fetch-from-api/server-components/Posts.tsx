import type { Post } from './types'

type Props = {
  posts: Post[]
}

export default function Component({ posts }: Props) {
  if (!posts) return null

  return (
    <>
      <ul className='max-w-prose'>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className='text-xl font-semibold'>{post.title}</h2>
            <p className='opacity-80'>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
