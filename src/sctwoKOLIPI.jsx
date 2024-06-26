const Sctwokolipi = ({prdo}) =>{
    return(
        <div >
            <img src={prdo.img} className="w-[523px] object-cover h-[300px] mt-[40px] rounded-[10px]" alt="eror 404 sorry" />
            <div className="flex items-center gap-[10px] mt-[10px] ">
            <img src="https://static-00.iconduck.com/assets.00/fire-icon-1513x2048-1ztytpky.png" className="w-[15px]" alt="eror 440 sorry" />
            <h1 className="mt-[4px] text-[22px] font-[500]">{prdo.title}</h1>
            </div>
        </div>
    )
}

export default Sctwokolipi