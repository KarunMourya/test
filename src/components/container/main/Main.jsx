import style from './Main.module.css';
function Main(props){
    return <>
        <div className={style.Main}>
            {props.children}
        </div>

    </>
}
export default Main;