
import  { useState } from 'react';


const Header = () =>{
  const [open,setOpen] = useState(false)


  const toggle = () =>{
    setOpen(!open)
  }

  return(
        <>
           <header className="flex justify-between bg-[#070401] fixed z-[1] w-[100%] h-[140px] items-center pl-[20px] pr-[20px] lg:pr-[60px] lg:pl-[60px]">
              <div className="left">
              <img src="https://quiet-tapioca-eb069b.netlify.app/assets/store-logo-7c8268a3.png" className=" w-[150px] lg:w-[180px] " alt="eror 044 sorry" />
              </div>
              <div className="right  gap-7 items-center flex">
                <nav className={` gap-[50px] font-sans lg:flex-row lg:text-[16px]   ease duration-300 
                lg:top-auto  lg:h-[30px] lg:w-[930px] lg:bg-[transparent]   bg-[#353535]  
                lg:translate-x-0 flex flex-col fixed ${open ? 'translate-x-0' : 'translate-x-full'} lg:text-[20px] right-0 top-0 justify-center items-center  h-[100vh] w-[100%] sm:w-[50%] text-[24px]`}>
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Portfolio</a>
                    <a href="#">News</a>
                </nav>
    <a href="tel:+998940907479" className="hidden lg:flex "><button className="bg-[#FA9021] cursor-pointer active:scale-[.9] duration-100 ease-linear  font-[100] w-[151.77px] h-[48.34px] rounded-[6px] ">Contact us</button></a>
    </div>
              
              <div onClick={toggle}  className="burger   lg:hidden flex flex-col gap-2 relative z-1     rounded-[10px]">
                <div className={`bg-[white] w-[40px] h-[2px] duration-[1s] ease-in-out  ${open ? "rotate-[230deg]": 'bg-[white]'} `}></div>
                <div className={`bg-[white] w-[40px] h-[2px] duration-[1s] ease-in-out   ${open ? "rotate-[-230deg] relative bottom-[10px]": 'bg-[white]'} `}></div>
                <div className={`bg-[white] w-[40px] h-[2px] duration-[1s] ease-in-out   ${open ? "hidden": 'bg-[white]'} `}></div>
              </div>
           </header>
        </>
    )
}

export default Header


