import {ReactComponent as Arrow_Down} from '../../Images/Arrow_Down.svg'
import './Banner.css';
import {Convert_Image_to_Base64} from '../../Helpers';
import Deletion_Button from '../Deletion_Button/Deletion_Button';
import Image_Button from '../Image_Button/Image_Button';
import { useEffect, useState } from "react";

const Banner = ({Category, Change_the_Banner_Image, Change_the_Banner_Name, Delete_the_Category, ID, Toggle, Toggle_Status}) =>
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
        const New_Image_in_Base64 = await Convert_Image_to_Base64 (New_Image);
        Set_Banner_Image (New_Image_in_Base64);
        Change_the_Banner_Image (New_Image_in_Base64, Category.ID);
    }

	return <div className='Banner' id={ID} style={{backgroundImage: `url(${Banner_Image})`}}>
		<Deletion_Button Function={Delete_the_Category} Placement_Inside_Status={true}></Deletion_Button>
		<input className='Banner_Name_Field' onChange={(Event) => Change_the_Banner_Name_Value (Event.target.value)} type='text' value={Banner_Name} />
		{!Toggle_Status && <div className='Category_Editing_Invitation'>Expand to Edit Items</div>}
		<div className='Expansion_Button_Container' onClick={Toggle}><Arrow_Down fill="#FFFFFF"></Arrow_Down></div>
		<Image_Button Function={(Event) => Change_the_Banner_Image_Value (Event.target.files [0])} ID={ID}></Image_Button>
	</div>
}

export default Banner;