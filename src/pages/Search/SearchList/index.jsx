import React, { useState, useEffect } from 'react';
import SearchListView from '../SearchListView';
import api from '../../../api';
import PullupLoading from '../../../components/PullupLoading';

const SearchList = (props) => {

    const [searchData, setSearchData] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        http()
    }, []);

    function http() {
        api.search({
            search: props.search
        }).then(res => {
            if (res.data.status === 200) {
                // Merge data
                setSearchData([...searchData, ...res.data.result.data])
                setHasMore(res.data.result.hasMore)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    function handlePullupLoading() {
        http()
    }

    return (
        <div>
            {
                searchData.length > 0 ? <SearchListView search={searchData} /> : <div>Waiting data...</div>
            }
            {
                hasMore ? <PullupLoading onPullupLoading={handlePullupLoading} /> : <div>seen</div>
            }
        </div>
    );
}

export default SearchList;
