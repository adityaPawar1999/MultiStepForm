import { NavLink } from "react-router-dom"
import StarRateIcon from '@mui/icons-material/StarRate';

const Page5 = () =>{
    return(<>
      <div className="grid place-content-center h-screen">
            <div className="max-w-2xl mx-auto bg-white  overflow-hidden md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" 
                    src="https://i.pinimg.com/564x/24/bc/34/24bc342da6f9ba31a6afab8a16dd4fa9.jpg"
                    alt="imge" />
                </div>
                <div className="p-4">
                    <h3 className=" text-[30px] text-black font-semibold">You're on the way!</h3>
                <div className="text-yellow-500  mt-5">
                    <StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/>
                </div>
                    <p className=" text-gray-500 p-4 text-[.6rem]">Improving skills requires dedication, practice, and embracing challenges. Engage in continuous learning, seek feedback, and set actionable goals to cultivate expertise and reach your full potential.</p>
                    <p className=" text-gray-900 p-4 text-[.8rem] font-bold">-adityapawar</p>
                </div>
            </div>
             <div className="mx-auto mt-4 mb-5">
                    <NavLink to='/loading6'>
                        <button className="py-2 px-10 mt-8 rounded-md text-sm text-white bg-black hover:bg-slate-500">Continue</button>
                    </NavLink>
                </div>
        </div>
    </>)
}
export default Page5;
