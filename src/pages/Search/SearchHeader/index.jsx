import React from 'react';
import './style.less'
import SearchInput from '../../../components/SearchInput';
import {useNavigate} from 'react-router-dom';

const SearchHeader = () => {

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
        // window.history.back()
    }

    return (
        <div id='search-header' className="clear-fix">
            <span className="back-icon float-left" onClick={handleBack}>
                <i className="icon-chevron-left">Back</i>
            </span>
            <div className="input-container">
                <i className="icon-search"></i>
                <SearchInput />
            </div>
        </div>
    );
}

export default SearchHeader;
