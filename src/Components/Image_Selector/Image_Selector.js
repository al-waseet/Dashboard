import Image_Button from '../Image_Button/Image_Button';
import './Image_Selector.css';

const Image_Selector = ({Classes, Current_Image, Function, ID}) =>
(
	<div className={'Image_Selector' + (Classes ? (' ' + Classes.join (' ')) : '')}>
		<img className='Image' src={Current_Image}></img>
        <Image_Button Function={Function} ID={ID}></Image_Button>
    </div>
)

export default Image_Selector;