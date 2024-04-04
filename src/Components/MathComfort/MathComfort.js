import { useState } from "react";
import { NavLink } from "react-router-dom";
import MathData from "./MathData";

const MathComfort = () => {
    const [selected, setSelected] = useState(null);

    const selectOne = (index) => {
        setSelected(index);
    }

    return (
        <div className="grid place-content-center min-h-screen">
            <div className="text-center">
                <h1 className="font-semibold py-3 text-[35px]">Which describes you best ?</h1>
                <p className="text-gray-400 font-light">This will help us personalize your experience.</p>
            </div>
            <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {MathData.map((value, index) => (
                    <div
                        key={index}
                        className={` border hover:shadow-md cursor-pointer p-1 rounded-sm transition-all duration-900 ease-in-out ${selected === index ? 'shadow-md' : 'bg-white'}`}
                        style={{ width: '100%', height: '200px' }}
                        onClick={() => selectOne(index)}
                    >
                        <img
                            className="object-cover  h-[100px] "
                            src={value.img}
                            alt="img"
                        />
                        <div className="text-center mt-7">
                            <p className="text-sm">{value.title}</p>
                            <p className="text-gray-400">{value.level}</p>
                        </div>    
                    </div>
                ))}
            </div>
            <div className="mx-auto mt-10">
                {selected !== null ? (
                    <NavLink to='/page5'>
                        <button className="py-2 px-10 rounded-md text-sm text-white bg-black hover:bg-slate-500">Continue</button>
                    </NavLink>
                ) : (
                    <button className="py-2 px-10 rounded-md text-sm text-white bg-gray-400 cursor-not-allowed">Continue</button>
                )}
            </div>
        </div>
    );
}

export default MathComfort;
