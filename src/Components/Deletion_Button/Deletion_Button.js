import {ReactComponent as Close_Icon} from '../../Images/Close_Icon.svg';
import './Deletion_Button.css';

const Deletion_Button = ({Function, Placement_Inside_Status}) => <div className={'Deletion_Button ' + (Placement_Inside_Status ? 'Inside_Placement' : 'Corner_Placement')} onClick={Function}><Close_Icon className='Deletion_Button_Icon' fill='#4D4D4D'></Close_Icon></div>;

export default Deletion_Button;