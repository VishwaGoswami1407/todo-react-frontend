import './App.css'

function App() {

  return (
    <>
     <h1>Hello World</h1>
     <label>Title : </label>
     <input type="text" name="title" />
     <label>Description : </label>
     <textarea name="description" rows="4" cols="50"></textarea>
     <label>Date : </label>
     <input type="date" name="date" />
     <button type="submit" name="submit">Submit</button>

    </>
  )
}

export default App
