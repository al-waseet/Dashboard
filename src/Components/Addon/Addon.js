import './Addon.css';
import {ReactComponent as Subtraction_Icon} from '../../Images/Subtraction_Icon.svg'
import Text_Input_Field from '../Text_Input_Field/Text_Input_Field';
import { useEffect, useState } from 'react';

const Addon = ({Currency, Delete_the_Addon, ID, Name, Price, Update_the_Addon_Name, Update_the_Addon_Price}) =>
{
	const [Addon_Name, Set_Addon_Name] = useState ('');
	const [Addon_Price, Set_Addon_Price] = useState (0);

	useEffect (() =>
	{
		Set_Addon_Name (Name);
		Set_Addon_Price (Price);
	});

	const Change_the_Name = New_Name =>
	{
		Set_Addon_Name (New_Name);
		Update_the_Addon_Name (ID, New_Name);
	}

	const Change_the_Price = New_Price =>
	{
		Set_Addon_Price (New_Price);
		Update_the_Addon_Price (ID, New_Price);
	}

	return <div className='Addon_Container'>
		<Text_Input_Field Function={Change_the_Name} Type='text' Value={Addon_Name}></Text_Input_Field>
		<div className='Currency'>{Currency}</div>
		<Text_Input_Field Function={Change_the_Price} Type='text' Value={Addon_Price}></Text_Input_Field>
		<div className='Button_on_a_Row' onClick={() => Delete_the_Addon (ID)}><Subtraction_Icon className='Button_Icon_on_a_Row' fill='#8068A8'></Subtraction_Icon></div>
	</div>
}

export default Addon;