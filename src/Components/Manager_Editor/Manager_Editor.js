import Button from '../Button/Button';
import './Manager_Editor.css';
import Text_Input_Field from '../Text_Input_Field/Text_Input_Field';
import { useEffect, useState } from 'react';

const Manager_Editor = ({Delete_the_User, Save_the_User, User, Users, Set_Users, Set_New_User_Creation_Mode}) =>
{
	const [Email, Set_Email] = useState ('');
	const [Password, Set_Password] = useState ('');
	const [Username, Set_Username] = useState ('');

	useEffect (() => 
	{
		if (!User.New_Status)
		{
			Set_Email (User.Email);
			Set_Username (User.Username);
		}
	}, []);

	const Add_the_User = () =>
	{
		const New_User = 
		{
			Avatar: "",
			Email: Email,
			Owner: false,
			Password: Password,
			Payment_Methods: [],
			Phone_Number: "",
			Restaurant_ID: User.Restaurant_ID,
			Subscription: {},
			Username: Username
		}
		Set_Users ([...Users, New_User]);
		Set_New_User_Creation_Mode (false);
	}

	return (<div className='Manager_Editor'>
		<div className='Editable_Manager_Credentials_Container'>
			<Text_Input_Field Label='Username' Type="text" Function={Set_Username} Value={Username}></Text_Input_Field>
			<Text_Input_Field Label='Email' Type="text" Function={Set_Email} Value={Email}></Text_Input_Field>
			<Text_Input_Field Label='Password' Type="password" Function={Set_Password} Value={Password}></Text_Input_Field>
		</div>
		<div className='Manager_Editor_Button_Container'>
			<Button Colors={{Button: '#8068A8', Button_Text: '#FFFFFF'}} Function={User.New_Status ? Add_the_User : Save_the_User} Text={User.New_Status ? 'Add' : 'Save'}></Button>
			<Button Colors={{Button: '#AC0202', Button_Text: '#FFFFFF'}} Function={Delete_the_User} Text={User.New_Status ? 'Cancel' : 'Delete'}></Button>
		</div>
	</div>)
}

export default Manager_Editor;