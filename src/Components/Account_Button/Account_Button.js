import './Account_Button.css'
import {ReactComponent as Account_Icon} from '../../Images/Account_Icon.svg';
import {useState} from 'react';


const Account_Button = ({Log_Out, Profile_Picture, Set_Active_Tab, Set_View_Title}) => 
{
	const [Menu_Display_Status, Set_Menu_Display_Status] = useState (false);

	return <div className='Account_Button_Container'>
		<div className='Account_Button'>{Profile_Picture ? <img className='Avatar_Icon' onClick={() => Set_Menu_Display_Status (!Menu_Display_Status)} src={Profile_Picture}></img> : <Account_Icon className='Avatar Account_Icon' fill='#8068A8'></Account_Icon>}</div>
		{Menu_Display_Status ? 
		<div className='Account_Menu'>
			<div className='Account_Menu_Option' onClick={() => {Set_Active_Tab (); Set_View_Title ();}}>Account Settings</div>
			<div className='Account_Menu_Option' onClick={Log_Out}>Log Out</div>
		</div> : null}
	</div>
}

export default Account_Button;