import React from 'react';
import style from './formFooterStyle.module.css';

function FormFooter(props) {
	return (
		<div className={style.footer}>
			<p>
				{props.statement}
				<span>{props.link}</span>
			</p>
		</div>
	);
}

export default FormFooter;
