import './App.css'

function App() {

  return (
    <div className=''>
     <h1>TODO APP</h1>
     <label>Title : </label>
     <input type="text" name="title" />
     <label>Description : </label>
     <textarea name="description" rows="4" cols="50"></textarea>
     <label>Date : </label>
     <input type="date" name="date" />
     <button type="submit" name="submit">Submit</button>
    </div>
  )
}

export default App
