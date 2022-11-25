import { useRef } from "react";
import style from './Accordian.module.css'
const Accordian = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;

  const contentEl = useRef();

  return (
    <li className={`${style.accordion_item} ${active ? "active" : ""}`}>
      <button className={style.button} onClick={onToggle}>
        {question}
        <span className={style.control}>{active ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className={style.answer_wrapper}
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className={style.answer}>{answer}</div>
      </div>
    </li>
  );
};

export default Accordian;
// import React, { useState } from 'react'
// import style from './Accordian.module.css';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
// const Accordian = ({ question, answer }) => {
//   const [expanded, setExpanded] = useState(false)

//   return (
//     <div className={style.accordionitem}>
//       <div className={style.accordioncontent}>
//         <h4 onClick={() => setExpanded(!expanded)} className={style.questions}>
//           {question}
//         </h4>
//         <button className='btn' onClick={() => setExpanded(!expanded)}>
//           {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
//         </button>
//       </div>
//       {expanded && <div className={style.accordionanswer}>{answer}</div>}
//     </div>
//   )
// }

// export default Accordian;