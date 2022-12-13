import Button from '../Button/Button';
import Deletion_Button from '../Deletion_Button/Deletion_Button'
import Edit_Button from '../Edit_Button/Edit_Button';
import './Manager_Card.css';

const Manager_Card = ({Delete_the_User, Edit_the_User, Email, Username}) =>
(
	<div className='Manager_Card'>
        <Deletion_Button Function={Delete_the_User} Placement_Inside_Status={true}></Deletion_Button>
		<div className='Manager_Credentials_Container'>
			<label className='Manager_Credential_Label'>Username</label>
			<p className='Manager_Credential'>{Username}</p>
			<label className='Manager_Credential_Label'>Email</label>
			<p className='Manager_Credential'>{Email}</p>
		</div>
        <Edit_Button Function={Edit_the_User}></Edit_Button>
	</div>
)

export default Manager_Card;