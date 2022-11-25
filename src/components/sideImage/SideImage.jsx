import React from 'react';
import style from './sideimage.module.css';
import loginImg from './Img/loginImg.svg';

function SideImage() {
	return (
		<div className={style.imgContainer}>
			<img src={loginImg} alt="side-img" />
		</div>
	);
}

export default SideImage;
