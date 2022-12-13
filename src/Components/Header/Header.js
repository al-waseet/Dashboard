import Account_Button from '../Account_Button/Account_Button';
import {ReactComponent as Hamburger_Icon} from '../../Images/Hamburger_Icon.svg';
import './Header.css';

const Header = ({Log_Out, Navigation_Panel_Display_Status, Profile_Picture, Section, Set_Active_Tab, Set_Navigation_Panel_Display_Status, Set_View_Title}) => <header><div className='Hamburger_Menu' onClick={() => Set_Navigation_Panel_Display_Status (!Navigation_Panel_Display_Status)}><Hamburger_Icon fill='#4D4D4D'></Hamburger_Icon></div><h1>{Section}</h1><Account_Button Log_Out={Log_Out} Profile_Picture={Profile_Picture} Set_Active_Tab={Set_Active_Tab} Set_View_Title={Set_View_Title}></Account_Button></header>

export default Header;