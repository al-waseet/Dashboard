import {ReactComponent as Arrow_Down} from '../../Images/Arrow_Down.svg'
import './Banner.css';
import Deletion_Button from '../Deletion_Button/Deletion_Button';
import Image_Button from '../Image_Button/Image_Button';
import Text_Input_Field from '../Text_Input_Field/Text_Input_Field';
import { useEffect, useState } from "react";

const Banner = ({Category, Change_the_Banner_Image, Change_the_Banner_Name, Delete_the_Category, Drag, Drop, ID, New_Category_Status, Toggle, Toggle_Status}) =>
{
	const [Banner_Image, Set_Banner_Image] = useState ('');
	const [Banner_Name, Set_Banner_Name] = useState ('');

	useEffect (() =>
	{
		Set_Banner_Image (Category.Banner_Image);
		Set_Banner_Name (Category.Name);
	}, [])

	const Change_the_Banner_Name_Value = New_Name =>
	{
		Set_Banner_Name (New_Name);
		Change_the_Banner_Name (New_Name, Category.ID);
	}

	const Change_the_Banner_Image_Value = async New_Image =>
	{
		New_Image = URL.createObjectURL (New_Image);
		Set_Banner_Image (New_Image);
		Change_the_Banner_Image (New_Image, Category.ID);
	}

	return <div className='Banner' draggable={!New_Category_Status} id={ID} onDragStart={New_Category_Status ? null : (Event) => Drag (Event)} onDragOver={New_Category_Status ? null : (Event) => Event.preventDefault ()} onDrop={New_Category_Status ? null : (Event) => Drop (Event)} style={{backgroundImage: `url(${Banner_Image})`}}>
		<Deletion_Button Function={Delete_the_Category} Placement_Inside_Status={true}></Deletion_Button>
		<Text_Input_Field Bold_Status={true} Color='#FFFFFF' Function={Change_the_Banner_Name_Value} Type='text' Value={Banner_Name}></Text_Input_Field>
		{!Toggle_Status && <div className='Category_Editing_Invitation'>Expand to Edit Items</div>}
		<div className='Expansion_Button_Container' onClick={Toggle}><Arrow_Down fill="#FFFFFF"></Arrow_Down></div>
		<Image_Button Function={(Event) => Change_the_Banner_Image_Value (Event.target.files [0])} ID={ID}></Image_Button>
	</div>
}

export default Banner;