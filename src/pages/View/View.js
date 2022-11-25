import  style from "./View.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "../../components/button/Button";
import { Carousel } from 'react-responsive-carousel';
import logo from './logo192.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const View = () =>{
    return (
    <div className={style.viewcontainer}>
    <div className={style.Back}>
 <button >
          <ChevronLeftIcon />
        </button>  
      </div>
      <div className={style.prof}>
        <div>
          <h3>hi</h3>
        </div>
        <div>
          <h2>Pokemon</h2>
        </div>
      </div>
    <div className={style.imgholder}>
    <Carousel showThumbs={false} infiniteLoop={true}>
                <div>
                    <img className={style.imgcontain} src={logo} alt=" found" />
                </div>
                <div>
                    <img className={style.imgcontain} src={logo}  alt=" found" />
                </div>
                <div>
                    <img className={style.imgcontain} src={logo} alt=" found" />
                </div>
            </Carousel>
    </div>
    <div className={style.infocontainer}>
    <div className={style.side} >
          <div className={style.rs}>
        <p>Date : 12/02/2002</p>
      </div>
      <div>
        <p>Phone No : 786941241</p>
      </div>

    </div>
    <div className={style.ls}>
      <div>
          Email: karunmourya4@gmail.com
        </div>
        <div >
          Address : 213fbnb/ sdjfvedihvcckjbc
        </div>
      </div>
    <div className={style.maincontainer}>
     
        <h5>Quantiy (approx)</h5>
        <div className={style.qycontainer}>
          <div >
            3
          </div>
          <div >
            Kg
          </div>
        </div>
      
      <div className={style.desc} >
        <h4>Description</h4>
        <p>gjsdytxkx7otsd75dcgdizxyrchcgkhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
      </div>
    </div>
    <div className={style.btncontain}>
    <button className={style.btn} type="submit" >Accept</button>
    </div>
    </div>
    </div>
    )
}
export default View;