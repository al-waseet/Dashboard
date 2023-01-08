import Account_Editor from './Views/Account_Editor/Account_Editor';
import API from '../../API';
import Button from '../../Components/Button/Button';
import { Configuration } from '../../Configuration';
import './Dashboard.css';
import Header from '../../Components/Header/Header';
import Menu_Editor from './Views/Menu_Editor/Menu_Editor';
import POS_Editor from './Views/POS_Editor/POS_Editor'
import Restaurant_Editor from './Views/Restaurant_Editor/Restaurant_Editor';
import Spinner from '../../Components/Spinner/Spinner';
import Style_Editor from './Views/Style_Editor/Style_Editor';
import Tab from '../../Components/Tab/Tab';
import Tables_and_QR_Editor from './Views/Tables_and_QR_Editor/Tables_and_QR_Editor';
import { usePOSFetch } from '../../Hooks/usePOSFetch';
import { useContext, useEffect, useState } from 'react';
import { User_Context } from '../../Contexts/User';
import View from '../../Components/View/View';

const Dashboard = () => 
{
	const [Navigation_Panel_Display_Status, Set_Navigation_Panel_Display_Status] = useState (false);
	const [User, Set_User] = useContext (User_Context);
	const [Active_Tab, Set_Active_Tab] = useState ('');

	useEffect (() =>
	{
		if (User !== undefined)
		{
			if (User.Type === 'Owner')
			{
				Set_Active_Tab ('Restaurant_Editor');
			}
			else
			{
				Set_Active_Tab ('Account_Editor');
			}
		}
	}, [])

	const POS = usePOSFetch ();
	const [View_Title, Set_View_Title] = useState ('Restaurant');

	const Log_Out = () =>
	{
		Set_User (undefined);
		window.location.href = 'https://alwaseet.me';
	}

	const Preview_the_Changes = () =>
	{
		const Restaurant_Preview_Channel = new BroadcastChannel ('Restaurant_Preview');
		Restaurant_Preview_Channel.postMessage (JSON.stringify (User.Restaurant));
		window.open (`${Configuration.Ordering_Application_URL}/preview`, '_blank');
	}

	const Save_the_Changes = () =>
	{
        const Pure_User = structuredClone (User)
        delete Pure_User.Restaurant;
        delete Pure_User.Token;
        delete Pure_User.Users;
		API.Update_the_Restaurant (User.Restaurant);
        //API.Update_the_Users (User.Users);
		API.Update_the_User (Pure_User);
		
	}

	const Set_Restaurant = (Restaurant) =>
	{
		const User_Copy = Object.assign ({}, User);
		User_Copy.Restaurant = Restaurant;
		Set_User (User_Copy);
	}

	const Set_Users = (Users) =>
	{
		const User_Copy = Object.assign ({}, User);
		User_Copy.Users = Users;
		Set_User (User_Copy);
	}

	return User === undefined ? 
		<div className='Loading_Page'><Spinner></Spinner></div> 
		: 
		<div className='Dashboard' key='Dashboard_Key'>
			<nav className={Navigation_Panel_Display_Status ? 'Mobile_Navigation_Panel' : 'Navigation_Panel'}>
				{User.Type === 'Owner' && <Tab Active_Tab={Active_Tab} ID='Restaurant_Editor' Set_Active_Tab={Set_Active_Tab} Set_View_Title={Set_View_Title} Title='Restaurant'></Tab>}
				<Tab Active_Tab={Active_Tab} ID='Account_Editor' Set_Active_Tab={Set_Active_Tab} Set_View_Title={Set_View_Title} Title='Account'></Tab>
				<Tab Active_Tab={Active_Tab} ID='Menu_Editor' Set_Active_Tab={Set_Active_Tab} Set_View_Title={Set_View_Title} Title='Menu'></Tab>
				{User.Type === 'Owner' && <Tab Active_Tab={Active_Tab} ID='Design_Editor' Set_Active_Tab={Set_Active_Tab} Set_View_Title={Set_View_Title} Title='Design'></Tab>}
				<Tab Active_Tab={Active_Tab} ID='Tables_and_QR_Editor' Set_Active_Tab={Set_Active_Tab} Set_View_Title={Set_View_Title} Title='Tables & QR'></Tab>
				{User.Type === 'Owner' && <Tab Active_Tab={Active_Tab} ID='POS_Editor' Set_Active_Tab={Set_Active_Tab} Set_View_Title={Set_View_Title} Title='POS'></Tab>}
				<p className='Copyright'>© {new Date ().getFullYear ()} al waseet</p>
			</nav>
			<div className={'View_Section' + (Navigation_Panel_Display_Status ? ' Blurry_Overlay' : '')}>
				<Header Log_Out={Log_Out} Navigation_Panel_Display_Status={Navigation_Panel_Display_Status} Profile_Picture={User.Avatar === '' ? null : User.Avatar} Section={View_Title} Set_Active_Tab={() => Set_Active_Tab ('Account_Editor')} Set_Navigation_Panel_Display_Status={Set_Navigation_Panel_Display_Status} Set_View_Title={() => Set_View_Title ('Account')}></Header>
				{User.Type === 'Owner' && <View Active_Tab={Active_Tab} ID='Restaurant_Editor'>
					<Restaurant_Editor Restaurant={User.Restaurant} Set_Restaurant={Set_Restaurant} Set_Users={Set_Users} Users={User.Users}></Restaurant_Editor>
				</View>}
				<View Active_Tab={Active_Tab} ID='Account_Editor'>
					<Account_Editor Restaurant_Name={User.Restaurant.Name} Set_User={Set_User} User={User}></Account_Editor>
				</View>
				<View Active_Tab={Active_Tab} ID='Menu_Editor'>
					<Menu_Editor Restaurant={User.Restaurant} Set_Restaurant={Set_Restaurant}></Menu_Editor>
				</View>
				{User.Type === 'Owner' && <View Active_Tab={Active_Tab} ID='Design_Editor'>
					<Style_Editor Restaurant={User.Restaurant} Set_Restaurant={Set_Restaurant}></Style_Editor>
				</View>}
				<View Active_Tab={Active_Tab} ID='Tables_and_QR_Editor'>
					<Tables_and_QR_Editor Restaurant={User.Restaurant} Set_Restaurant={Set_Restaurant}></Tables_and_QR_Editor>
				</View>
				{User.Type === 'Owner' && <View Active_Tab={Active_Tab} ID='POS_Editor'>
					<POS_Editor POS={POS} Restaurant={User.Restaurant} Set_Restaurant={Set_Restaurant}></POS_Editor>
				</View>}
				<div className='Dashboard_Buttons'>
					<Button Function={Save_the_Changes} Text="Save"></Button>
					<Button Function={Preview_the_Changes} Secondary Text="Preview"></Button>
				</div>
			</div>
		</div>;
}

export default Dashboard;