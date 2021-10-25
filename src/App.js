import React, { useState } from "react";
import DropDown from "./components/DropDown";
import Blobity from "blobity";

import BubbleSort from "./sortingAlgorithms/BubbleSort";
import SelectionSort from "./sortingAlgorithms/SelectionSort";

export default function App() {
  const [userSelection, setUserSelection] = useState("");

  const options = {
    color: "rgb(255, 255, 255)",
    magnetic: false,
    zIndex: 50,
    mode: "bouncy",
    opacity: "0.1",
  };
  new Blobity(options);

  return (
    <>
      <div className="w-screen h-auto flex flex-col items-center bg-black">
        <div className="mb-20">
          <h1 className="text-5xl text-white text-center mt-10 font-bold">
            Sorting Algorithms &nbsp;
            <span className="bg-white text-black rounded-lg p-1">
              Visualizer
            </span>
          </h1>
        </div>
        <DropDown userSelection={(name) => setUserSelection(name)} />
        <main className="w-full p-5">
          {userSelection === "Bubble Sort" && <BubbleSort />}
          {userSelection === "Selection Sort" && <SelectionSort />}
        </main>
      </div>
    </>
  );
}
