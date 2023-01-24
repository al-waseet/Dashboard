import Addon from '../Addon/Addon';
import Button from '../Button/Button';
import './Card.css';
import Checkbox from '../Checkbox/Checkbox';
import Deletion_Button from '../Deletion_Button/Deletion_Button';
import Image_Selector from '../Image_Selector/Image_Selector';
import Text_Area from '../Text_Area/Text_Area';
import Text_Input_Field from '../Text_Input_Field/Text_Input_Field';
import {useEffect, useState} from 'react';

const Card = ({Add_an_Item, Addons, Category, Currency, Delete_the_Item, Description, Drag, Drop, ID, Name, New_Item_Status, Photo, Price, Save_the_Item}) =>
{
	const [Addons_Enablement_Status, Set_Addons_Enablement_Status] = useState (false);
	const [Card_Addons, Set_Card_Addons] = useState ([]);
	const [Card_Category, Set_Card_Category] = useState ('');
	const [Card_Description, Set_Card_Description] = useState ('');
	const [Card_ID, Set_Card_ID] = useState ('');
	const [Card_Name, Set_Card_Name] = useState ('');
	const [Card_Photo, Set_Card_Photo] = useState ('');
	const [Card_Price, Set_Card_Price] = useState (0);
	const [Side_Dishes_Enablement_Status, Set_Side_Dishes_Enablement_Status] = useState (false);

	useEffect (() =>
	{
		Set_Addons_Enablement_Status (Addons.length > 0 ? Addons.filter (Card_Addon => Card_Addon.Countable === false).length > 0 : false);
		Set_Card_Addons (Addons);
		Set_Card_Category (Category);
		Set_Card_Description (Description);
		Set_Card_ID (ID !== undefined ? ID : crypto.randomUUID ());
		Set_Card_Name (Name);
		Set_Card_Photo (Photo);
		Set_Card_Price (Price);
		Set_Side_Dishes_Enablement_Status (Addons.length > 0 ? Addons.filter (Card_Addon => Card_Addon.Countable === true).length > 0 : false);
	}, []);

	const Add_an_Addon = Addon =>
	{
		const Addons_Copy = [...Card_Addons];
		Addons_Copy.push (Addon);
		Set_Card_Addons (Addons_Copy);
	}

	const Change_the_Photo = async New_Photo => Set_Card_Photo (URL.createObjectURL (New_Photo));

	const Create_an_Item = () =>
	{
		const New_Menu_Item = 
		{
			Addons: Card_Addons,
			Category: Card_Category,
			Description: Card_Description,
			ID: Card_ID,
			Image: Card_Photo,
			Name: Card_Name,
			Price: Card_Price
		}
		Add_an_Item (New_Menu_Item);
		Set_Addons_Enablement_Status (false);
		Set_Card_Addons ([]);
		Set_Card_Category ('');
		Set_Card_Description ('');
		Set_Card_ID (crypto.randomUUID ());
		Set_Card_Name ('');
		Set_Card_Photo (Photo);
		Set_Card_Price (0);
		Set_Side_Dishes_Enablement_Status (false);
	}

	const Delete_the_Addon = ID =>
	{
		const Addons_Copy = [...Card_Addons].filter (Card_Addon => Card_Addon.ID !== ID);
		Set_Card_Addons (Addons_Copy);
		Set_Addons_Enablement_Status (Addons_Copy.length > 0 ? Addons.filter (Card_Addon => Card_Addon.Countable === false).length > 0 : false);
		Set_Side_Dishes_Enablement_Status (Addons_Copy.length > 0 ? Addons.filter (Card_Addon => Card_Addon.Countable === true).length > 0 : false);
	}

	const Update_the_Addon_Name = (ID, New_Name) =>
	{
		const Addons_Copy = [...Card_Addons];
		Addons_Copy [Addons_Copy.findIndex (Card_Addon => Card_Addon.ID === ID)].Name = New_Name;
		Set_Card_Addons (Addons_Copy);
	}

	const Update_the_Addon_Price = (ID, New_Price) =>
	{
		const Addons_Copy = [...Card_Addons];
		Addons_Copy [Addons_Copy.findIndex (Card_Addon => Card_Addon.ID === ID)].Price = New_Price;
		Set_Card_Addons (Addons_Copy);
	}

	const Update_the_Item = () =>
	{
		const Updated_Menu_Item = 
		{
			Addons: Card_Addons,
			Category: Card_Category,
			Description: Card_Description,
			ID: Card_ID,
			Image: Card_Photo,
			Name: Card_Name,
			Price: Card_Price
		}
		Save_the_Item (Updated_Menu_Item);
	}

	return <div className='Card' draggable={!New_Item_Status} id={Card_ID} onDragStart={New_Item_Status ? null : (Event) => Drag (Event)} onDragOver={New_Item_Status ? null : (Event) => Event.preventDefault ()} onDrop={New_Item_Status ? null : (Event) => Drop (Event)}>
		{!New_Item_Status && <Deletion_Button Function={() => Delete_the_Item (ID)} Placement_Inside_Status={true}></Deletion_Button>}
		<div className='Card_Controls'>
			<div className='Basic_Information'>
				<Image_Selector Classes={['Card_Image_Container']} Current_Image={Card_Photo} Function={(Event) => Change_the_Photo (Event.target.files [0])} ID={Card_ID}></Image_Selector>
				<div className='Card_Information'>
					<Text_Input_Field Bold_Status Function={Set_Card_Name} Label='Dish' Purpose='Name' Type='text' Value={Card_Name}></Text_Input_Field>
					<Text_Input_Field Bold_Status Function={Set_Card_Price} Label='Price' Purpose='Name' Type='number' Value={Card_Price}></Text_Input_Field>
				</div>
				<Text_Area Function={Set_Card_Description} Value={Card_Description}></Text_Area>
			</div>
			<div className='Customization_Information'>
				<div className='Customization_Information_Column'>
					<Checkbox Checked_Status={Addons_Enablement_Status} Color='#8068A8' Function={() => Set_Addons_Enablement_Status (!Addons_Enablement_Status)} Label='Add-ons'></Checkbox>
					{Addons_Enablement_Status && Card_Addons.filter (Card_Addon => Card_Addon.Countable === false).map (Card_Addon => <Addon Currency={Currency} Delete_the_Addon={Delete_the_Addon} ID={Card_Addon.ID} Name={Card_Addon.Name} Price={Card_Addon.Price} Update_the_Addon_Name={Update_the_Addon_Name} Update_the_Addon_Price={Update_the_Addon_Price}></Addon>)}
					{Addons_Enablement_Status && <Addon Add_an_Addon={Add_an_Addon} Countable_Status={false} ID={crypto.randomUUID ()} New_Status={true} Update_the_Addon_Name={Update_the_Addon_Name} Update_the_Addon_Price={Update_the_Addon_Price}></Addon>}
				</div>
				<div className='Customization_Information_Column'>
					<Checkbox Checked_Status={Side_Dishes_Enablement_Status} Color='#8068A8' Function={() => Set_Side_Dishes_Enablement_Status (!Side_Dishes_Enablement_Status)} Label='Side Dishes'></Checkbox>
					{Side_Dishes_Enablement_Status && Card_Addons.filter (Card_Addon => Card_Addon.Countable === true).map (Card_Addon => <Addon Delete_the_Addon={Delete_the_Addon} ID={Card_Addon.ID} Name={Card_Addon.Name} Price={Card_Addon.Price} Update_the_Addon_Name={Update_the_Addon_Name} Update_the_Addon_Price={Update_the_Addon_Price}></Addon>)}
					{Addons_Enablement_Status && <Addon Add_an_Addon={Add_an_Addon} Countable_Status={true} ID={crypto.randomUUID ()} New_Status={true} Update_the_Addon_Name={Update_the_Addon_Name} Update_the_Addon_Price={Update_the_Addon_Price}></Addon>}
				</div>
			</div>
		</div>
		<Button Colors={{Button: '#8068A8', Button_Text: '#FFFFFF'}} Function={New_Item_Status ? () => Create_an_Item () : () => Update_the_Item ()} Text={New_Item_Status ? 'Add' : 'Save'}></Button>
	</div>
}

export default Card;