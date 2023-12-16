
import {Container, Col, Row} from "react-bootstrap";
import {useState, useLayoutEffect} from "react";
import SearchComponent from "../components/search/SearchComponent";
import UsualNote from "../components/notes/UsualNote";
import CalendarComponent from "../components/calendar/CalendarComponent";
import ResultComponent from "../components/result/ResultComponent";
import "./main.scss"

const MainPage = () => {

    const [message, setMessage] = useState("Для получения информации о ценах, пожалуйста выберите города отправления и назначения, а также даты поездки")
    const [cityList, setCityList] = useState([])
    const [priceTo, setPriceTo] = useState("1000")
    const [priceFrom, setPriceFrom] = useState("1000")

    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
      });


    const setHandleChangedComebackDate = () => {

    }

    const setHandleChangedExportDate = () => {

    }
    const setHandleChangedSelectedFromValue = () => {

    }

    const setHandleChangedSelectedGoalValue = () => {

    }
    
    useLayoutEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/getCityList`)
        .then((response) => {
            response.text().then(text => {
                const data = text && JSON.parse(text);
                const alterCity = data.map((city) => ({
                    id: city.id, 
                    label: city.city_name,
                }))
                setCityList(alterCity)
            });
            setAppState({loading: false, repos: response});
        })
        .catch(function(error) {
            console.log(error)
        });
    }, [setAppState])

    return (
        <Container fluid className='main-page'>
            <UsualNote message={message}/>
            <Container className="main-page__container">
                <Row>
                    <Col md="auto" className = "main-page__container__search-panel"> 
                        <SearchComponent 
                            searchName = "Пункт отправления" 
                            options = {cityList} 
                            setHandleChangedSelectedValue = {setHandleChangedSelectedFromValue}/>
                        <SearchComponent 
                            searchName = "Пункт назначения" 
                            options = {cityList} 
                            setHandleChangedSelectedValue = {setHandleChangedSelectedGoalValue}/>
                        <CalendarComponent calendarName = "Дата отправления" passDate = {setHandleChangedExportDate}/>
                        <CalendarComponent calendarName = "Дата возвращения" passDate = {setHandleChangedComebackDate}/>
                    </Col>
                    <Col className = "main-page__container__result-panel"> 
                        <div className="main-page__container__result-panel__fields">
                            <ResultComponent resultName = "Средняя цена билета туда" resultMessage = {priceTo}/>
                            <ResultComponent resultName = "Средняя цена билета обратно" resultMessage = {priceFrom}/>
                        </div>
        {/*
                        <GraphicComponent grapchicName = "Дата отправления" passDate = {setHandleChangedExportDate}/>
                        <GraphicComponent grapchicName = "Дата возвращения" passDate = {setHandleChangedComebackDate}/> */}
                    </Col>
                </Row>
           </Container>
        </Container>
    )
}

export default MainPage;