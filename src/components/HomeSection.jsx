import React from 'react';

const HomeSection = () => {
  return (
    <div className="bg-white w-full min-h-[400px] py-8 px-5 md:mt-12 rounded-md">
      <div className="grid md:grid-cols-3 item-center gap-2">
        <div className="bg-red-100 p-3 shadow-md rounded-md w-full flex flex-1 flex-col items-center justify-center ">
          <h2>You Order</h2>
        </div>
        <div className="bg-red-100 p-3 w-full flex flex-1 flex-col items-center justify-center "></div>
        <div className="bg-red-100 p-3 w-full flex flex-1 flex-col items-center justify-center "></div>
      </div>
    </div>
  );
};

export default HomeSection;
