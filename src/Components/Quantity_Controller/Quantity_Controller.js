import Quantity_Button from '../Quantity_Button/Quantity_Button'
import './Quantity_Controller.css';

const Quantity_Controller = ({Colors, Decrementing_Function, Incrementing_Function, Quantity}) => (
	<div className='Quantity_Controller'>
		<Quantity_Button Color={Colors.Button} Function={Decrementing_Function}></Quantity_Button>
		<h3 className='Quantity' style={{color: Colors.Text}}>{Quantity}</h3>
		<Quantity_Button Color={Colors.Button} Function={Incrementing_Function} Positive={true}></Quantity_Button>
	</div>
)

export default Quantity_Controller;