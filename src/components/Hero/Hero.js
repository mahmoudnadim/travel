import "./Hero.css"
import heroIcon from "../../assets/imgs/traveling_icon.svg"
export default function Hero() {
    return (
        <div className="hero_c p-0">
            <div className="hero max-sm:h-96 flex flex-row justify-between items-center rounded-3xl gap-8 max-md:gap-1 max-md:flex-col-reverse max-md:text-center max-md:justify-center max-md:rounded-none">
                <div className="heroContent w-1/2 flex flex-col gap-8 items-start max-md:w-full max-md:gap-4 max-md:items-center">
                    <h1 className="heroTitle text-6xl font-semibold text-white max-sm:text-xl">Don t be a tourist, be a traveler</h1>
                    <h5 className="heroTitle text-xl text-white max-sm:text-sm">
                        Travel can be your best resource for finding great travel
                        deals and cheap flights to your favorite destinations
                        around the world. If you’re 
                        airfare or vacation packages.
                    </h5>
                    <button className="btnR heroBtn text-white">Learn More</button>
                </div>
                <div className="heroImg w-1/2 max-sm:w-3/5">
                    <img className="heroIcon max-w-full" src={heroIcon} alt="" />
                </div>
            </div>
        </div>
    )
}
