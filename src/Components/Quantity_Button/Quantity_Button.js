import './Quantity_Button.css';

const Quantity_Button = ({Color, Function, Positive}) => <button className='Quantity_Button' onClick={Function} style={{border: `2.5px solid ${Color}`, color: Color}}>{Positive ? '+' : '-'}</button>;

export default Quantity_Button;