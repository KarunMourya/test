import React from 'react';
import style from './forgotStyle.module.css';
import SimpleHeader from '../simpleHeader/SimpleHeader';
import Input from '../input/Input';
import { Link } from 'react-router-dom';
import FormFooter from '../formFooter/FormFooter';
import Button from '../button/Button';
import Backbtn from '../backbtn/Backbtn';
import ForgotImage from './Img/forgotImg.svg';
import SideImage from '../sideImage/SideImage';

function Forgot() {
	const submitForgotForm = (e) => {
		e.preventDefault();
	};
	return (<>
		<div className={style.forgotContainer}>
			<Link to="/">
				<Backbtn />
			</Link>
			<SimpleHeader
				heading="Forget your password"
				description="Don’t worry enter your registered email id to recieve password reset link"
			/>
			<img className={style.forgotImg} src={ForgotImage} alt="ForgotImg" />
			<form
				action="/fogotPassword"
				method="post"
				className={style.forgotForm}
				onSubmit={submitForgotForm}
			>
				<Input id="forgot-email" type="email" placeholder="Email" />
				<Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
					<FormFooter statement="Remember Password ? " link="Log in" />
				</Link>

				<Link to="/emailsent">
					<Button type="submit" value="Send" />
				</Link>
			</form>
		</div>
		<SideImage/>
		</>
	);
}

export default Forgot;
