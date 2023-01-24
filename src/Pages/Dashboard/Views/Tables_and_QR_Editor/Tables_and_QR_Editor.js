import Addition_Button from '../../../../Components/Addition_Button/Addition_Button';
import QR_Code from '../../../../Components/QR_Code/QR_Code';
import './Tables_and_QR_Editor.css';

const Tables_and_QR_Editor = ({Restaurant, Set_Restaurant}) =>
{
	const Add_a_Table = () =>
	{
		const New_Table = { ID: crypto.randomUUID (), Number: Restaurant.Tables.length + 1 }
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Tables = [...Restaurant_Copy.Tables, New_Table]
		Set_Restaurant (Restaurant_Copy);
	}

	const Delete_the_Table = (Table_ID) => 
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Tables = Restaurant_Copy.Tables.filter (Table => Table.ID !== Table_ID);
		Set_Restaurant (Restaurant_Copy);
	}

	return (
		<div className='Tables_and_QR_Editor' key='Tables_and_QR_Editor_Key'>
			<div className='Tables'>
				{Restaurant.Tables.map (Table => <QR_Code Delete_the_Table={() => Delete_the_Table (Table.ID)} Information={{Restaurant_ID: Restaurant._id, Table_ID: Table.ID, Table_Number: Table.Number}}></QR_Code>)}
				<Addition_Button Color='#8068A8' Function={Add_a_Table}></Addition_Button>
			</div>
		</div>
	)
}

export default Tables_and_QR_Editor