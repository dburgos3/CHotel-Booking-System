const { Router } = require('express')
const router = Router()

router.get('/room/', (req, res) => {
  const data = {
    room: '502',
    name: 'daniel'
  }
  res.json(data)
})

module.exports = router
