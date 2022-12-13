import './Edit_Button.css';
import {ReactComponent as Pencil_Icon} from '../../Images/Pencil_Icon.svg'

const Edit_Button = ({Function}) => <div className='Edit_Button' onClick={Function}><Pencil_Icon className='Edit_Button_Icon' fill='#8068A8'></Pencil_Icon></div>;

export default Edit_Button;