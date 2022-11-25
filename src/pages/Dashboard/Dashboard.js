import Card from '../../pages/Card/Card'
import style from './Dashboard.module.css'
function Dashboard() {
  return (
    <div className={style.user_dashboard}>
        <div className={style.user_contain}>
        <div className={style.heading}>
          <p className={style.greeting}>Morning</p>
          <h3 className={style.name}>Hi, Karun</h3>
        </div>
        <div className={style.Pending}>
        <h2 >Pending</h2>
        <div className={style.scroll}>
        <Card
          title="First" 
          type='noack'
          status={true}
          name="NGO dvsjsyfuvasik"
          />
          <Card
            title="First" 
          type='noack'
          status={true}
          name="NGO dvsjsyfuvasik"
          />
          <Card
            title="First" 
          type='noack'
          status={true}
          name="NGO dvsjsyfuvasik"
          />
                    <Card
            title="First" 
          type='noack'
          status={true}
          name="NGO dvsjsyfuvasik"
          />
          </div>
        </div>
        <div className={style.Waiting}>
          <h2 className="title">Waiting for acknowlegment</h2>
          <div className={style.scroll}>
          <Card
            title="First" 
          type='ack'
          status={true}
          name="NGO dvsjsyfuvasik"
          />
          <Card
            title="First" 
          type='ack'
          status={true}
          name="NGO dvsjsyfuvasik"
          />
          <Card
            title="First" 
          type='ack'
          status={true}
          name="NGO dvsjsyfuvasik"
          />
          </div>
        </div>
        </div>
    </div>
  );
}
export default Dashboard;
