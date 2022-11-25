import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";
export default function Card(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.card}>
        <div className={style.cardbody}>
          {props.type === "ack" && (
            <>
              {props.status && (
                <div className={style.ack}>
                <div>
                  <p>Created at : {props.title}</p>
                  </div><div><p>Accepted by : <b>{props.name}</b></p>
                  </div><div className={style.btton}>
                    <button type="submit" className={style.btn}>
                      Acknowlgement
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
          {props.type === "noack" && (
            <div className={style.pending}>
              <p>Created at : {props.title}</p>
              <p>Time left :<br/> 12-02-28 12:28:12</p>
              <div className={style.btton}>
                <div className={style.ackbutton}>
                  <button type="submit" className={style.btn}>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={style.btn}
                    onClick={() => navigate("/view")}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          )}

          {props.type === "save" && (
            <div className={style.save}>
              <p>Created at : {props.title}</p>
              <p>Accepted by : {props.name}</p>
            </div>
          )}
        </div>
        <div>
        <img
          src="https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg"
          className={style.cardimgtop}
          alt="..."
        />
        </div>
      </div>
    </>
  );
}
