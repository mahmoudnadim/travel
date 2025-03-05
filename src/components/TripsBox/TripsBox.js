import './TripsBox.css'

export default function TripsBox(props) {
  return (
    <div className="BSItems lg:!w-1/3 xl:!w-1/4 flex-none">
      <div className="BSI pr-6 max-sm:pr-0">
        <a href={"/trip/" + props.id}>
          <img className="BSImg rounded-lg aspect-video object-cover" src={props.img} alt="" />
        </a>
        <div className="BSIContent flex justify-between items-center py-2">
          <a href={"trip/" + props.id} className="BSITitle font-semibold text-nowrap text-ellipsis overflow-hidden w-2/3 max-sm:w-3/5">{props.title}</a>
          <p className="BSITime max-sm:text-sm text-slate-500">{props.time}</p>
        </div>
      </div>
    </div>
  )
}
