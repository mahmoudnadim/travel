import "./Nav.css"
import logo from "../../assets/imgs/logo.png";
import { FaSearch} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Nav() {

  const navLinks = [
    { link: "/", text: "Home" },
    { link: "/trips", text: "Trips" },
    { link: "/", text: "About" },
    { link: "/", text: "Contact US" },
    { link: "/", text: "Blogs" },
  ]
  const getNavLinks = navLinks.map((link, i) => {
    return <li key={i} className="navListItem max-md:w-full">
      <a href={link.link} className="">{link.text}</a>
    </li>
  })

  const closeNav = (e) => {
    document.querySelector(".MNav").classList.remove("isOpen")
    document.querySelector(".MNav").classList.add("isClose")
  }

  return (
    <div className="c z-50 MNav nav_c w-full flex justify-between items-center max-md:flex-col max-md:fixed max-md:h-full max-md:w-1/2 max-md:justify-center max-md:px-12">
      <div onClick={closeNav} className="closeNav cursor-pointer bg-stone-500 p-3 text-2xl absolute top-4 right-4 text-stone-200 rounded-md md:invisible">
        <FaXmark />
      </div>
      <a href="/">
        <img className="min-w-48" src={logo} alt="" />
      </a>
      <ul className="navList flex justify-between items-center gap-5 max-md:flex-col max-md:w-full">
          {getNavLinks}
        <li className="navListItem searchIcon"><FaSearch /></li>
        <li className="navListItem">
          <button className="btnR">Book Trip</button>
        </li>
      </ul>
    </div>
  )
}

export default Nav