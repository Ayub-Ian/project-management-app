import React from 'react'
import { TimelineItem } from './TimelineItem'
import { Timeline } from 'flowbite-react'

export const TimeLine = ({ status }) => {
  return (
    <Timeline className=' tw-mt-8' >{status.map(item => <TimelineItem  key={item.id} details={item.details} summary={item.summary} date={item.created_at} />)}</Timeline>
  )
}
