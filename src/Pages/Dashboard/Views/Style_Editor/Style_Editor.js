import {ReactComponent as Arrow_Down} from '../../../../Images/Arrow_Down.svg';
import Button from '../../../../Components/Button/Button';
import Cart_Icon from '../../../../Components/Cart_Icon/Cart_Icon';
import Checkbox from '../../../../Components/Checkbox/Checkbox';
import { Configuration } from '../../../../Configuration';
import Grid from '../../../../Components/Grid/Grid';
import { SketchPicker } from 'react-color';
import './Style_Editor.css';
import Quantity_Controller from '../../../../Components/Quantity_Controller/Quantity_Controller';
import { useEffect, useState } from 'react';

const Style_Editor = ({Restaurant, Set_Restaurant}) =>
{
	const [Colors, Set_Colors] = useState ({});
	const [Check_Mark, Set_Check_Mark] = useState (false);
	const [Current_Cart_Icon, Set_Current_Cart_Icon] = useState ('');

	const Change_the_Cart_Icon = New_Cart_Icon =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Cart_Icon = New_Cart_Icon;
		Set_Current_Cart_Icon (New_Cart_Icon);
		Set_Restaurant (Restaurant_Copy);
	}

	const Change_the_Color = (Element, Color) =>
	{
		const Colors_Copy = Object.assign ({}, Colors);
		Colors_Copy [Element] = Color;
		Set_Colors (Colors_Copy);
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Colors = Colors_Copy;
		Set_Restaurant (Restaurant_Copy);
	}

	useEffect (() =>
	{
		Set_Colors (Restaurant.Colors)
		Set_Current_Cart_Icon (Restaurant.Cart_Icon);
	}, []);

	return (
		<div className='Styling' key='Style_Edtior_Key'>
			<h2 className='Colors_Header'>Colors</h2>
			<div className='Colors'>
			{
				Object.keys (Colors).map (Element => 
					<div className='Color'>
						<label className='Style_Element_Color_Label'>{Element.replace ('_', ' ')}</label>
						<SketchPicker color={Colors [Element]} onChange={(Color) => Change_the_Color (Element, Color.hex)}></SketchPicker>
					</div>)
			}
			</div>
			<h2 className='Cart_Icons_Header'>Cart Icons</h2>
			<div className='Cart_Icons'>
				{[`${Configuration.COS_URL}/Images/Icons/Cart_1.svg`, `${Configuration.COS_URL}/Images/Icons/Cart_2.svg`, `${Configuration.COS_URL}/Images/Icons/Cart_3.svg`, `${Configuration.COS_URL}/Images/Icons/Cart_4.svg`].map (Icon => <Cart_Icon Cart_Icon_URL={Icon} Selection_Status={Icon === Current_Cart_Icon} Set_Cart_Icon_URL={Change_the_Cart_Icon}></Cart_Icon>)}
			</div>
			<h2 className='Preview_Header'>Preview</h2>
			<div className='UI_Elements' style={{backgroundColor: Colors.Background}}>
				<Grid>
					<h1 style={{color: Colors.Text}}>Header 1</h1>
					<h2 style={{color: Colors.Text}}>Header 2</h2>
					<h3 style={{color: Colors.Text}}>Header 3</h3>
					<p style={{color: Colors.Text}}>Text</p>
					<div className='Quantity_Controller_Container'>
						<Quantity_Controller Colors={Colors} Quantity={0}></Quantity_Controller>
					</div>
					<div className='Primary_Button_Container'>
						<Button Colors={Colors} Text='Primary'></Button>
					</div>
					<div className='Secondary_Button_Container'>
						<Button Colors={Colors} Secondary Text='Secondary'></Button>
					</div>
					<Checkbox Checked_Status={Check_Mark} Color={Colors.Button} Function={() => Set_Check_Mark (!Check_Mark)} Label='Sample Checkbox'></Checkbox>
					<div className='Arrow_Down_Container'>
						<Arrow_Down fill={Colors.Text}></Arrow_Down>
					</div>	
				</Grid>
				<div className='Floating_Action_Button' style={{backgroundColor: Colors.Button}}>
					<img alt='This is a Cart button, located near the bottom right corner of the screen.' className='Floating_Action_Button_Image' src={Current_Cart_Icon}></img>
				</div>
			</div>
		</div>
	)
}

export default Style_Editor