interface Props {
  name: string
  age: number
}

interface ExtendedProps extends Props {
  lastName: string
}

function ChildComponent(props: Props) {
  const extendedProps: ExtendedProps = {
    ...props,
    lastName: 'Doe',
  }
  const { name, age, lastName } = extendedProps

  return (
    <h2>
      {name} {lastName} is {age}
    </h2>
  )
}

function ParentComponent(props: Props) {
  return <ChildComponent {...props} />
}

export default function Page() {
  const props = {
    name: 'John',
    age: 35,
  }

  return (
    <>
      <h1>Props Spread Operator</h1>

      <p className='mb-2'>
        The spread operator can be used to pass props to a child component. It
        is useful when you have a lot of props to pass.
      </p>

      <ParentComponent {...props} />
    </>
  )
}
