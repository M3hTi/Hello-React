import * as React from 'react'

const welcome = {
  title : 'React',
  greeting : 'Hey'
}

function App() {
  return (
    <>
      <div>
        <h1>{welcome.greeting} Welcome to {welcome.title}</h1>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search"/>

      </div>
    </>
  )
}


export default App;


