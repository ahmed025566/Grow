import React from 'react'
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../data/dummy'
import '../App.css'
import { Header } from '../components'

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-main-bg rounded-3xl'>
      <Header title='Calendar' category='App' />
      <ScheduleComponent height='650px' eventSettings={{dataSource: scheduleData}} selectedDate={new Date(2024, 0, 10)}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar