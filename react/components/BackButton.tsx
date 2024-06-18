import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button type='button' aria-label='Back' onClick={() => router.back()}>
      ←
    </button>
  )
}
