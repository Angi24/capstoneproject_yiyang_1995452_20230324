import React, { useState } from 'react';
import './style.less'
import {useNavigate} from 'react-router-dom';

const SearchInput = () => {

    const navigate = useNavigate()
    const [keywords, setKeywords] = useState('')

    function handleKeyUp(event) {
        // console.log('@',keywords)
        if (keywords.length > 0) {
            if (event.keyCode === 13) {
                navigate(`/search/${keywords}`)
            }
        }
    }

    function handleChange(event) {
        setKeywords(event.target.value)
    }

    return (
        <input
            className="search-input"
            type="text"
            onKeyUp={handleKeyUp}
            value={keywords}
            onChange={handleChange}
        />
    );
}

export default SearchInput;
