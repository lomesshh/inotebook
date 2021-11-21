const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    obj={
        a:'lomesh',
        number: 78
    }
    res.json(obj)
})

module.exports = router