const Hello = (props) => {
  console.log(props)
  if (!props.age) {
    return (
      <div>
        <p>Hellow {props.name}</p>
      </div>
    )

  } else {
    return (
      <div>
        <p>Hellow {props.name}, you are {props.age} years old</p>
      </div>
    )
  }

}

const App = () => {
  
  const name = 'Alejandro'
  const age = 13

  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  
  const friends = [
    {name: 'Alberto', age: 22},
    {name: 'Alejandro', age: 23},
  ]

  const friendsName = [
    friends[0].name,
    friends[1].name
  ]

  return (
    <>
      <div>
        <p>{friends[0].name} {friends[0].age}</p>
        <p>{friends[1].name}</p>
      </div>

      <div>
        <p>{friendsName.join(', ')}</p>
      </div>

      <h1>Greetings</h1>
      <Hello 
        name="World"
      />
      <Hello 
        name="Alberto"
      />

      <Hello
        name={name}
        age={age + 10}
      />

      <p>
        {a} + {b} = {a + b}
      </p>
    </>
  )
}

export default App


/*

Esto funciona

export default () => {
  return (
    <div>
      <p>Hellow World</p>
    </div>
  )
}


*/