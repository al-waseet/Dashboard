import './Text_Input_Field.css';

const Text_Input_Field = ({Bold_Status, Color, Disabled_Status, Function, Label, Type, Value}) => <div className="Text_Input">{Label && <label className="Text_Input_Label" style={{color: Color}}>{Label}</label>}<input className='Text_Input_Field' disabled={Disabled_Status} onChange={(Event) => Function (Event.target.value)} style={{borderColor: Color, color: Color, fontWeight: Bold_Status ? 'bold' : 'normal', marginTop: Label ? '1rem' : 0}} type={Type} value={Value} /></div>

export default Text_Input_Field;