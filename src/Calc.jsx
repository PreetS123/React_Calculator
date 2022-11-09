import React, { useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import {
  AiOutlineClose,
  AiOutlinePercentage,
  AiOutlinePlus,
} from "react-icons/ai";
import styles from "./Calc.module.css";

export const Calc = () => {
  const [inpVal, setInpVal] = useState("");

  const handleButton = (e) => {
    let val = e.target.value;
    setInpVal(inpVal + val);
  };
  const handleCalculation = () => {
    setInpVal(eval(inpVal).toString());
  };
  return (
    <>
      <div className={styles.calcdiv}>
        <div className={styles.calc_inpdiv}>
          <input
            type="text"
            value={inpVal}
            onChange={(e) => {
              setInpVal(e.target.value);
            }}
          />
        </div>
        <div className={styles.calc_btndiv}>
          <button
            value="AC"
            onClick={(e) => {
              setInpVal("");
            }}
          >
            AC
          </button>
          <button
            value="back"
            onClick={(e) => {
              setInpVal(inpVal.slice(0, -1));
            }}
          >
            <RiDeleteBack2Line />
          </button>
          <button value="%" onClick={handleButton}>
            <AiOutlinePercentage />
          </button>
          <button value="/" onClick={handleButton}>
            /
          </button>
          <button value="7" onClick={handleButton}>
            7
          </button>
          <button value="8" onClick={handleButton}>
            8
          </button>
          <button value="9" onClick={handleButton}>
            9
          </button>
          <button value="*" onClick={handleButton}>
            <AiOutlineClose />
          </button>
          <button value="4" onClick={handleButton}>
            4
          </button>
          <button value="5" onClick={handleButton}>
            5
          </button>
          <button value="6" onClick={handleButton}>
            6
          </button>
          <button value="-" onClick={handleButton}>
            -
          </button>
          <button value="1" onClick={handleButton}>
            1
          </button>
          <button value="2" onClick={handleButton}>
            2
          </button>
          <button value="3" onClick={handleButton}>
            3
          </button>
          <button value="+" onClick={handleButton}>
            <AiOutlinePlus />
          </button>
          <button value="0" onClick={handleButton}>
            0
          </button>
          <button value="00" onClick={handleButton}>
            00
          </button>
          <button value="=" onClick={handleCalculation}>
            =
          </button>
        </div>
      </div>
    </>
  );
};
