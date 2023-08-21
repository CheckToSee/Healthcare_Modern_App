"use client";

// TODO

const Mission = () => {
  return (
    <div className="w-full lg:h-screen flex items-end text-white bg-[#7854F7]">
      <div className="flex flex-col h-full w-full">
        <div className="h-[50%] w-full flex justify-center">
          <div className="w-full flex lg:flex-row flex-col">
            <div className="h-full w-full flex justify-right items-center flex-[4]">
              <img
                className="lg:h-[110%] max-h-[500px] rounded-[22px] lg:ml-auto lg:mx-0 mx-auto lg:mt-0 mt-10 lg:mb-10 mb-0 shadow-[#1c1c1c] shadow-xl"
                src="/mission1.jpg"
              />
            </div>
            <div className="h-full w-full flex-[6] flex lg:justify-start justify-center">
              <div className="max-w-[600px] w-full h-full">
                <div className="w-full h-full p-12 flex items-center">
                  <div>
                    <h3 className="md:max-w-[50%] w-full text-3xl mb-5 font-bold">
                      Your Healthcare Made Simple
                    </h3>
                    <p className="text-lg mb-5">
                      With 24/7 access to doctors online, care is available
                      anytime, anywhere. Create online appointments on your
                      schedule, or meet with a doctor on the same day.
                      Reschedule and meet with your preferred doctor again and
                      again, right from your smartphone, tablet, or desktop
                      computer.
                    </p>
                    <button className="md:w-[45%] w-full py-4 rounded-full bg-[#70C217] hover:bg-[#76cc18] font-bold">
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50%] w-full flex lg:flex-row flex-col-reverse">
          <div className="h-full w-full flex-[6] flex lg:justify-end justify-center">
            <div className="h-full w-full max-w-[600px]">
              <div className="w-full h-full p-12 flex items-center justify-center">
                <div>
                  <h3 className="w-full text-4xl mb-5 font-bold">
                    Common conditions:
                  </h3>
                  <div className="w-full flex flex-row mb-7">
                    <ul className="w-full">
                      <li className="mb-2 md:text-xl text-lg">• Flu</li>
                      <li className="mb-2 md:text-xl text-lg">• Minor Rashes</li>
                      <li className="mb-2 md:text-xl text-lg">• Tooth Pain</li>
                      <li className="mb-2 md:text-xl text-lg">• Pink eye</li>
                      <li className="mb-2 md:text-xl text-lg">• Allergies</li>
                    </ul>
                    <ul className="w-full">
                      <li className="mb-2 md:text-xl text-lg">• Cold & Fever</li>
                      <li className="mb-2 md:text-xl text-lg">• Sore Throat</li>
                      <li className="mb-2 md:text-xl text-lg">• Skin Infections</li>
                      <li className="mb-2 md:text-xl text-lg">• Diarrhea</li>
                      <li className="md:text-xl text-lg">• Headache</li>
                    </ul>
                  </div>
                  <button className="md:w-[62%] w-full py-4 rounded-full bg-[#70C217] hover:bg-[#76cc18] font-bold">
                    View All Conditions
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full flex-[4]">
            <img
              className="lg:h-[105%] max-h-[500px] lg:mx-0 mx-auto rounded-[22px] shadow-[#1c1c1c] shadow-xl"
              src="/mission2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
