import Button from '../Button/Button';
import './Password_Editor.css';
import { useState } from 'react';

const Password_Editor = ({Function, Password}) =>
{
	const [Password_Editing_Status, Set_Password_Editing_Status] = useState (false);

	return (
		<div className='Password_Container'>
			<label className="Password_Input_Label" >Password</label>
			<div className='Password_Row'>
				{Password_Editing_Status ? <input className='Password_Input_Field' onChange={(Event) => Function (Event.target.value)} type='password' Value={Password}/> : <p className='Password_Mask'>••••••••</p>}
				<Button Colors={{ Button: '#8068A8', Button_Text: '#FFFFFF' }} Function={() => Set_Password_Editing_Status (!Password_Editing_Status)} Text={Password_Editing_Status ? 'Save' : 'Change'}></Button>
			</div>
		</div>
	)
}

export default Password_Editor