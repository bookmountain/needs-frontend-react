import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import Axios from 'axios'
import moment from 'moment'

function Fc() {
  const [fc, setFc] = useState('')
  const getFcData = () => {
    Axios.get('http://localhost:5000/dashboard/fc').then((response) => {
      const data = response.data
      let fcArray = []
      for (let i = 0; i < data.length; i++) {
        let fcObject = {}
        // data[i].start = moment(data[i].start).format('L')
        // data[i].end = moment(data[i].end).format('L')
        console.log(data[i].end)
        fcObject = {
          title: data[i].title,
          start: data[i].start,
          end: data[i].end,
          extendedProps: {
            status: 'done',
            id: i,
          },
        }
        fcArray.push(fcObject)
        // console.log(fcArray)
      }
      setFc(fcArray)
    })
  }

  useEffect(() => {
    getFcData()
  }, [])
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: '',
        center: 'prev,title,next',
        right: '',
      }}
      events={fc}
      eventDidMount={function (info) {
        if (info.event.extendedProps.status === 'done') {
          // Change background color of row
          switch (info.event.extendedProps.id) {
            case 1:
              info.el.style.backgroundColor = '#e8cd00'
              break
            case 2:
              info.el.style.backgroundColor = '#7367f0'
              break
            case 3:
              info.el.style.backgroundColor = '#ea5455'
              break
            case 4:
              info.el.style.backgroundColor = '#ff9f43'
              break
            case 5:
              info.el.style.backgroundColor = '#00cfe8'
              break
            default:
              info.el.style.backgroundColor = '#28c76f'
          }

          info.el.style.border = 'none'
          // console.log(info.event.title)
        }
      }}
      dateClick={function (info) {
        console.log(info.dayEl.dataset.date)
      }}
    />
  )
}

export default Fc
