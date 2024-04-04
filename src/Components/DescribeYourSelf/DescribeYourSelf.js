import { useState } from "react";
import DescribeData from "./DescribeData";
import { NavLink } from "react-router-dom";

const DescribeYourSelf = () => {
    const [selected, setSelected] = useState(null);

    const selectOne = (index) => {
        setSelected(index);
    }

    return (
        <>
            <div className="grid place-content-center h-screen">
                <div className="text-center">
                    <h1 className="font-semibold py-3 text-[35px]">Which describes you best ?</h1>
                    <p className="text-gray-400 font-light">This will help us personalize your experience.</p>
                </div>
                <div className="mt-10">
                    {DescribeData.map((value, index) => (
                        <div
                            key={index}
                            className={`border  hover:shadow-md hover:shadow-md cursor-pointer flex mt-2 p-1 rounded-sm transition-all duration-900 ease-in-out ${selected === index ? 'shadow-md' : 'bg-white'}`}
                            onClick={() => selectOne(index)}
                        >
                            <img
                                className="h-12 w-12 object-cover rounded-full border-red-300"
                                src={value.src}
                                alt="img"
                            />
                            <p className="text-sm my-auto mx-4">{value.main} <span className="text-gray-400">{value.sub}</span></p>
                        </div>
                    ))}
                </div>
                <div className="mx-auto mt-4 mb-5">
                    {selected !== null ? (
                        <NavLink to='/yourInterest'>
                            <button className="py-2 px-10 rounded-md text-sm text-white bg-black hover:bg-slate-500">Continue</button>
                        </NavLink>
                    ) : (
                        <button className="py-2 px-10 rounded-md text-sm text-white bg-gray-400 cursor-not-allowed">Continue</button>
                    )}
                </div>
            </div>
        </>
    );
}

export default DescribeYourSelf;
