import axios from '../utils/request'

/*
    Path
*/
const base = {
    baseUrl: 'http://localhost:5566',
    homenewpro: '/api/home/newpro',
    homehotpro: '/api/home/hotpro',
    search: '/api/search',
}

/*
    Request method
*/
const api = {
    /**
     * Get hot products
     */
    getHomeNewPro(params) {
        return axios.get(base.baseUrl + base.homenewpro, { params })
    },
    getHomeHotPro(params) {
        return axios.get(base.baseUrl + base.homehotpro, { params })
    },
    /**
     * Search
     */
    search(params) {
        return axios.get(base.baseUrl + base.search, { params })
    }
}

export default api