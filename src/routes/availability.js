const { Router } = require('express')
const router = Router()

let rooms = require('../dataSource')

router.get('/', (req, res) => {
  const { type, checkin, checkout } = req.query

  let roomsID = rooms.data.rooms[`type${type}`]
  let booking = rooms.data.booking

  let response = []

  roomsID.forEach(room => {
    if (booking[room]) {
      let itsFree = true
      booking[room].forEach(reservation => {
        if (
          (new Date(reservation.checkin) >= new Date(checkin) &&
            new Date(reservation.checkin) <= new Date(checkout)) ||
          (new Date(reservation.checkout) >= new Date(checkin) &&
            new Date(reservation.checkout) <= new Date(checkout))
        ) {
          itsFree = false
          response.push({
            id: room,
            checkin: reservation.checkin,
            checkout: reservation.checkout,
            availability: false
          })
        }
      })

      if (itsFree) {
        response.push({
          id: room,
          availability: true
        })
      }
    } else {
      response.push({
        id: room,
        availability: true
      })
    }
  })
  res.json(response)
})

module.exports = router
