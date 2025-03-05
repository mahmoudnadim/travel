import './Footer.css'

export default function Footer() {

    const footerLinks = [
        {
            title: "INFORMATION",
            links: [
                { title: "About Us", link: "#" },
                { title: "Blog", link: "#" },
                { title: "Make It Works", link: "#" },
                { title: "Our Services", link: "#" },
                { title: "Terms and commrere", link: "#" },
            ]
        },
        {
            title: "OUR SERVICES",
            links: [
                { title: "Flight", link: "#" },
                { title: "Renta Car", link: "#" },
                { title: "Travel Properties", link: "#" },
                { title: "Travel Properties", link: "#" },
                { title: "Visit Company", link: "#" },
                { title: "Travel Package", link: "#" },
                { title: "Visa Package", link: "#" },
            ]
        },

    ]

    const getFooterLinks = footerLinks.map((link, i) => {
        return <div key={i} className='footerItem w-1/5 max-sm:w-full'>
            <p className='footerItemTitle font-semibold text-lg mb-2'>{link.title}</p>
            <ul className='footerItemList flex flex-col gap-2'>
                {link.links.map((item, i) => {
                    return <li key={i} className='footerItemListItem'>
                        <a className='' href={item.link}>{item.title}</a>
                    </li> 
                })}
            </ul>
        </div>
    })


    return (
        <div className='footer_c'>
            <div className='footerItems flex gap-8 px-20 py-11 mt-8 text-white justify-center max-sm:px-10 max-sm:gap-6 max-sm:flex-wrap'>
                <ul className='footerItem w-1/5 flex flex-col gap-4 max-sm:w-full'>
                    <li className='footerItemTitle font-semibold text-lg'>ABOUT US</li>
                    <li className='footerItemListItem'>
                        Lorem libero id faucibus nisl eget <br />
                        massa enim nec dui nunc mattis <br />
                        nullam non nisi est sit amet orci <br />
                        tellus molestie nunc non blandit  <br />
                        eu lobortis elementum nibh  <br />
                    </li>
                    <li className='footerItemListItem'>
                    <button className='btnR w-fit'>Read More</button>
                    </li>
                </ul>
                <div className='footerItem w-1/5 max-sm:w-full'>
                    <p className='footerItemTitle font-semibold text-lg mb-2'>CONTACT US</p>
                    <ul className='footerItemList flex flex-col gap-2'>
                        <li className='footerItemListItem'>
                            Lorem libero id faucibus nisl <br />
                            nullam non nisi
                        </li>
                        <li className='footerItemListItem'>name@domain.com</li>
                    </ul>
                </div>
                {getFooterLinks}
            </div>
        </div>
    )
}
