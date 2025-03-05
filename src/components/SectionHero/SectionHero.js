import './SectionHero.css'
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SectionHero(props) {
  const pathNameSplit = window.location.pathname.split("/")

  return (
    <div className='sectionHero_c max-sm:px-8 max-sm:py-32 p-32 bg-blue-800 relative'>
        <h1 className='SectionHeroTitle text-5xl text-white font-semibold text-center'>{props.title}</h1>
        <div className='SectionHeroLinks flex gap-1 items-center bg-white absolute left-10 w-fit px-8 py-3 bottom-0'>
        <FaHome /> <Link to={"/"}>Home</Link>
        <span>/</span>
        <Link to={"/"+pathNameSplit[1]}>{pathNameSplit[1]}</Link>
        {pathNameSplit[2]&&<span>/</span>}
        <Link to={`${window.location.pathname}`}>{pathNameSplit[2]}</Link>
        </div>
    </div>
  )
}
