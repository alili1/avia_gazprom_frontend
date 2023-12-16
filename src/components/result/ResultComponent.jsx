import {Container} from "react-bootstrap";
import "../result/result.scss"

const ResultComponent = ({resultName, resultMessage}) => {

    return (
        <Container fluid className='result'>
            <div className='result--name'>
                {resultName}
            </div>
            <div className='result--message'>
                {resultMessage}
            </div>
        </Container>
    )
}

export default ResultComponent;