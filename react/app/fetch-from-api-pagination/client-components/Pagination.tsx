type Props = {
  page: number
  setPage: (page: number) => void
  totalPages: number
}

export default function Component({ page, setPage, totalPages }: Props) {
  return (
    <div className='flex w-fit items-center justify-center gap-2'>
      {/* First Page */}
      <button
        onClick={() => {
          setPage(1)
        }}
        disabled={page === 1}
        className='disabled:pointer-events-none disabled:opacity-50'
      >
        1
      </button>

      <button
        onClick={() => {
          setPage(page === 1 ? 1 : page - 1)
        }}
        disabled={page === 1}
        className='disabled:pointer-events-none disabled:opacity-50'
      >
        Prev
      </button>
      <div>
        Page {page} of {totalPages}
      </div>
      <button
        onClick={() => {
          setPage(page === totalPages ? totalPages : page + 1)
        }}
        disabled={page === totalPages}
        className='disabled:pointer-events-none disabled:opacity-50'
      >
        Next
      </button>

      {/* Last Page */}
      <button
        onClick={() => {
          setPage(totalPages)
        }}
        disabled={page === totalPages}
        className='disabled:pointer-events-none disabled:opacity-50'
      >
        {totalPages}
      </button>
    </div>
  )
}
