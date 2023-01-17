import {ReactComponent as Error_Icon} from '../../Images/Error_Icon.svg';
import './Text_Input_Field.css';

const Text_Input_Field = ({Bold_Status, Color, Disabled_Status, Error_Message, Error_Status, Function, Label, Set_Error_Status, Type, Value}) => 
<div className="Text_Input">
    {Label && <label className='Text_Input_Label' style={{color: Color}}>{Label}</label>}
    {Error_Status && <h5 className='Error_Message'><Error_Icon className='Error_Icon' fill='#AC0202'></Error_Icon>{Error_Message}</h5>}
    <input className={`Text_Input_Field ${Error_Status ? 'Text_Input_Error' : null}`} disabled={Disabled_Status} onChange={(Event) => Function (Event.target.value)} onClick={() => Set_Error_Status (false)} style={{borderColor: Color, color: Color, fontWeight: Bold_Status ? 'bold' : 'normal'}} type={Type} value={Value} />
</div>

export default Text_Input_Field;