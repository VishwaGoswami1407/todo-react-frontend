const App = ()  => {

  const handleSubmit = (event) => {
    event.preventDefault();

   
  }
  return (
    <div
      style={{
        // backgroundColor: "green",
        display: "flex",
        flexDirection : "row",
        width : "100%",
        height : "100vh",
        justifyContent : "center",
        alignItems : "center"
        
      }}
      >
      <form 
onSubmit={handleSubmit}
      style={{
        display : "flex",
        border : "1px solid rgba(0,0,0,0.4)",
        // backgroundColor : "lightblue",
        width : "50%",
        borderRadius : "10px",
        flexDirection : "column",
        padding : "10px",
        alignItems : "center"
        
      }}>
        <h1>TODO APP</h1>
        <div style={{
          display : "flex",
          width : "100%",
          flexDirection : "column",
          
          rowGap : "4px",
          // backgroundColor : "lightyellow"
        }}>
        <label>Title : </label>
        <input style={{marginBottom : "20px"}}  type="text" name="title" />
        <label>Description : </label>
        <textarea style={{marginBottom : "20px"}}  name="description" rows="4" cols="50"></textarea>
        <label>Date : </label>
        <input style={{marginBottom : "20px"}} type="date" name="date" />
        </div>
        <button type="submit" style={{
          width :"100px",
          height : "30px",
          border : "1px solid rgba(0,0,0,0.4)",
          
          borderRadius : "8px",
          
        }} name="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
