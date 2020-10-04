const { Router } = require('express')
const router = Router()
const _ = require('underscore')

var mydata = require('../dataSource')

let rooms = require('../sample.json')

router.post('/', (req, res) => {
  const { id, checkin, checkout } = req.body.params

  mydata.post(id, {
    id: id,
    checkin: checkin,
    checkout: checkout,
    availability: false
  })
  res.send('recived')
})

router.put('/', (req, res) => {
  const { id, checkin, checkout } = req.body.params

  mydata.put(id, {
    id: id,
    checkin: checkin,
    checkout: checkout,
    availability: false
  })
  res.send('recived')
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  _.each(mydata, (mydata, i) => {
    if (mydata.id == id) {
      mydata.splice(i, 1)
    }
  })
  res.send({ Message: 'Reservation Delete' })
})

module.exports = { router: router, rooms: rooms }
