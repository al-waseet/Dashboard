import './Checkbox.css';

const Checkbox = ({Checked_Status, Color, Function, Label}) => (
	<div className='Checkbox_Container'>
		<input className='Checkbox' checked={Checked_Status} onChange={Function} style={{border: `2.5px solid ${Color}`, color: Color}} type='checkbox' value={Label} />
		<label className='Checkbox_Label' htmlFor={Label}><h3 style={{color: Color}}>{Label}</h3></label>
	</div>
)

export default Checkbox;