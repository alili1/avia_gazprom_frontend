import {Container} from "react-bootstrap";
import {useState, useEffect} from "react";
import "../search/search.scss"

const SearchComponent = ({searchName, options, setHandleChangedSelectedValue}) => {

    const [selectedOption, setSelectedOption] = useState("")

     //изменение типа вопроса
     const handleChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
    };

    useEffect(() => {
        setHandleChangedSelectedValue(selectedOption);
    }, [selectedOption])

    return (
        <Container className='search'>
            <div className='search--name'>
                {searchName}
            </div>
            <div className='search--field'>
                <select className="search--field-option" value={selectedOption} onChange={(e) => handleChange(e)}>
                        {options.map((item, i) => {return <option key={i} value={item.id == null ? 0 : item.id}>{item.label}</option>})}
                </select>
            </div>
        </Container>
    )
}

export default SearchComponent;