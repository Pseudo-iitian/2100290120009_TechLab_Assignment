// import React from 'react';
import HomeLogo from "../../assets/home.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faGear,
  faShoppingCart,
  faChartLine,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUsers,
  faBuilding,
  faCalendarCheck,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

import Home2 from "../../assets/home2.jpeg";
function Home() {
  return (
    <>
      <div className="home-container bg-silver p-2 md:pt-16">
        <div className="flex p-8 md:p-0 justify-around items-center">
          <div className="flex flex-col gap-y-4">
            <h1 className="md:text-4xl text-xl font-bold">
              Lessons and insights <br />{" "}
              <span className="text-customGreen">from 8 years</span>
            </h1>
            <span className="inline-flex items-center">
              Where to grow your business as a photographer: site or social
              media ?
            </span>
            <button className=" bg-customGreen text-white w-fit py-2 px-4 rounded-sm sm:hover:bg-customGreen flex items-center">
              Register
            </button>
          </div>

          <div className="hidden md:block md:w-1/4 ">
            <img src={HomeLogo} alt="" className="w-full" />
          </div>
        </div>

        <div className="text-center text-4xl md:text-6xl">
          <span className="text-customGreen">.</span>
          <span className="text-tint4">..</span>
        </div>
      </div>

      <div className="flex flex-col bg-white p-4">
        <div className="text-center p-4">
          <p className="text-D_Grey text-xl font-bold md:text-3xl">
            Our Clients
          </p>
          <p className="text-Grey text-sm">
            We have been working with some Fortune 500+ clients
          </p>

          <div className="flex justify-around md:space-x-36 md:justify-center p-4 md:p-8 ">
            <FontAwesomeIcon
              icon={faHome}
              className="text-2xl hover:text-customGreen"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl hover:text-customGreen"
            />
            <FontAwesomeIcon
              icon={faGear}
              className="text-2xl hover:text-customGreen"
            />
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-2xl hover:text-customGreen"
            />
            <FontAwesomeIcon
              icon={faChartLine}
              className="text-2xl hover:text-customGreen"
            />
            <FontAwesomeIcon
              icon={faComment}
              className="text-2xl hover:text-customGreen"
            />
            <FontAwesomeIcon
              icon={faComment}
              className="text-2xl hover:text-customGreen"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-4">
          <p className="text-center text-D_Grey text-lg md:text-3xl font-bold">
            Manage your entire community <br /> in a single system
          </p>
          <p className="text-center text-Grey text-sm">
            Who is Nextcent suitable for?
          </p>
          <div className="flex md:justify-center justify-around p-4 md:space-x-36 md:p-4 flex-wrap">
            <div className="card w-64 p-4 flex justify-center flex-col text-center h-fit ">
              <FontAwesomeIcon icon={faUser} className="text-4xl p-2" />
              <p className="text-D_Grey font-bold text-xl">
                Membership
                <br />
                Organisations
              </p>
              <p className="text-xs text-Grey">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="card w-64 p-4 flex justify-center flex-col text-center h-fit ">
              <FontAwesomeIcon icon={faUser} className="text-4xl p-2" />
              <p className="text-D_Grey font-bold text-xl">
                Membership
                <br />
                Organisations
              </p>
              <p className="text-xs text-Grey">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="card w-64 p-4 flex justify-center flex-col text-center h-fit ">
              <FontAwesomeIcon icon={faUser} className="text-4xl p-2" />
              <p className="text-D_Grey font-bold text-xl">
                Membership
                <br />
                Organisations
              </p>
              <p className="text-xs text-Grey">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-4 md:p-12">
          <div className="for-home2 md:gap-16 flex md:w-1/2">
            <div className="hidden md:block">
              <img src={Home2} alt="home2 photo" className="w-full" />
            </div>
            <div className="flex gap-2 md:gap-4 flex-col">
              <p className="text-start text-D_Grey text-xl md:text-3xl font-bold">
                The unseen of spending three years at Pixelgrade
              </p>
              <p className="text-start text-Grey text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
              <button className="text-start w-fit pl-4 pr-4 pt-2 pb-2 bg-customGreen text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
</div>
        {/* new start */}
        <div className="bg-silver">
          <div className="w-[80%] mx-auto flex  flex-col md:flex-row md:justify-around pt-12 pb-12">
            <div className=" h-fit p-2 md:mt-16 ">
              <p className="text-3xl">
                <span className="text-D_Grey">Helping a local</span>
                <br />
                <span className="text-customGreen">
                  business reinvent itself
                </span>
              </p>
              <p className="text-Grey text-xs font-bold">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="grid grid-rows-2 grid-cols-2">
              {" "}
              <div className="sm-cards md:p-4 flex gap-2 md:gap-4">
                {" "}
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-2xl p-2 text-customGreen"
                />
                <div className="text-sm md:text-lg">
                  <p>2,245,341</p>
                  <p>Members</p>
                </div>
              </div>
              <div className="sm-cards md:p-4 flex gap-2 md:gap-4">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="text-2xl p-2  text-customGreen"
                />

                <div className="text-sm md:text-lg">
                  <p>46,328</p>
                  <p>Clubs</p>
                </div>
              </div>
              <div className="sm-cards md:p-4 flex gap-2 md:gap-4">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  className="text-2xl p-2 text-customGreen"
                />

                <div className="text-sm md:text-lg">
                  <p>828,867</p>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="sm-cards md:p-4 flex gap-2 md:gap-4">
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  className="text-2xl p-2 text-customGreen"
                />

                <div className="text-sm md:text-lg">
                  <p>1,926,436</p>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
    </>
  );
}

export default Home;
