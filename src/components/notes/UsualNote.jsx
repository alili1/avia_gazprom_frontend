import {Container} from "react-bootstrap";
import "../notes/notes.scss"

const UsualNote = ({message}) => {

    return (
        <Container fluid className='note'>
            <div className='note--message'>
                {message}
            </div>
        </Container>
    )
}

export default UsualNote;