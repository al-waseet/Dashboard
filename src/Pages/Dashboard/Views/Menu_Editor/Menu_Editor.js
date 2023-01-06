import Addition_Button from '../../../../Components/Addition_Button/Addition_Button'
import Banner from '../../../../Components/Banner/Banner';
import Card from '../../../../Components/Card/Card';
import './Menu_Editor.css';
import Placeholder_Banner_Image from '../../../../Images/Placeholder_Banner_Image.jpg';
import Placeholder_Card_Image from '../../../../Images/Placeholder_Card_Image.jpg';
import { useEffect, useState } from 'react';

const Menu_Editor = ({Restaurant, Set_Restaurant}) => 
{
	const [Display_Statuses, Set_Display_Statuses] = useState ({});

	const Add_a_Category = () =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Categories.push ({Banner_Image: Placeholder_Banner_Image, ID: crypto.randomUUID (), Name: ''})
		Set_Restaurant (Restaurant_Copy);
	}

	const Add_an_Item = Menu_Item =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
        Menu_Item.File_Path = `/Images/${Restaurant.Name.replace (' ', '_')}/Menu/${Menu_Item.Name.replace (' ', '_')}.png`;
		Restaurant_Copy.Menu.push (Menu_Item);
		Set_Restaurant (Restaurant_Copy);
	}

	const Change_the_Banner_Image = (Banner_Image, ID) =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Categories.find (Category => Category.ID === ID).Banner_Image = Banner_Image;
		if (Restaurant_Copy.Categories.find (Category => Category.ID === ID).File_Path === '')
		{
			Restaurant_Copy.Categories.find (Category => Category.ID === ID).File_Path = `/Images/${Restaurant.Name}/${Restaurant_Copy.Categories.find (Category => Category.ID === ID).Name}.png`;
		}
		Set_Restaurant (Restaurant_Copy)
	}

	const Change_the_Banner_Name = (Name, ID) =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Categories.find (Category => Category.ID === ID).Name = Name;
		Set_Restaurant (Restaurant_Copy)
	}

	const Change_The_Order_of_the_Menu_Items = (Source_ID, Target_ID) =>
	{
		const Restaurant_Copy = structuredClone (Restaurant);
		const Source_Index = Restaurant.Menu.findIndex (Menu_Item => Menu_Item.ID === Source_ID);
		const Target_Index = Restaurant.Menu.findIndex (Menu_Item => Menu_Item.ID === Target_ID);
		Restaurant_Copy.Menu [Source_Index] = structuredClone (Restaurant.Menu [Target_Index]);
		Restaurant_Copy.Menu [Target_Index] = structuredClone (Restaurant.Menu [Source_Index]);
		Set_Restaurant (Restaurant_Copy);
	}

	const Delete_the_Category = Name =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Categories = Restaurant_Copy.Categories.filter (Category => Category.Name !== Name);
		Restaurant_Copy.Menu = Restaurant_Copy.Menu.filter (Menu_Item => Menu_Item.Category !== Name);
		Set_Restaurant (Restaurant_Copy);
	}
	
	const Delete_the_Item = ID =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Menu = Restaurant_Copy.Menu.filter (Menu_Item => Menu_Item.ID !== ID);
		Set_Restaurant (Restaurant_Copy);
	}

	const Save_the_Item = Updated_Menu_Item =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		if (Updated_Menu_Item.Image === '')
		{
			Updated_Menu_Item.File_Path = `/Images/${Restaurant.Name}/Menu/${Updated_Menu_Item.Name}.png`;
		}
		Restaurant_Copy.Menu [Restaurant_Copy.Menu.findIndex (Menu_Item => Menu_Item.ID === Updated_Menu_Item.ID)] = Updated_Menu_Item;
        Set_Restaurant (Restaurant_Copy);
	}

	const Toggle_the_Customization_Menu = Category =>
	{
		const New_Display_Statuses = Object.assign ({}, Display_Statuses);
		New_Display_Statuses [Category] = !New_Display_Statuses [Category];
		Set_Display_Statuses (New_Display_Statuses);
	}

	useEffect (() => 
	{
		Set_Display_Statuses (Restaurant.Categories.map (Category => Category.Name).reduce ((Category_Name, Index) => (Category_Name [Index] = false, Category_Name), {}));
	}, [])

	const Drag = Event =>
	{
		while (!Event.target.classList.contains ('Card'))
		{
			Event.target = Event.target.parentElement;
		}
		Event.dataTransfer.setData ("text", Event.target.id);
	}
	
	const Drop = Event => 
	{
		Event.preventDefault ();
		while (!Event.target.classList.contains ('Card'))
		{
			Event.target = Event.target.parentElement;
		}
		Change_The_Order_of_the_Menu_Items (Event.dataTransfer.getData ("text"), Event.target.id);
	}

	return (
		<div className='Menu' key='Menu_Edtior_Key'>
			{
				Restaurant.Categories.map (Category =>
					<div className='Category'>
						<Banner Category={Category} Change_the_Banner_Image={Change_the_Banner_Image} Change_the_Banner_Name={Change_the_Banner_Name} Delete_the_Category={() => Delete_the_Category (Category.Name)} Toggle={() => Toggle_the_Customization_Menu (Category.Name)} Toggle_Status={Display_Statuses [Category.Name]}></Banner>
						{Display_Statuses [Category.Name] && Restaurant.Menu.filter (Menu_Item => Menu_Item.Category === Category.Name).map (Menu_Item => <Card Addons={Menu_Item.Addons} Category={Menu_Item.Category} Currency={Restaurant.Currency} Delete_the_Item={Delete_the_Item} Description={Menu_Item.Description} Drag={Drag} Drop={Drop} ID={Menu_Item.ID} Name={Menu_Item.Name} New_Item_Status={false} Photo={Menu_Item.Image} Price={Menu_Item.Price} Save_the_Item={Save_the_Item}></Card>)}
						{Display_Statuses [Category.Name] && <Card Add_an_Item={Add_an_Item} Addons={[]} Category={Category.Name} Currency={Restaurant.Currency} Photo={Placeholder_Card_Image} New_Item_Status={true}></Card>}
					</div>)
			}
			<Addition_Button Function={Add_a_Category}></Addition_Button>
		</div>
	);
}

export default Menu_Editor;