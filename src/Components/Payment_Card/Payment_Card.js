import {ReactComponent as American_Express} from '../../Images/American_Express.svg';
import Deletion_Button from '../Deletion_Button/Deletion_Button';
import {ReactComponent as JCB} from '../../Images/JCB.svg';
import {ReactComponent as MasterCard} from '../../Images/MasterCard.svg';
import {ReactComponent as UnionPay} from '../../Images/UnionPay.svg';
import {ReactComponent as Visa} from '../../Images/Visa.svg';

import './Payment_Card.css';

const Icon_Table = 
{
    American_Express: <American_Express height='1.25rem'></American_Express>,
    JCB: <JCB height='1.25rem'></JCB>,
    MasterCard: <MasterCard height='1.25rem'></MasterCard>,
    UnionPay: <UnionPay height='1.25rem'></UnionPay>,
    Visa: <Visa height='1.25rem'></Visa>
}

const Payment_Card = ({Delete_the_Card, Last_4_Digits, Type}) => <div className='Payment_Card'><Deletion_Button Function={Delete_the_Card}></Deletion_Button><span className='Payment_Card_Icon'>{Icon_Table [Type]}</span><span className='Payment_Card_Description'>Card ending with {Last_4_Digits}</span></div>

export default Payment_Card;