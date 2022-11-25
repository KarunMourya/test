import style from "./Individual.module.css";
import { useNavigate } from "react-router-dom";
export default function Indiviual(props) {
  const navigation = useNavigate();
  return (
    <div className={style.indiviual}>
      <div className={style.titlecontain}>
        <img
          src={props.title}
          alt="not found"
        />
        <p onClick={()=>navigation('/view')}>{props.name}</p>
      </div>
      <div className={style.subcontain}>
      <div classname={style.desc}>
        <p>{props.address}</p>
        <p>{[props.time]}</p>
      </div>
      <div className={style.imageholder}>
        <img
          src={props.title}
          alt="not found"
        />
      </div>
      </div>
    </div>
  );
}
