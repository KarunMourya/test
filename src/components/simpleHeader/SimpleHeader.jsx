import React from 'react';
import style from './simpleHeaderStyle.module.css';

function SimpleHeader(props) {
	return (
		<div className={style.headerContainer}>
			<p>{props.heading}</p>
			<p>{props.description}</p>
		</div>
	);
}

export default SimpleHeader;
