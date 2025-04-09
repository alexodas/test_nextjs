import Image from "next/image";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-80">
      <div className="bg-white p-2 rounded-md mb-2">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full text-right text-2xl font-mono outline-none"
          placeholder="0"
        />
        <div className="text-right text-xl font-mono text-gray-600">
          {result}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"].map(
          (button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className={`bg-gray-300 hover:bg-gray-400 p-2 rounded-md text-xl ${
                ["=", "C"].includes(button)
                  ? "bg-blue-300 hover:bg-blue-400"
                  : ""
              }`}
            >
              {button === "+" 
                ? "😼 +" 
                : button === "-" 
                  ? "😼 -" 
                  : button === "*" 
                    ? "😼 *" 
                    : button === "/" 
                ? "😼"
                : button}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <Calculator />
    </div>
  );
}
