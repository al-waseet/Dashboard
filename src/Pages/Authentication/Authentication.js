import al_waseet_Banner from '../../Images/al_waseet_Banner.svg';
import API from '../../API';
import './Authentication.css';
import Button from '../../Components/Button/Button';
import { Configuration } from '../../Configuration';
import Text_Input_Field from '../../Components/Text_Input_Field/Text_Input_Field';
import { User_Context } from '../../Contexts/User';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication = () => 
{
	const [Username, Set_Username] = useState ('');
	const [Password, Set_Password] = useState ('');
	const [Password_Reset_Mode, Set_Password_Reset_Mode] = useState (false);
	const [User, Set_User] = useContext (User_Context);
	const Navigate = useNavigate ()

	const Log_In = async () =>
	{
		const Authenticated_User = await API.Log_In ({Username, Password});
		Authenticated_User.Data.Avatar_File_Path = Authenticated_User.Data.Avatar;
		Authenticated_User.Data.Avatar = Configuration.COS_URL + Authenticated_User.Data.Avatar;
		Authenticated_User.Data.Restaurant.Categories.forEach (Category => 
		{
			Category.File_Path = Category.Banner_Image;
			Category.Banner_Image = Configuration.COS_URL + Category.Banner_Image;
			
		});
		Authenticated_User.Data.Restaurant.Cart_Icon_File_Path = Authenticated_User.Data.Restaurant.Cart_Icon;
		Authenticated_User.Data.Restaurant.Cart_Icon = Configuration.COS_URL + Authenticated_User.Data.Restaurant.Cart_Icon;
		Object.keys (Authenticated_User.Data.Restaurant.Icons).forEach (Key =>
		{
			Authenticated_User.Data.Restaurant.Icons [`${Key}_File_Path`] = Authenticated_User.Data.Restaurant.Icons [Key];
			Authenticated_User.Data.Restaurant.Icons [Key] = Configuration.COS_URL + Authenticated_User.Data.Restaurant.Icons [Key];
		}); 
		Authenticated_User.Data.Restaurant.Menu.forEach (Menu_Item => 
		{
			Menu_Item.File_Path = Menu_Item.Image;
			Menu_Item.Image = Configuration.COS_URL + Menu_Item.Image
		}); 
		Authenticated_User.Data.Restaurant.Logo_File_Path = Authenticated_User.Data.Restaurant.Logo;
		Authenticated_User.Data.Restaurant.Logo = Configuration.COS_URL + Authenticated_User.Data.Restaurant.Logo;
		Set_User (Authenticated_User.Data);
		if (Authenticated_User.Status === 200)
		{
			Navigate ('/');
		}
	}

	const Send_a_Link_to_Reset_the_Password = async () =>
	{
		//await API.Send_an_Email ({Username});
		setTimeout (() =>
		{
			window.location.href = 'https://alwaseet.me';
		}, 5000);
	}

	return (
		<div className='Authentication'>
			<div className='Input_Area'>
				<img alt='al waseet Banner' className='Authentication_Banner' src={al_waseet_Banner}></img>
				<Text_Input_Field Label='Username' Function={Set_Username} Purpose="Username" Type="text"></Text_Input_Field>
				{!Password_Reset_Mode && <Text_Input_Field Label='Password' Function={Set_Password} Purpose="Password" Type="password"></Text_Input_Field>}
				<div className='Forgot_Password_Field' onClick={() => Set_Password_Reset_Mode (!Password_Reset_Mode)}>{!Password_Reset_Mode ? 'Forgot the password?' : 'Remembered the password?'}</div>
				<Button Function={Password_Reset_Mode ? Send_a_Link_to_Reset_the_Password : Log_In} Text={Send_a_Link_to_Reset_the_Password ? "Reset" : "Log In"}></Button>
			</div>
		</div>
	);
}

export default Authentication;