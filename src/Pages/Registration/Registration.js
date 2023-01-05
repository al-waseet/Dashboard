import API from '../../API';
import {ReactComponent as Back_Icon} from '../../Images/Back_Icon.svg';
import Button from '../../Components/Button/Button';
import { Configuration } from '../../Configuration';
import './Registration.css';
import Text_Input_Field from '../../Components/Text_Input_Field/Text_Input_Field';
import { User_Context } from '../../Contexts/User';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => 
{
	const [Address, Set_Address] = useState ('');
	const [Branch, Set_Branch] = useState ('');
	const [Email, Set_Email] = useState ('');
	const [Password, Set_Password] = useState ('');
	const [Password_Confirmation, Set_Password_Confirmation] = useState ('');
	const [Phone_Number, Set_Phone_Number] = useState ('');
	const [Restaurant_Name, Set_Restaurant_Name] = useState ('');
	const [Step, Set_Step] = useState (1);
	const [User, Set_User] = useContext (User_Context);
	const [Username, Set_Username] = useState ('');
	const [Website, Set_Website] = useState ('');
	const Navigate = useNavigate ()

	const Go_Back_to_the_Previous_Step = () => Set_Step (Step - 1);

	const Proceed_to_the_Next_Step = () => Set_Step (Step + 1);

	const Regsiter = async () =>
	{
		const New_User = await API.Register ({Address, Branch, Email, Password, Phone_Number, Restaurant_Name, Username, Website});
		Set_User (New_User);
		if (New_User.Status === 201)
		{
			Navigate ('/dashboard');
		}
	}

	return (
		<div className='Registration'>
			<div className='Form_Container'>
				<div className='Steps'>
					<div className={'Step' + (Step >= 1 ? ' Active_Step' : '')}></div>
					<div className={'Step' + (Step >= 2 ? ' Active_Step' : '')}></div>
					<div className={'Step' + (Step >= 3 ? ' Active_Step' : '')}></div>
				</div>
				<div className='Registration_Header'>
					{Step !== 1 && <div className='Back_Button' onClick={Go_Back_to_the_Previous_Step}><Back_Icon fill='#4D4D4D' height='1.5rem'></Back_Icon><span>Back</span></div>}
					<div className='Current_Step'>Step {Step} of 3</div>
				</div>
				{Step === 1 ? 
					<>
						<Text_Input_Field Label='Username' Function={Set_Username} Type="text" Value={Username}></Text_Input_Field>
						<Text_Input_Field Label='Password' Function={Set_Password} Type="password" Value={Password}></Text_Input_Field>
						<Text_Input_Field Label='Confrim Password' Function={Set_Password_Confirmation} Purpose="Password" Type="password" Value={Password_Confirmation}></Text_Input_Field>
						<Text_Input_Field Label='Email' Function={Set_Email} Type="text" Value={Email}></Text_Input_Field>
						<Text_Input_Field Label='Phone Number' Function={Set_Phone_Number} Type="text" Value={Phone_Number}></Text_Input_Field>
						<Button Function={Proceed_to_the_Next_Step} Text="Next"></Button>
					</> : 
				null}
				{Step === 2 ? 
					<>
						<Text_Input_Field Label='Restaurant' Function={Set_Restaurant_Name} Type="text" Value={Restaurant_Name}></Text_Input_Field>
						<Text_Input_Field Label='Address' Function={Set_Address} Type="text" Value={Address}></Text_Input_Field>
						<Text_Input_Field Label='Branch' Function={Set_Branch} Type="text" Value={Branch}></Text_Input_Field>
						<Text_Input_Field Label='Website' Function={Set_Website} Type="text" Value={Website}></Text_Input_Field>					
						<Button Function={Proceed_to_the_Next_Step} Text="Next"></Button>
					</> : 
				null}
				{Step === 3 ? 
					<>
						<p>Your Plan: <strong>Trial</strong></p>
						<p>Total Due: <strong>AED 49</strong></p>
						<Button Function={Regsiter} Text="Confirm & Pay"></Button>
					</> : 
				null}
			</div>
		</div>
	);
}

export default Registration;