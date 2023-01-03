import './Account_Button.css'
import {ReactComponent as Account_Icon} from '../../Images/Account_Icon.svg';
import { useEffect, useRef, useState } from 'react';


const Account_Button = ({Log_Out, Profile_Picture, Set_Active_Tab, Set_View_Title}) => 
{
    const Account_Menu_Reference = useRef ();
	const [Menu_Display_Status, Set_Menu_Display_Status] = useState (false);
    
    const Press_the_Escape_Button = (Event) => 
	{
		if (Event.keyCode === 27)
		{
			Set_Menu_Display_Status (false);
		}
	}

	const Handle_the_Outside_Click = Event => 
	{
		if (!Account_Menu_Reference.current.contains (Event.target)) 
		{
			Set_Menu_Display_Status (false);
		}
	};

	useEffect (() => 
	{
		document.addEventListener ('mousedown', Handle_the_Outside_Click);
		return () => document.removeEventListener ('mousedown', Handle_the_Outside_Click);
	});

	return <div className='Account_Button_Container' onKeyDown={Press_the_Escape_Button} ref={Account_Menu_Reference}>
		<div className='Account_Button' onClick={() => Set_Menu_Display_Status (!Menu_Display_Status)}>{Profile_Picture ? <img className='Avatar_Icon' src={Profile_Picture}></img> : <Account_Icon className='Avatar Account_Icon' fill='#8068A8'></Account_Icon>}</div>
		{Menu_Display_Status ? 
		<div className='Account_Menu'>
			<div className='Account_Menu_Option' onClick={() => {Set_Active_Tab (); Set_View_Title (); Set_Menu_Display_Status (false);}}>Account Settings</div>
			<div className='Account_Menu_Option' onClick={Log_Out}>Log Out</div>
		</div> : null}
	</div>
}

export default Account_Button;