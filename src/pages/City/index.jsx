import React, { useState } from 'react';
import CityHeader from '../../components/PubHeader';
import CurrentCity from './CurrentCity';
import CityHotList from './CityHotList';
import { useSelector, useDispatch } from 'react-redux';
import { initCity, changeCity } from '../../redux/actions/city';
import {useNavigate} from 'react-router-dom';
import CityList from './CityList';

const City = () => {

    // const [city, setCity] = useState('Montreal')
    const dispatch = useDispatch()
    const city = useSelector(state => state.city)
    const navigate = useNavigate()

    function onCityEvent(cityName) {
        dispatch(changeCity(cityName))
        navigate('/')
    }

    return (
        <div>
            <CityHeader title={'Choose City'} />
            <CurrentCity cityName={city.cityName} />
            <CityHotList onEvent={onCityEvent} />
            <CityList onEvent={onCityEvent} />
        </div>
    );
}

export default City;
