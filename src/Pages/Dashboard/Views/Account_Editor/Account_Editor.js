import './Account_Editor.css';
//import Button from '../../../../Components/Button/Button';
import { Get_the_File_Extension } from '../../../../Helpers';
import Icon_Selector from '../../../../Components/Icon_Selector/Icon_Selector';
import Password_Editor from '../../../../Components/Password_Editor/Password_Editor';
import Phone_Number_Input_Field from '../../../../Components/Phone_Number_Input_Field/Phone_Number_Input_Field';
import Text_Input_Field from '../../../../Components/Text_Input_Field/Text_Input_Field';
import { useEffect, useState } from 'react';

const Account_Editor = ({Restaurant_Name, Set_User, User}) =>
{
	const [Avatar, Set_Avatar] = useState ('');
	const [Email, Set_Email] = useState ('');
	const [Password, Set_Password] = useState ('');
	const [Phone_Number, Set_Phone_Number] = useState ('');
	const [Phone_Number_Code, Set_Phone_Number_Code] = useState ('');
	const [Username, Set_Username] = useState ('');

	useEffect (() => 
	{
		Set_Avatar (User.Avatar);
		Set_Email (User.Email);
		Set_Phone_Number (User.Phone_Number)
		Set_Phone_Number_Code (User.Phone_Number_Code)
		Set_Username (User.Username);
	}, []);

	const Change_the_Avatar = async New_Avatar =>
	{
		const User_Copy = Object.assign ({}, User);
		User_Copy.Avatar = URL.createObjectURL (New_Avatar);
		User_Copy.Avatar_File_Path = `/Images/${Restaurant_Name.replace (' ', '_')}/Profile_Pictures/${User_Copy.Username}_Profile_Picture${Get_the_File_Extension (User_Copy.Avatar.type)}`;
		Set_Avatar (User_Copy.Avatar);
		Set_User (User_Copy);
	}

	const Change_the_Email = New_Email =>
	{
		const User_Copy = Object.assign ({}, User);
		User_Copy.Email = New_Email;
		Set_Email (New_Email);
		Set_User (User_Copy);
	}

	const Change_the_Password = New_Password =>
	{
		const User_Copy = Object.assign ({}, User);
		User_Copy.Password = New_Password;
		Set_Password (New_Password);
		Set_User (User_Copy);
	}

	const Change_the_Username = New_Username =>
	{
		const User_Copy = Object.assign ({}, User);
		User_Copy.Username = New_Username;
		Set_Username (New_Username);
		Set_User (User_Copy);
	}

	/*const Delete_the_Card = (Payment_Card_Number) =>
	{
		const User_Copy = Object.assign ({}, User)
		User_Copy.Payment_Methods = User_Copy.Payment_Methods.filter (Payment_Method => Payment_Method.Number !== Payment_Card_Number);
		Set_User (User_Copy);
	}*/

	return (
		<div className='Account_Editor' key='Account_Editor_Key'>
			<h2 className='View_Header'>User Information</h2>
			<div className='Account_Information'>
				<div className='Credentials'>
					<Text_Input_Field Function={Change_the_Username} Label="Username" Value={Username}></Text_Input_Field>
					<Password_Editor Function={Change_the_Password} Password={Password}></Password_Editor>
					<Text_Input_Field Function={Change_the_Email} Label="Email" Value={Email}></Text_Input_Field>
					<Phone_Number_Input_Field Phone_Number={Phone_Number} Phone_Number_Code={Phone_Number_Code} Set_Phone_Number={Set_Phone_Number} Set_Phone_Number_Code={Set_Phone_Number_Code}></Phone_Number_Input_Field>
				</div>
				<Icon_Selector Current_Image={Avatar} Function={(Event) => Change_the_Avatar (Event.target.files [0])}></Icon_Selector>
			</div>
			{/*<h2 className='Payment_Methods_Header'>Payment Cards</h2>
			<div className='Payment_Methods'>
				{User.Payment_Methods.map (Payment_Method => <Payment_Card Delete_the_Card={() => Delete_the_Card (Payment_Method.Number)} Last_4_Digits={Payment_Method.Number.slice (15, 19)} Type={Payment_Method.Card}></Payment_Card>)}
				{!Card_Creation_Mode && <Addition_Button Function={() => Set_Card_Creation_Mode (true)}></Addition_Button>}
			</div>
			<div className='New_Payment_Card'>
				{Card_Creation_Mode && <Payment_Card_Editor Set_Card_Creation_Mode={Set_Card_Creation_Mode} Set_User={Set_User} User={User}></Payment_Card_Editor>}
			</div>*/}
			{/*<h2 className='Subscription_Header'>Subscription</h2>
			<div className='Subscription'>
				<p><strong>Your plan:</strong> {User.Subscription.Plan}</p>
				<p><strong>Subscription valid until:</strong> {User.Subscription.End_Date}</p>
				<p><strong>Next payment:</strong> {User.Subscription.Next_Payment}</p>
				<p><strong>Total due:</strong> AED {User.Subscription.Outstanding_Amount}</p>
				<div className='Subscription_Button_Container'>
					<Button Colors={{Button: '#8068A8', Button_Text: '#FFFFFF'}} Text="Pay"></Button>
					<Button Colors={{Button: '#8068A8', Button_Text: '#FFFFFF'}} Text="Change Plan"></Button>
				</div>
			</div>*/}
		</div>
	)
}

export default Account_Editor