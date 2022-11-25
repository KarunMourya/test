import { useState } from "react";
import style from "./Support.module.css";
import Accordian from "./Accordian";
function Support() {
  const [message, setMessage] = useState("");
  const Message = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    console.log(message);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  const data = [
    {
      question: "What are the services do you offer",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis vitae tempora quod provident tenetur culpa dolore facere? Earum, dolor?",
    },
    {
      question: "what are our preferred method of payment",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam",
    },
    {
      question: "Are your services beginners friendly",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores,",
    },
  ];
  return (
    <div className={style.usersupport}>
 
    <div className={style.mobile}>
    <div>        <h1 style={{margin:0}}>How can we help you?</h1></div>
    <div>        <p style={{margin:0}}>
          If you cannot find answer to your question in our FAQ, you can always
          contact us.
          <br /> We will answer to you shortly!
        </p></div>
    <div>
    <form onSubmit={onSubmit} className={style.forms}>
          <textarea placeholder="Write your message here" onChange={Message} />
          <button type="submit">Submit</button>
        </form>
    </div>
      </div>
      <div className={style.faq}>
      <div className={style.acctitle}>
        <h1 style={{margin:0}}>Frequently Asked Question</h1>
      </div>
      <div>
      <ul className={style.accordion}>
          {data.map((faq, index) => (
            <Accordian
              key={index}
              faq={faq}
              onToggle={() => handleToggle(index)}
              active={clicked === index}
            />
          ))}
        </ul>
      </div>
      </div>

    </div>
  );
}

export default Support;
