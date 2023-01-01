import './Dropdown_Menu.css';
import { useEffect, useRef, useState } from 'react';

const Dropdown_Menu = ({Classes, Function, Label, Options, Value}) => 
{
    const [Option_Showing_Status, Set_Option_Showing_Status] = useState (false);
	const Phone_Number_Code_Form_Reference = useRef();

	const Press_the_Escape_Button = (Event) => 
	{
		if (Event.keyCode === 27)
		{
			Set_Option_Showing_Status (false);
		}
	}

	const Handle_the_Outside_Click = Event => 
	{
		if (!Phone_Number_Code_Form_Reference.current.contains (Event.target)) 
		{
			Set_Option_Showing_Status (false);
		}
	};

	useEffect (() => 
	{
		document.addEventListener ('mousedown', Handle_the_Outside_Click);
		return () => document.removeEventListener ('mousedown', Handle_the_Outside_Click);
	});

	return <div className={'Dropdown_Menu_Container' + (Classes ? (' ' + Classes.join (' ')) : '')}>
		<label className="Dropdown_Menu_Label">{Label}</label>
		<form className='Dropdown_Menu_Form' onKeyDown={Press_the_Escape_Button} ref={Phone_Number_Code_Form_Reference}>
			<input checked={Option_Showing_Status} className='Dropdown_Menu_Controller' onChange={(Event) => Set_Option_Showing_Status (!Option_Showing_Status)} type="checkbox" />
			<div className='Dropdown_Menu_Box'>
				<div className='Dropdown_Menu_Selected_Value' style={(!Option_Showing_Status && Value === undefined) ? {visibility: 'hidden'} : null}><span>Select POS</span></div>
				<div className='Dropdown_Menu_Arrow_Icon'></div>
			</div>
			<div className='Dropdown_Menu_Options'>
				{Options.map (Option => <div className="Dropdown_Menu_Option" onClick={() => Set_Option_Showing_Status (!Option_Showing_Status)}>
					<input className="Selection_Controller Top_Half" defaultChecked={Value === Option} name={Label.replace (' ', '_')} onChange={(Event) => Function (Event.target.value)} type="radio" value={Option} />
					<input className="Selection_Controller Bottom_Half" defaultChecked={Value === Option} name={Label.replace (' ', '_')} onChange={(Event) => Function (Event.target.value)} type="radio" value={Option} />
					<span className='Option_Label'>{Option}</span>
					<span className='Option_Value'>{Option}</span>
				</div>)}
				<div className='Option_Background'></div>
			</div>
		</form>
	</div>
}

export default Dropdown_Menu;