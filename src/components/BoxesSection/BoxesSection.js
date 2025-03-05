import "./BoxesSection.css";
import travelsData from "../../data/travels";
import { FaSearch } from "react-icons/fa";
import {TripsBox} from "../index"

export default function BoxesSection(props) {
    const travelsFilter = travelsData.filter(travel => travel.category === props.category && travel.vitrin)
    const getTravels = travelsFilter.map((travel,i) => {
        return <TripsBox key={i} id={travel.id} img={travel.img} title={travel.title} time={travel.time}/>
    })


    return (
        <div className="c BS">
            <div className="boxesTitle flex items-center justify-between mr-6 mb-2 max-sm:mr-0">
                <p className="BSTitle text-2xl font-bold py-4 max-sm:text-xl">{props.title}</p>
                <div className="boxesSearch bg-stone-200 flex justify-between items-center px-3 py-2 rounded-md">
                    <input className="bg-transparent text-stone-500 placeholder-stone-500 max-sm:text-sm" type="text" placeholder="Search" />
                    <FaSearch/>
                </div>
            </div>
            <div className="BS_c flex justify-between items-center max-sm:gap-x-4 overflow-auto">
                {getTravels}
            </div>
        </div>
    )
}
