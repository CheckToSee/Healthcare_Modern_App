'use client';

const Hero = () => {
  return (
    <div className="w-full md:h-screen mt-[-64px] flex justify-center bg-gradient-to-b from-[#e5e5e5] to-white">
      <div className="mt-[64px] block lg:flex grid-cols-2 justify-center lg:justify-start items-center w-full max-w-[1400px]">
        <div className="flex flex-[1] flex-col pl-8 lg:pr-0 pr-8">
          <h1 className="text-[#272D4E] lg:font-normal font-bold lg:text-7xl md:text-5xl text-4xl pt-14 lg:pt-4 pb-4">
            Online urgent care made available when you need it
          </h1>
          <p className="text-[#7854F7] text-sm pb-6">
            Speak with a doctor at home or on the go. One of our many experts
            will assist you by phone or video.
          </p>
          <div className="w-full mr-10 h-24">
            <button className="py-[18px] md:px-14 md:w-64 w-full my-5 text-white bg-[#7854F7] hover:bg-[#A186FF] rounded-full font-bold">
              Let's Get Started
            </button>
          </div>
        </div>
        <div className="lg:justify-start justify-center lg:flex flex-[1] h-full items-center">
          <img className="block max-h-[600px] lg:max-h-screen lg:absolute w-full px-8 lg:px-0 lg:w-[48vw] lg:pl-4 lg:py-0 py-10" src="/doctortest1.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
