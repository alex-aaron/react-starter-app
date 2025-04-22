import FindMovie from './findMovie';

function Homepage(props){
  return (
    <div className="home">
      <h1 className='header'>Movie Tracker</h1>
      {/* <h2>{props.firstName} is {props.age} years old.</h2> */}
      <FindMovie />
    </div>
  )
}

export default Homepage;