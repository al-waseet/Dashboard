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
	const [User, Set_User] = useContext (User_Context);
	const navigate = useNavigate ()

	const Log_In = async () =>
	{
		const Authenticated_User = await API.Log_In ({Username, Password});
		Authenticated_User.Data.Avatar = Configuration.COS_URL + Authenticated_User.Data.Avatar;
		Set_User (Authenticated_User.Data);
		if (Authenticated_User.Status === 200)
		{
			navigate ('/');
		}
	}

	return (
		<div className='Authentication'>
			<div className='Input_Area'>
				<img alt='al waseet Banner' className='Authentication_Banner' src={al_waseet_Banner}></img>
				<Text_Input_Field Label='Username' Function={Set_Username} Purpose="Username" Type="text"></Text_Input_Field>
				<Text_Input_Field Label='Password' Function={Set_Password} Purpose="Password" Type="password"></Text_Input_Field>
				<Button Function={Log_In} Text="Log In"></Button>
			</div>
		</div>
	);
}

export default Authentication;