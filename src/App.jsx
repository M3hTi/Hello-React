import * as React from 'react'

function getTitle(str){
  return `Hello ${str}`
}

function App() {
  return (
    <>
      <div>
        <h1>{getTitle('React')}</h1>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search"/>

      </div>
    </>
  )
}


export default App;


