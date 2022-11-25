import React from 'react';
import { Link } from 'react-router-dom';
import Backbtn from '../backbtn/Backbtn';
import Button from '../button/Button';
import FormFooter from '../formFooter/FormFooter';
import SimpleHeader from '../simpleHeader/SimpleHeader';
import style from './emailSentStyle.module.css';
import EmailSentImg from './Img/emailSent.svg';

function EmailSent() {
	const submitEmailSentForm = (e) => {
		e.preventDefault();
	};
	return (
		<div className={style.emailSentContainer}>
			<Link to="/forgotpassword">
				<Backbtn />
			</Link>

			<SimpleHeader
				heading="Email has been sent!"
				description="Please check your inbox and click in the recieved link to reset the password "
			/>
			<img
				className={style.emailSentImg}
				src={EmailSentImg}
				alt="Email Sent Img"
			/>

			<form
				action="#"
				className={style.emailSentForm}
				onSubmit={submitEmailSentForm}
			>
				<Button type="submit" value="LOG IN" />
			</form>
			<Link to="/err" style={{ color: 'inherit', textDecoration: 'inherit' }}>
				<FormFooter statement="Didn’t recieve the link ? " link="Resend" />
			</Link>
		</div>
	);
}

export default EmailSent;
