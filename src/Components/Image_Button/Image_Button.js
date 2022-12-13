import {ReactComponent as Camera_Icon} from '../../Images/Camera_Icon.svg';
import './Image_Button.css';

const Image_Button = ({Function, ID}) => <><input accept="image/*" hidden id={'Icon_Selection_Button' + (ID ? ('_' + ID) : '')} onChange={Function}  type="file"></input><label className='Icon_Button' htmlFor={'Icon_Selection_Button' + (ID ? ('_' + ID) : '')}><Camera_Icon className='Icon_Selection_Button_Icon' fill='#8068A8'></Camera_Icon></label></>

export default Image_Button;