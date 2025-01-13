import * as React from 'react'

function getTitle(str){
  return `Hello ${str}`
}

const welcome = {
  greeting : 'Hello',
  title : 'React'
}


function getMsg(obj){
  return `${obj.greeting}, ${obj.title}`
}

function App() {
  return (
    <>
      <div>
        <h1>{getTitle('React')}</h1>
        <h1>{getMsg(welcome)}</h1>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search"/>

      </div>
    </>
  )
}


export default App;


