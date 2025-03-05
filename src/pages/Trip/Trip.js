import './Trip.css'
import { useParams } from 'react-router-dom'
import travelsData from "../../data/travels";


export default function Trip() {
  const travelInclude = [
    { title: "Road toll", is: "No" },
    { title: "Food", is: "Yes" },
    { title: "Daily Duration", is: "8 Hour" },
  ]

  const getTravelInclude = travelInclude.map((item, i) => {
    return <div key={i} className='flex flex-col text-3xl items-center font-medium gap-2'>
      <p className='font-bold text-stone-800'>{item.title}</p>
      <p className='font-bold text-gray-500'>{item.is}</p>
    </div>
  })

  const params = useParams()
  const paramsId = parseInt(params.id) ;  
  const [item,] = travelsData.filter(item => item.id === paramsId);

  return (
    <div className='trip_c flex flex-col items-center py-5 px-20 gap-11'>
      <p className='tripTitle text-4xl font-bold text-stone-800'>{item.title.toUpperCase()}</p>
      <div className='tripContent_c flex justify-between gap-28'>
        <div className='w-2/3 max-w2/3 flex flex-col'>
          <img className='rounded-3xl aspect-video' src={item.img} alt="" />
          <div className='flex justify-center items-center p-8 gap-16'>
            <p className='text-4xl text-center font-bold'> 7<br />Days</p>
            <div className='flex flex-col items-center gap-7'>
              <p className='text-4xl font-bold text-stone-800'>What Does It Include?</p>
              <div className='flex gap-14'>
              {getTravelInclude}
              </div>
            </div>
          </div>
        </div>
        <div className='tripContent w-1/3 flex flex-col gap-9 items-center mt-16'>
          <p className='text-5xl font-bold text-stone-800 text-center'>About</p>
          <p className='text-3xl font-medium text-stone-800'>{item.content}</p>
          <button className='btnR text-2xl !px-6 !py-3'>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}
