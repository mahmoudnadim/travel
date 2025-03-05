import './CustomerSay.css'
import customerPic_1 from "../../assets/imgs/customerPic_1.jpg"

export default function CustomerSay() {

    const customersSay = [
        {
            customerText: "Lorem libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque",
            customerImg: customerPic_1,
            customerName: "Some Name",
            customerPName: "Place Name"
        },
        {
            customerText: "Lorem libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque",
            customerImg: customerPic_1,
            customerName: "Some Name",
            customerPName: "Place Name"
        }
    ]

    const getCustomerSay = customersSay.map((item, i) => {
        return <div key={i} className='customerSayItem w-1/2 bg-stone-200 flex flex-col gap-6 py-6 px-5 max-sm:w-3/4 flex-none'>
                    <p className='customerText text-stone-500 font-medium max-sm:text-sm'>
                        {item.customerText}
                    </p>
                    <div className='customerAbout flex items-center gap-4'>
                        <img className='customerImg w-16' src={item.customerImg} alt="" />
                        <div className='customerName_c flex flex-col'>
                            <p className='customerName'>{item.customerName}</p>
                            <p className='customerPName'>{item.customerPName}</p>
                        </div>
                    </div>
                </div>
    })


    return (
        <div className='c customerSay_c'>
            <div className='customerSayHeader'>
                <p className='customerSayTitle m-7 text-3xl font-medium text-center'>WHAT CUSTOMER SAY</p>
            </div>
            <div className='customerSayItems px-20 flex justify-between items-center gap-6 overflow-auto max-md:px-0'>
                {getCustomerSay}
            </div>
        </div>
    )
}
