import './AllTrips.css'
import { SectionHero, TripsBox, FilterAside } from '../../components'
import travels from '../../data/travels'

export default function AllTrips() {
  const getTravels = travels.map((travel, i) => {
    return <TripsBox key={i} id={travel.id} img={travel.img} title={travel.title} time={travel.time} />
  })

  return (
    <div className='allTrips_c'>
      <SectionHero title="All Trips" />
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
