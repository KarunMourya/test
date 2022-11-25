import React from 'react';
import style from './buttonStyle.module.css';

function Button(props) {
	return <button className={style.btn}>{props.value}</button>;
}

export default Button;
