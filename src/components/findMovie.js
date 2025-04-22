import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

function FindMovie(props){
  return (
      <Card className='findMovieCard flex-box'>
        <div className='movieInputContainer'>
          <Form>
            <Form.Group className="mb-3" controlId="findMovieInput">
              <Form.Label>Enter Film Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title Here" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        
      </Card>
  )
}

export default FindMovie;