import React from 'react';

const DemoComponent = () => {
  return (
    <div className='grid place-content-center h-screen'>
      
      <div className=' max-w-sm mx-auto shadow-lg '>
        <div>
          <img
          className='w-full h-20 object-cover' 
        src='https://tse4.explicit.bing.net/th?id=OIP.e2SiJ1e1tAkt3YN-C4h7EAAAAA&pid=Api&P=0&h=180'
        alt='img'
        />
        </div>
        <div className='p-5'>
          <h2 className='font-medium'>title here</h2>
          <p className='text-slate-400'> description here we can write</p>
        </div>
      </div>

      <button className='bg-sky-500 mt-6 p-5 text-white rounded-sm hover:bg-black hover:text-red-600'>buy now</button>
    </div>



  );
}

export default DemoComponent;
