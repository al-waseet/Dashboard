import './Addition_Button.css';
import {ReactComponent as Addition_Icon} from '../../Images/Addition_Icon.svg';

const Addition_Button = ({Function}) => <div className='Addition_Icon_Container' onClick={Function}><Addition_Icon fill='#8068A8'></Addition_Icon></div>;

export default Addition_Button;