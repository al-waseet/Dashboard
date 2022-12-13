import Button from '../Button/Button';
import './Payment_Card_Editor.css';
import Text_Input_Field from '../Text_Input_Field/Text_Input_Field';
import { useState } from 'react';

const Payment_Card_Editor = ({Set_Card_Creation_Mode, Set_User, User}) =>
{
	const [Card_Number, Set_Card_Number] = useState ('');
	const [CVC, Set_CVC] = useState (0);
	const [Expiry_Month, Set_Expiry_Month] = useState (0);
	const [Expiry_Year, Set_Expiry_Year] = useState (0);
	const [Name, Set_Name] = useState ('');

	const Add_the_Card = () =>
	{
		const User_Copy = Object.assign ({}, User);
		User_Copy.Payment_Methods = [...User_Copy.Payment_Methods, {Card: Determine_Card_Type (Card_Number), Number: Card_Number, Expiration_Month: Expiry_Month, Expiration_Year: Expiry_Year, Card_Holder:Name, CVC: CVC}];
		Set_User (User_Copy);
		Set_Card_Creation_Mode (false);
	}

	const Determine_Card_Type = (Card_Number) =>
	{
		const American_Express_Regular_Expression = new RegExp ('^3[47][0-9]{0,}$'); // 34, 37
		const JCB_Regular_Expression = new RegExp ('^(?:2131|1800|35)[0-9]{0,}$'); // 2131, 1800, 35 (3528-3589)
		const MasterCard_Regular_Expression = new RegExp ('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$'); // 2221-2720, 51-55
		const Visa_Regular_Expression = new RegExp ('^4[0-9]{0,}$'); // 4
		/*
		Diners_Regular_Expression = new RegExp ('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'); // 300-305, 309, 36, 38-39
		Maestro_Regular_Expression = new RegExp ('^(5[06789]|6)[0-9]{0,}$'); // always growing in the range: 60-69, started with / not something else, but starting 5 must be encoded as mastercard anyway
		Discover_Regular_Expression = new RegExp ('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$'); // 6011, 622126-622925, 644-649, 65
		*/
		if (Card_Number.match (American_Express_Regular_Expression))
		{
			return 'American_Express';
		}
		if (Card_Number.match (JCB_Regular_Expression))
		{
			return 'JCB';
		}
		if (Card_Number.match (MasterCard_Regular_Expression))
		{
			return 'MasterCard';
		}
		if (Card_Number.match (Visa_Regular_Expression))
		{
			return 'Visa';
		}
		else
		{
			return 'UnionPay';
		}
	}

	return (
		<div className='Payment_Card_Editor'>
			<Text_Input_Field Function={Set_Card_Number} Label='Card Number' Type='text'></Text_Input_Field>
			<Text_Input_Field Function={Set_Name} Label='Cardholder Name' Type='text'></Text_Input_Field>
			<div className='Numerical_Fields'>
				<div className='Expiry_Date'>
					<Text_Input_Field Function={Set_Expiry_Month} Label='MM' Type='text'></Text_Input_Field>
					<span>/</span>
					<Text_Input_Field Function={Set_Expiry_Year} Label='YY' Type='text'></Text_Input_Field>
				</div>
				<Text_Input_Field Function={Set_CVC} Label='CVC' Type='password'></Text_Input_Field>
			</div>
			<Button Function={Add_the_Card} Text='Add the Card'></Button>
		</div>
	)
}

export default Payment_Card_Editor;