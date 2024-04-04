import ResultData from "./ResultData";

const Result = () => {
  return (
    <div className="grid place-content-center min-h-screen">
      <div className="text-center mb-6 mt-[-3rem]">
        <h1 className="font-semibold py-3 text-[35px]">Learning paths based on your answers</h1>
        <p className="text-gray-400 font-light">Choose one to get started. You can switch anytime.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ResultData.map((value, index) => (
          <div key={index} className="max-w-lg flex border hover:shadow-lg relative cursor-pointer">
            {value.new !== "" && (
              <div className="z-10 absolute top-0 left-0 w-full h-10 bg-white flex justify-center items-center">
                <span className="absolute top-[-0.7rem] text-center bg-yellow-600 rounded-md text-[.6rem] p-1"><b>{value.new}</b></span>
              </div>
            )}
            {value.new === false && (
              <div className="z-10 absolute top-0 left-0 w-full h-10 bg-white flex justify-center items-center">
                <span className="absolute top-[-0.7rem] text-center bg-white rounded-md text-[.6rem] p-1"><b>{value.new}</b></span>
              </div>
            )}
            <div className="p-4 mt-5">
              <p className="p-4 text-[.7rem]">
                <span><b>{value.title}</b></span><br/> {value.descr}
              </p>
            </div>
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48 p-5" src={value.img} alt="imge" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
