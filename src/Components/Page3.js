import { NavLink } from "react-router-dom"

const Page3 = () =>{
    return(<>
      <div className="grid place-content-center h-screen">
            <div className="max-w-2xl mx-auto bg-white  overflow-hidden md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" 
                    src="https://i.pinimg.com/564x/9a/24/38/9a24387e7ecb17381ad7fd0769d1d7c2.jpg"
                    alt="imge" />
                </div>
                <div className="p-4">
                    <h3 className=" text-[30px] text-black font-semibold">You're in the right place</h3>
                    <p className="mt-2 text-gray-500 p-4 text-[.7rem]">Improving skills requires dedication, practice, and embracing challenges. Engage in continuous learning, seek feedback, and set actionable goals to cultivate expertise and reach your full potential.</p>
                </div>
            </div>
             <div className="mx-auto mt-4">
                    <NavLink to='/MathComfort'>
                        <button className="py-2 px-10 mt-8 rounded-md text-sm text-white bg-black hover:bg-slate-500">Continue</button>
                    </NavLink>
                </div>
        </div>
    </>)
}
export default Page3