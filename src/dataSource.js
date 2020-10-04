class myData {
  data = {
    booking: {
      101: [
        {
          id: 101,
          type: 1,
          checkin: '10-10-20',
          checkout: '10-14-20',
          resevationID: 1,
          availability: true
        }
      ],
      102: [
        {
          id: 102,
          type: 1,
          checkin: '10-10-20',
          checkout: '10-14-20',
          resevationID: 1,
          availability: true
        }
      ],
      302: [
        {
          id: 302,
          type: 1,
          checkin: '10-10-20',
          checkout: '10-14-20',
          resevationID: 1,
          availability: true
        }
      ]
    },
    rooms: {
      type1: [101, 102, 103, 104, 105],
      type2: [201, 202, 203, 204, 205],
      type3: [301, 302, 303, 304, 305]
    }
  }
  post = (id, obj) => {
    if (this.data.booking[id]) {
      this.data.booking[id].push(obj)
    } else {
      this.data.booking[id] = [obj]
    }
    this.show()
  }

  put = (id, obj) => {
    this.data.booking[id].forEach((room, index) => {
      if (
        new Date(this.data.booking[id][index].checkin).getTime === new Date(obj.checkin).getTime &&
        new Date(this.data.booking[id][index].checkout).getTime === new Date(obj.checkout).getTime
      ) {
        this.data.booking[id][index]
        console.log('here')
      } else {
        this.data.booking[id][index] = obj
        console.log('other')
      }
    })
    //this.show()
  }
  show = () => console.log(this.data)
}

let toShare = new myData()

module.exports = toShare
