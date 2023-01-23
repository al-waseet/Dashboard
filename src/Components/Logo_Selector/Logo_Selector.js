import Image_Button from '../Image_Button/Image_Button';
import './Logo_Selector.css';

const Logo_Selector = ({Current_Image, Function, ID}) =>
(
	<div className='Logo_Selector'>
		<img alt='Your Logo goes Here' className='Logo' src={Current_Image}></img>
		<Image_Button Function={Function} ID={ID}></Image_Button>
	</div>
)

export default Logo_Selector;