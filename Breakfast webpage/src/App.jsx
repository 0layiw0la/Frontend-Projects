import { useState } from "react";
import RollingImageSlider from "./RollingDish";
import Navbar from "./Navbar";
import meal1 from './assets/meal1.png';
import meal2 from './assets/meal2.png';
import meal3 from './assets/meal3.png';
import meal4 from './assets/meal4.png';


export default function App() {
  const [index, setIndex] = useState(0);
  const colors = ["#880808", "#0A4669", "#953553","#006666"]; // Background colors

  return (
    <div 
    className="p-10 h-[100vh] w-full transition-colors duration-500 flex flex-col gap-12"
    style={{ backgroundColor: colors[index] }}
    >
    <Navbar />
    <div
      className="flex justify-between p-5 h-auto items-center text-white justify-self-center"
    >
        <div className="w-[50%] flex flex-col gap-5">
            <h1 className="font-bold text-4xl">BREAKFAST</h1>
            <p>Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet. Eating a healthy breakfast can improve concentration and performance, boost physical endurance, and lower cholesterol levels.</p>
            <span className="h-[8vw] w-[8vw] flex gap-2">
                <img src={meal1}></img>
                <img src={meal2}></img>
                <img src={meal3}></img>
                <img src={meal4}></img>
            </span>
                <input 
                  type="text"
                  name="search"
                  placeholder="Search....."
                  className="w-[28vw] mt-[7%] p-1 pl-3 rounded-full text-black font-semibold bg-white placeholder-black"
                  />
        </div>
      <RollingImageSlider
        img1={meal1}
        img2={meal2}
        img3={meal3}
        img4={meal4}
        index={index}
        onNext={() => setIndex((prev) => (prev + 1) % colors.length)}
      />
    </div>
    </div>
  );
}
