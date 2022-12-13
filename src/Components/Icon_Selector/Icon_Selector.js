import {ReactComponent as Account_Icon} from '../../Images/Account_Icon.svg';
import './Icon_Selector.css';
import Image_Button from '../Image_Button/Image_Button';

const Icon_Selector = ({Classes, Current_Image, Function, ID}) =>
(
	<div className={'Icon_Selector' + (Classes ? (' ' + Classes.join (' ')) : '')}>
		{Current_Image !== '' ? <img className='Icon' src={Current_Image}></img> : <Account_Icon className='Avatar Account_Icon' fill='#8068A8'></Account_Icon>}
        <Image_Button Function={Function} ID={ID}></Image_Button>
    </div>
)

export default Icon_Selector;