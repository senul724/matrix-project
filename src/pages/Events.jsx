import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Events = () => {
  const [route, setRoute] = useState("awurudu")
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center py-12 w-full text-4xl text-center border">
        Events of the matrix group
        <div className="mt-2 mb-5 w-1/2 bg-blue-400 h-[0.8px]"/>
        <span className="text-2xl text-center text-[#6b6b6b]">This is about some fun we had apart from the class work!</span>
      </div>
      <div className="flex justify-center items-center w-full border">
        <div className="flex flex-row justify-around items-center py-4 w-2/3">
          <Link to="awurudu" className={route === "awurudu" ? "text-blue-400":""} onClick={()=>setRoute("awurudu")}>
              <p className="relative m-4 group">
                <span>Awurudu event</span>
                <span className={"absolute left-0 -bottom-1 w-0 bg-blue-400 transition-all group-hover:w-full h-[0.8px]"+""}></span>
              </p>
          </Link>
          <Link to="dansala" className={route === "dansala" ? "text-blue-400":""} onClick={()=>setRoute("dansala")}>
              <p className="relative m-4 group" >
                <span>Dansala event</span>
                <span className="absolute left-0 -bottom-1 w-0 bg-blue-400 transition-all group-hover:w-full h-[0.8px]"></span>
              </p>
          </Link>
          <Link to="outings" className={route === "outings" ? "text-blue-400":""} onClick={()=>setRoute("outings")}>
              <p className="relative m-4 group" >
                <span>Outings</span>
                <span className="absolute left-0 -bottom-1 w-0 bg-blue-400 transition-all group-hover:w-full h-[0.8px]"></span>
              </p>
          </Link>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Events;
