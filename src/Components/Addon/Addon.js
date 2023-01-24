import './Addon.css';
import {ReactComponent as Addition_Icon} from '../../Images/Addition_Icon.svg';
import {ReactComponent as Subtraction_Icon} from '../../Images/Subtraction_Icon.svg'
import Text_Input_Field from '../Text_Input_Field/Text_Input_Field';
import { useEffect, useState } from 'react';

const Addon = ({Add_an_Addon, Countable_Status, Delete_the_Addon, ID, Name, New_Status, Price, Update_the_Addon_Name, Update_the_Addon_Price}) =>
{
	const [Addon_Name, Set_Addon_Name] = useState ('');
	const [Addon_Price, Set_Addon_Price] = useState (0);

	useEffect (() =>
	{
        if (!New_Status)
        {
            Set_Addon_Name (Name);
		    Set_Addon_Price (Price);
        }
	}, []);

    const Add_a_New_Addon = () => 
    {
        Add_an_Addon ({Countable: Countable_Status, ID: ID, Name: Addon_Name, Price: Addon_Price});
        Set_Addon_Name ('');
        Set_Addon_Price (0);
    }

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
        {New_Status ? <Addition_Icon className='Button_Icon_on_a_Row' onClick={Add_a_New_Addon} fill='#8068A8'></Addition_Icon> : <Subtraction_Icon className='Button_Icon_on_a_Row' onClick={() => Delete_the_Addon (ID)} fill='#8068A8'></Subtraction_Icon>}
		<Text_Input_Field Function={Change_the_Name} Label='Name' Type='text' Value={Addon_Name}></Text_Input_Field>
        <Text_Input_Field Function={Change_the_Price} Label='Price' Type='number' Value={Addon_Price}></Text_Input_Field>
    </div>
}

export default Addon;