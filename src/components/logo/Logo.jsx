import React from 'react';
import style from './logoStyle.module.css';
import logo from './Img/logo.svg';

function Logo() {
	return (
		<div className={style.logo}>
			<img src={logo} alt="logo" />
			<p>FORAGE</p>
		</div>
	);
}

export default Logo;
