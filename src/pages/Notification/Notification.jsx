import style from './Notification.module.css';
import SingleNotify from './SingleNotify';
function Notification(){
    const data = [
        {
            "id":1,
            "types":"Karma"
        },
        {
            "id":2,
            "types":"Accepted",
        },
        {
            "id":3,
            "types":"Karma"
        },
        {
            "id":4,
            "types":"Timeout"
        },
        {
            "id":5,
            "types":"Timeout",
        },
        {
            "id":6,
            "types":"Karma"
        },
        {
            "id":7,
            "types":"Timeout"
        }
    ]
    return <div className={style.notification}>
    <div className={style.notify}>
    {
            data.map((item,index)=>(
                <div key={index}>
                    <SingleNotify type={item.types} />
                    &nbsp;
                </div>
            ))
        }
    </div>
    </div>
}
export default Notification;