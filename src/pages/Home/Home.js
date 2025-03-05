import './Home.css'
import { Hero, BoxesSection, Archievement, CustomerSay } from '../../components';

export default function Home() {
    return (
        <>
            <Hero />
            <BoxesSection title="Summer Trips" category="summer" />
            <BoxesSection title="Upcoming Trips" category="upcoming" />
            <Archievement />
            <CustomerSay />
        </>
    )
}
