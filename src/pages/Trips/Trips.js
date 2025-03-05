import React from './Trips.css'
import { SectionHero, TripsBox, FilterAside } from '../../components'
import travels from '../../data/travels'
import { useParams } from 'react-router-dom'

export default function Trips() {
  const paramsId = useParams().id;
  const travelsFilter = travels.filter(item=> paramsId === item.category)
  
  const getTravels = travelsFilter.map((travel, i) => {
    return <TripsBox key={i} id={travel.id} img={travel.img} title={travel.title} time={travel.time} />
  })
  return (
    <div className='trips_c'>
      <SectionHero title={paramsId} />
      <div className='c !py-12 allTrips flex gap-8 max-sm:flex-col max-sm:gap-8'>
        <div className='allTripsCAside w-1/4 max-sm:w-full'>
          <FilterAside />
        </div>
        <div className='allTripsCMain w-3/4 flex flex-wrap max-sm:gap-x-4 max-sm:w-full max-sm:justify-between'>
          {getTravels}
        </div>
      </div>
    </div>
  )
}
