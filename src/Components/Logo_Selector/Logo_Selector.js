import {ReactComponent as Camera_Icon} from '../../Images/Camera_Icon.svg';
import './Logo_Selector.css';

const Logo_Selector = ({Current_Image, Function}) =>
(
	<div className='Logo_Selector'>
		<img alt='Your Logo goes Here' className='Logo' src={Current_Image}></img>
		<input accept=".jpg, .jpeg, image/png, image/svg+xml" hidden id='Logo_Selection_Button' onChange={Function} type="file"></input>
		<label className='Image_Selection_Button' htmlFor='Logo_Selection_Button'><Camera_Icon className='Image_Selection_Button_Icon' fill='#8068A8'></Camera_Icon></label>
	</div>
)

export default Logo_Selector;