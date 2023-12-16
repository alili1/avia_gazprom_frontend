
import {Container} from "react-bootstrap";
import {useState, useLayoutEffect} from "react";

const MainPage = () => {

    const [cityList, setCityList] = useState([])

    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
      });

    
    useLayoutEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/getCityList`)
        .then((response) => {
            response.text().then(text => {
                console.log(text)
                const data = text && JSON.parse(text);
                console.log(data)
                setCityList(data)
            });
            setAppState({loading: false, repos: response});
        })
        .catch(function(error) {
            console.log(error)
        });
    }, [setAppState])

    return (
        <div className='main-page'>
            <Container fluid className='banner'>
            {cityList && cityList?.map((city, i) => (
                <div key={i}>
                    {city.id}+{city.country}
                </div>))}
            </Container>
        </div>
    )
}

export default MainPage;