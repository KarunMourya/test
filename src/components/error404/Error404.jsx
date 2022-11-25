import React from 'react';
import Error404Img from './Img/Error404.svg';
import style from './error404Style.module.css';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

function Error404() {
	return (
		<div className={style.errContainer}>
			<img src={Error404Img} />
			<p className={style.oops}>Oops</p>
			<p className={style.errText}>
				Something went wrong.
				<br />
				Please try again.
			</p>
			<Link to="/">
				<Button value="Home" />
			</Link>
		</div>
	);
}

export default Error404;
