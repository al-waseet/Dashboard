import Addition_Button from '../../../../Components/Addition_Button/Addition_Button';
import Icon_Selector from '../../../../Components/Icon_Selector/Icon_Selector';
import Logo_Selector from '../../../../Components/Logo_Selector/Logo_Selector';
import Manager_Card from '../../../../Components/Manager_Card/Manager_Card';
import Manager_Editor from '../../../../Components/Manager_Editor/Manager_Editor';
import './Restaurant_Editor.css';
import Text_Input_Field from '../../../../Components/Text_Input_Field/Text_Input_Field';
import {useState, useEffect} from 'react';

const Restaurant_Editor = ({Restaurant, Set_Restaurant, Set_Users, Users}) =>
{
	const [Address, Set_Address] = useState ('');
	const [Icon, Set_Icon] = useState ('');
	const [Logo, Set_Logo] = useState ('');
	const [Manager_Editing_Statuses, Set_Manager_Editing_Statuses] = useState ({});
	const [Name, Set_Name] = useState ('');
	const [New_User_Creation_Mode, Set_New_User_Creation_Mode] = useState (false);
	const [Website, Set_Website] = useState ('');

	useEffect (() => 
	{
		Set_Address (Restaurant.Location);
		Set_Icon (Restaurant.Icons.Five_Hundred_Twelve_Pixels);
		Set_Logo (Restaurant.Logo);
		Set_Manager_Editing_Statuses (Users.filter (User => User.Type !== 'Owner').map (User => User.Username).reduce ((Username, Index) => (Username [Index] = false, Username), {}));
		Set_Name (Restaurant.Name);
		Set_Website (Restaurant.Website);
	}, []);


	const Change_the_Address = New_Address =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Location = New_Address;
		Set_Address (New_Address);
		Set_Restaurant (Restaurant_Copy);
	}

	const Change_the_Name = New_Name =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Name = New_Name;
		Set_Name (New_Name);
		Set_Restaurant (Restaurant_Copy);
	}

	const Change_the_Restaurant_Icon = async New_Icon =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Icons.Five_Hundred_Twelve_Pixels = URL.createObjectURL (New_Icon);
        Restaurant_Copy.Icons.Five_Hundred_Twelve_Pixels_File_Path = `/Images/${Restaurant_Copy.Name.replace (' ', '_')}/${Restaurant_Copy.Name.replace (' ', '_')}_Icon_512_Pixels.png`
		Set_Icon (Restaurant_Copy.Icons.Five_Hundred_Twelve_Pixels);
		Set_Restaurant (Restaurant_Copy);
	}

	const Change_the_Restaurant_Logo = async New_Logo =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Logo = URL.createObjectURL (New_Logo);
        Restaurant_Copy.Logo_File_Path = `/Images/${Restaurant_Copy.Name.replace (' ', '_')}/${Restaurant_Copy.Name.replace (' ', '_')}_Logo.png`
		Set_Logo (Restaurant_Copy.Logo);
		Set_Restaurant (Restaurant_Copy);
	}

	const Change_the_Website = New_Website =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Website = New_Website;
		Set_Website (New_Website);
		Set_Restaurant (Restaurant_Copy);
	}

	const Edit_the_User = Username => 
	{
		const Manager_Editing_Statuses_Copy = Object.assign ({}, Manager_Editing_Statuses);
		Manager_Editing_Statuses_Copy [Username] = true;
		Set_Manager_Editing_Statuses (Manager_Editing_Statuses_Copy);
	}

	const Delete_the_User = (Username) => Set_Users (Users.filter (User => User.Username !== Username));

	const Save_the_User = (Username) => 
	{
		const Manager_Editing_Statuses_Copy = Object.assign ({}, Manager_Editing_Statuses);
		Manager_Editing_Statuses_Copy [Username] = false;
		Set_Manager_Editing_Statuses (Manager_Editing_Statuses_Copy);
	}

	return (
		<div className='Restaurant_Editor' key='Restaurant_Editor_Key'>
			<h2 className='View_Header'>General Information</h2>
			<div className='Restaurant_Logos'>
				<Icon_Selector Current_Image={Icon} Function={(Event) => Change_the_Restaurant_Icon (Event.target.files [0])}></Icon_Selector>
				<Logo_Selector Current_Image={Logo} Function={(Event) => Change_the_Restaurant_Logo (Event.target.files [0])}></Logo_Selector>
			</div>
			<div className='Restaurant_Information'>
				<Text_Input_Field Label="Name" Function={Change_the_Name} Value={Name}></Text_Input_Field>
				<Text_Input_Field Label="Address" Function={Change_the_Address} Value={Address}></Text_Input_Field>
				<Text_Input_Field Label="Website" Function={Change_the_Website} Value={Website}></Text_Input_Field>
                <Text_Input_Field Disabled_Status={true} Label="Branch" Value={Restaurant.Branch}></Text_Input_Field>
			</div>
			<h2 className='Managers_Header'>Managers</h2>
			<div className='Managers'>
				{
					Users.filter (User => User.Type !== 'Owner').map (User => Manager_Editing_Statuses [User.Username] ? <Manager_Editor Delete_the_User={() => Delete_the_User (User.Username)} key={`${User.Username}_Edtior`} Save_the_User={() => Save_the_User (User.Username)} User={User}></Manager_Editor> : <Manager_Card Delete_the_User={() => Delete_the_User (User.Username)} Edit_the_User={() => Edit_the_User (User.Username)} Email={User.Email} Username={User.Username}></Manager_Card>)
				}
				{
					New_User_Creation_Mode ? <Manager_Editor Delete_the_User={() => Set_New_User_Creation_Mode (false)} User={{New_Status: true}} Users={Users} Set_Users={Set_Users} Set_New_User_Creation_Mode={Set_New_User_Creation_Mode}></Manager_Editor> : <Addition_Button Color='#8068A8' Function={() => Set_New_User_Creation_Mode (true)}></Addition_Button>
				}
			</div>
		</div>
	)
}

export default Restaurant_Editor