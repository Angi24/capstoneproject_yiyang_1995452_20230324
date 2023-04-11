const express = require('express')
const router = express.Router()
const montreal = require('./data/home/montreal')
const toronto = require('./data/home/toronto')
const url = require('url')
const searchData = require('./data/search')

/**
 *  Hot data on the home page
 */
router.get('/home/newpro', (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    if (cityName === 'Montreal') {
        res.send({
            status: 200,
            result: montreal.new
        })
    }
    if (cityName === 'Toronto') {
        res.send({
            status: 200,
            result: toronto.new
        })
    }
})

router.get('/home/hotpro', (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    if (cityName === 'Montreal') {
        res.send({
            status: 200,
            result: montreal.hot
        })
    }
    if (cityName === 'Toronto') {
        res.send({
            status: 200,
            result: toronto.hot
        })
    }
})

/**
 * Search Page
 */
router.get('/search', (req, res) => {
    const search = url.parse(req.url, true).query.search
    // console.log(search)
    res.send({
        status: 200,
        result: searchData
    })
})

module.exports = router