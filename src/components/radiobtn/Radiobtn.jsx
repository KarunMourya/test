import React from 'react';
import style from './radiobtnStyle.module.css';

function Radiobtn(props) {
	return (
		<label className={style.btnContainer}>
			<input type="radio" checked={props.checked} name={props.name} value={props.value} onClick={props.onClick} required />
			<span>{props.role}</span>
		</label>
	);
}

export default Radiobtn;
