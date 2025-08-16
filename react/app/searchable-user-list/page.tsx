import Users from './components/Users'
import UsersWithMemo from './components/UsersWithMemo'

export default function Page() {
  return (
    <>
      <h1>Searchable User List</h1>

      <div className='flex gap-4'>
        <div>
          <Users />
        </div>
        <div>
          <UsersWithMemo />
        </div>
      </div>
    </>
  )
}
