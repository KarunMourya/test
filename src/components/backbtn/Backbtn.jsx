import React from 'react';
import style from './backbtnStyle.module.css';
import backbtn from './Img/backbtn.svg';

function Backbtn() {
	return (
		<div className={style.backbtn}>
			<img src={backbtn} alt="Backbtn" />
		</div>
	);
}

export default Backbtn;
