import { useState, useEffect } from 'react';
import Result from './Result/Result';

const Loading6 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    // Clean up timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // useEffect dependency array is empty so it runs only once when the component mounts

  return (
    <>
      {loading ? (
        <div>
        <div className="mt-[15%] flex align-middle justify-center">
          <div className="rounded-full h-10 w-10 border-2 border-yellow-600"></div>
        </div>
            <h1 class="text-xl font-semibold text-center mt-7 ">Finding learning path recommendations for you<br/> based on your resposes</h1>
        </div>
      ) : (
        <Result /> // Render your main component when loading is false
      )}
    </>
  );
};


export default Loading6;
