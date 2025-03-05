import './Archievement.css';


export default function Archievement() {

    const archievement = [
        {count:"2000+",title:"Completed Proerty"},
        {count:"200",title:"Proerty for sale"},
        {count:"300",title:"Proerty by sale"},
        {count:"2000+",title:"Completed Proerty"}
    ]

    const getArchievement = archievement.map((item,i)=>{
       return <div key={i} className='archievementItem_c p-4 flex flex-col items-center max-md:w-1/2'>
                    <p className='archievementItemCount text-3xl font-semibold'>{item.count}</p>
                    <p className='archievementItemTitle font-medium'>{item.title}</p>
                </div>
    })

    return (
        <div className='archievement_c text-white flex flex-col items-center py-20 gap-8 my-5'>
            <p className='archievementTitle text-3xl font-semibold'>Archievement</p>
            <div className='archievementItems w-full flex items-center flex-wrap justify-center'>
                {getArchievement}
            </div>
        </div>
    )
}
