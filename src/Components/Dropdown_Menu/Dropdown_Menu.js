import './Dropdown_Menu.css';

const Dropdown_Menu = ({Classes, Function, Label, Options, Value}) => (
	<div className={'Dropdown_Menu_Container' + (Classes ? (' ' + Classes.join (' ')) : '')}>
		<label className="Dropdown_Menu_Label">{Label}</label>
		<form className='Dropdown_Menu_Form'>
			<input className='Dropdown_Menu_Controller' type="checkbox" />
			<div className='Dropdown_Menu_Box'>
				<div className='Dropdown_Menu_Selected_Value'><span>Select POS</span></div>
				<div className='Dropdown_Menu_Arrow_Icon'></div>
			</div>
			<div className='Dropdown_Menu_Options'>
				{Options.map (Option => <div className="Dropdown_Menu_Option">
					<input className="Selection_Controller Top_Half" defaultChecked={Value === Option} name={Label.replace (' ', '_')} onChange={(Event) => Function (Event.target.value)} type="radio" value={Option} />
					<input className="Selection_Controller Bottom_Half" defaultChecked={Value === Option} name={Label.replace (' ', '_')} onChange={(Event) => Function (Event.target.value)} type="radio" value={Option} />
					<span className='Option_Label'>{Option}</span>
					<span className='Option_Value'>{Option}</span>
				</div>)}
				<div className='Option_Background'></div>
			</div>
		</form>
	</div>
)

export default Dropdown_Menu;