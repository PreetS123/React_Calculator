import React from "react";
import {RiDeleteBack2Line} from 'react-icons/ri';
import {AiOutlineClose,AiOutlinePercentage,AiOutlinePlus} from 'react-icons/ai';
import styles from './Calc.module.css'

export const Calc = () => {

  return (
    <>
      <div className={styles.calcdiv}>
        <div className={styles.calc_inpdiv}>
          <input type="text" />
        </div>
        <div className={styles.calc_btndiv}>
          <button>AC</button>
          <button><RiDeleteBack2Line/></button>
          <button><AiOutlinePercentage/></button>
          <button>/</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button><AiOutlineClose/></button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button><AiOutlinePlus/></button>
          <button>0</button>
          <button>00</button>
          <button>=</button>
        </div>
      </div>
    </>
  );
};
