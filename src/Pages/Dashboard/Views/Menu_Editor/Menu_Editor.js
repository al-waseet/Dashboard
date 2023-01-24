import Addition_Button from '../../../../Components/Addition_Button/Addition_Button'
import Banner from '../../../../Components/Banner/Banner';
import Card from '../../../../Components/Card/Card';
import { Get_the_File_Extension } from '../../../../Helpers';
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
		Menu_Item.File_Path = `/Images/${Restaurant.Name.replace (' ', '_')}/Menu/${Menu_Item.Name.replace (' ', '_')}${Get_the_File_Extension (Menu_Item.Image.type)}`;
		Restaurant_Copy.Menu.push (Menu_Item);
		Set_Restaurant (Restaurant_Copy);
	}

	const Change_the_Banner_Image = (Banner_Image, ID) =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Categories.find (Category => Category.ID === ID).Banner_Image = Banner_Image;
		Restaurant_Copy.Categories.find (Category => Category.ID === ID).File_Path = `/Images/${Restaurant.Name.replace (' ', '_')}/Menu/${Restaurant_Copy.Categories.find (Category => Category.ID === ID).Name.replace (' ', '_')}${Get_the_File_Extension (Banner_Image.type)}`;
		Set_Restaurant (Restaurant_Copy)
	}

	const Change_the_Banner_Name = (Name, ID) =>
	{
		const Restaurant_Copy = Object.assign ({}, Restaurant);
		Restaurant_Copy.Categories.find (Category => Category.ID === ID).Name = Name;
		Set_Restaurant (Restaurant_Copy)
	}

    const Change_The_Order_of_the_Categories = (Source_ID, Target_ID) =>
	{
        console.log (Source_ID);
        console.log (Target_ID);
		const Restaurant_Copy = structuredClone (Restaurant);
		const Source_Index = Restaurant.Categories.findIndex (Category => Category.ID === Source_ID);
		const Target_Index = Restaurant.Categories.findIndex (Category => Category.ID === Target_ID);
		Restaurant_Copy.Categories [Source_Index] = structuredClone (Restaurant.Categories [Target_Index]);
		Restaurant_Copy.Categories [Target_Index] = structuredClone (Restaurant.Categories [Source_Index]);
		Set_Restaurant (Restaurant_Copy);
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
		Updated_Menu_Item.File_Path = `/Images/${Restaurant.Name.replace (' ', '_')}/Menu/${Updated_Menu_Item.Name.replace (' ', '_')}${Get_the_File_Extension (Updated_Menu_Item.Image.type)}`;
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
		console.log (Restaurant.Menu);
		Set_Display_Statuses (Restaurant.Categories.map (Category => Category.ID).reduce ((Category_ID, Index) => (Category_ID [Index] = false, Category_ID), {}));
	}, [])

    const Drag_the_Banner = Event =>
	{
		while (!Event.target.classList.contains ('Banner'))
		{
			Event.target = Event.target.parentElement;
		}
		Event.dataTransfer.setData ("Banner", Event.target.id);
	}

	const Drag_the_Card = Event =>
	{
		while (!Event.target.classList.contains ('Card'))
		{
			Event.target = Event.target.parentElement;
		}
		Event.dataTransfer.setData ("Card", Event.target.id);
	}

    const Drop_the_Banner = Event => 
	{
		Event.preventDefault ();
		while (!Event.target.classList.contains ('Banner'))
		{
			Event.target = Event.target.parentElement;
		}
		Change_The_Order_of_the_Categories (Event.dataTransfer.getData ("Banner"), Event.target.id);
	}
	
	const Drop_the_Card = Event => 
	{
		Event.preventDefault ();
		while (!Event.target.classList.contains ('Card'))
		{
			Event.target = Event.target.parentElement;
		}
		Change_The_Order_of_the_Menu_Items (Event.dataTransfer.getData ("Card"), Event.target.id);
	}

	return (
		<div className='Menu' key='Menu_Edtior_Key'>
			{
				Restaurant.Categories.map (Category =>
					<div className='Category'>
						<Banner Category={Category} Change_the_Banner_Image={Change_the_Banner_Image} Change_the_Banner_Name={Change_the_Banner_Name} Drag={Drag_the_Banner} Drop={Drop_the_Banner} Delete_the_Category={() => Delete_the_Category (Category.Name)} ID={Category.ID} key={`${Category.Name}_Key`} New_Category_Status={!Category.Name} Toggle={() => Toggle_the_Customization_Menu (Category.ID)} Toggle_Status={Display_Statuses [Category.ID]}></Banner>
						{Display_Statuses [Category.ID] && Restaurant.Menu.filter (Menu_Item => Menu_Item.Category === Category.ID).map (Menu_Item => <Card Addons={Menu_Item.Addons} Category={Menu_Item.Category} Currency={Restaurant.Currency} Delete_the_Item={Delete_the_Item} Description={Menu_Item.Description} Drag={Drag_the_Card} Drop={Drop_the_Card} ID={Menu_Item.ID} key={`${Menu_Item.Name}_Key`} Name={Menu_Item.Name} New_Item_Status={false} Photo={Menu_Item.Image} Price={Menu_Item.Price} Save_the_Item={Save_the_Item}></Card>)}
						{Display_Statuses [Category.ID] && <Card Add_an_Item={Add_an_Item} Addons={[]} Category={Category.Name} Currency={Restaurant.Currency} Photo={Placeholder_Card_Image} New_Item_Status={true}></Card>}
					</div>)
			}
			<Addition_Button Function={Add_a_Category}></Addition_Button>
		</div>
	);
}

export default Menu_Editor;