import Dropdown_Menu from '../../../../Components/Dropdown_Menu/Dropdown_Menu'
import './POS_Editor.css';
import Spinner from '../../../../Components/Spinner/Spinner'
import Text_Input_Field from '../../../../Components/Text_Input_Field/Text_Input_Field';
import { useEffect, useState } from 'react';

const POS_Editor = ({POS, Restaurant, Set_Restaurant}) =>
{
	const [API_Key, Set_API_Key] = useState ('');
    const [Point_of_Sale, Set_Point_of_Sale] = useState ('');

	useEffect (() => 
    {
        Set_API_Key (Restaurant.POS.API_Key);
        Set_Point_of_Sale (Restaurant.POS.System);
    }, []);

	const Change_API_Key = New_API_Key =>
	{
		Set_API_Key (New_API_Key);
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.POS.API_Key = New_API_Key;
		Set_Restaurant (Restaurant_Copy);
	}

    const Change_Point_of_Sale = New_Point_of_Sale =>
	{
		Set_Point_of_Sale (Point_of_Sale);
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.POS.System = New_Point_of_Sale;
        Restaurant_Copy.POS.API_URL = POS.find (Business => Business.System === New_Point_of_Sale).API_URL;
		Set_Restaurant (Restaurant_Copy);
	}

	return (
		<div className='POS_Editor' key='POS_Editor_Key'>
			{POS === undefined ? <Spinner></Spinner> : <><Dropdown_Menu Function={Change_Point_of_Sale} Label='POS System' Options={POS.map (Business => Business.System)} Value={Point_of_Sale}></Dropdown_Menu>
			<Text_Input_Field Color='#4D4D4D' Function={Change_API_Key} Label='API Key' Type='password' Value={API_Key}></Text_Input_Field></>}
		</div>
	)
}

export default POS_Editor;