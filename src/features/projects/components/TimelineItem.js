import React from 'react'
import { Timeline } from 'flowbite-react'

export const TimelineItem = ({ details, summary, date }) => {

const convertDate = (date) => new Date(date).toDateString()
const convertTime = (date) => new Date(date).toLocaleTimeString()


  return (
   
    <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
        <Timeline.Time className=' tw-text-xs'>
            {convertDate(date)} {convertTime(date)} 
        </Timeline.Time>
        <Timeline.Title className='tw-text-white tw-text-base'>
            {summary}
        </Timeline.Title>
        <Timeline.Body className='tw-text-sm'>
            {details}
        </Timeline.Body>
        </Timeline.Content>
    </Timeline.Item>

   
  )
}
