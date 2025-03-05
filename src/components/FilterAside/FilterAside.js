import { Link } from 'react-router-dom'
import './FilterAside.css'

export default function FilterAside() {
  return (
    <div className='filterAside_c flex flex-col gap-4 bg-blue-800 p-10 text-white'>
      <p className='filterAsideTitle text-2xl font-medium '>Other Trips</p>
      <hr />
      <div className='filterAsideList flex flex-col gap-3'>
          <Link to="/trips" className='px-4 py-3 bg-white text-red-950'>All Trips</Link>
          <Link to="/trips/summer" className='px-4 py-3 bg-white text-red-950'>Summer Trips</Link>
          <Link to="/trips/upcoming" className='px-4 py-3 bg-white text-red-950'>Upcoming Trips</Link>
      </div>
    </div>
  )
}
