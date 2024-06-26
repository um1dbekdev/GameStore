import Sctwokolipi from "./sctwoKOLIPI"
import { prd } from "./sctwoPRODUCT"

const Sctwo = () =>{
return(
    <div className=" max-w-[1600px] m-auto   ml-[20px] mr-[17px]  lg:mr-[60px] lg:ml-[60px]">
            <div className="SCTWO flex flex-col mt-[130px]">
        <div className=" flex justify-between pb-[30px] items-center ">
            <h1 className="title text-[18px] sm:text-[21px] lg:text-[31px] w-[200px] lg:w-[400px] font-[700] ">Currently Trending Games</h1>
            <button className="bg-[#ffffff11] w-[110px] text-[15px] h-[50px] lg:w-[139px] lg:h-[57px] rounded-[10px] lg:text-[20px] font-[500] active:scale-[.9] duration-75 ease-linear" >
            SEE ALL
            </button>
        </div>
        <div className="grid  grid-cols-[repeat(1,100%)]  sm:grid-cols-[repeat(2,45%)]  lg:grid-cols-[repeat(3,299px)]  2xl:grid-cols-[repeat(4,399px)] justify-center gap-[30px] ">
            {
                prd.map((value) =>{
                   return(
                    <Sctwokolipi key={value.id} prdo={value}/>
                   )
                })
            }
        </div>
        <div className="button ">
            <h1 className="text-[35px] leading-[65px] font-[600]  text-center mt-[139px]">Lorem Ipsum is simply dummy text of the <br />
             printing and typesetting industry.</h1>
        </div>
    </div>
    </div>
)
}

export default Sctwo