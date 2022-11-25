import React, { useState } from 'react';
import style from './inputStyle.module.css';

function Input(props) {
	const [data, setData] = useState('');
	return (
		<input
			type={props.type}
			placeholder={props.placeholder}
			className={style.inputField}
			value={data}
			onChange={(e) => setData(e.target.value)}
			spellCheck="false"
			autoComplete="true"
			required
		/>
	);
}

export default Input;
