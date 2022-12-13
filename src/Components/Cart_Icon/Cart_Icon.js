import './Cart_Icon.css';

const Cart_Icon = ({Cart_Icon_URL, Selection_Status, Set_Cart_Icon_URL}) => <div className={'Cart_Icon' + (Selection_Status ? ' Active_Cart_Icon' : '')} onClick={() => Set_Cart_Icon_URL (Cart_Icon_URL)}><img alt='This is a Cart button, located near the bottom right corner of the screen.' className='Cart_Icon_Image' src={Cart_Icon_URL}></img></div>

export default Cart_Icon;