
function Homepage(props){
  return (
    <div className="home">
      <h1>Homepage</h1>
      <h2>Added text</h2>
      <h2>{props.firstName} is {props.age} years old.</h2>
    </div>
  )
}

export default Homepage;