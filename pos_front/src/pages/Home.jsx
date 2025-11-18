import React from 'react'
import Greetings from '../components/home/Greetings'
import MiniCard from '../components/home/MiniCard'
import RecentOrders from '../components/home/RecentOrders'
import PopularDishes from '../components/home/PopularDishes'
import BottomNavi from '../components/shared/BottomNavi'
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";  
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left */}
      <div className="flex-3">
        <Greetings />
        <div className="flex items-center w-full gap-3 px-8 mt-8">
          <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
          <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6} />
        </div>
        <RecentOrders />
      </div>
      {/* Right */}
      <div className="flex-2">
        <PopularDishes />
      </div>
      <BottomNavi />
    </section>
  );
}

export default Home
