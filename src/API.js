import { Configuration } from "./Configuration";
import { Convert_Image_to_Base64 } from './Helpers'

const API = 
{
	Get_the_POS: async () =>
	{
		return await (await fetch (Configuration.API_URL + '/pos')).json ();
	},

	Get_the_Restaurant: async (Restaurant_ID) =>
	{
		const Restaurant = await (await fetch (Configuration.API_URL + '/restaurant/' + Restaurant_ID)).json ();
		Restaurant.Data.Categories.forEach (Category => 
		{
			Category.File_Path = Category.Banner_Image;
			Category.Banner_Image = Configuration.COS_URL + Category.Banner_Image;
		});
		Restaurant.Data.Cart_Icon_File_Path = Restaurant.Data.Cart_Icon;
		Restaurant.Data.Cart_Icon = Configuration.COS_URL + Restaurant.Data.Cart_Icon;
		Object.keys (Restaurant.Data.Icons).forEach (Key =>
		{
			Restaurant.Data.Icons [`${Key}_File_Path`] = Restaurant.Data.Icons [Key];
			Restaurant.Data.Icons [Key] = Configuration.COS_URL + Restaurant.Data.Icons [Key];
		}); 
		Restaurant.Data.Menu.forEach (Menu_Item => 
		{
			Menu_Item.File_Path = Menu_Item.Image;
			Menu_Item.Image = Configuration.COS_URL + Menu_Item.Image;
		}); 
		Restaurant.Data.Logo_File_Path = Restaurant.Data.Logo;
		Restaurant.Data.Logo = Configuration.COS_URL + Restaurant.Data.Logo;
		return Restaurant;
	},

	Get_the_Users: async (Restaurant_ID) =>
	{
		return await (await fetch (Configuration.API_URL + '/users/' + Restaurant_ID)).json ();
	},

	Log_In: async (User_Information) =>
	{
		return await (await fetch (Configuration.API_URL + '/login', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify (User_Information)})).json ();
	},

	Register: async (User_Information) =>
	{
		return await (await fetch (Configuration.API_URL + '/register', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify (User_Information)})).json ();
	},

	Update_the_Restaurant: async (Restaurant) =>
	{
		Restaurant.Categories.forEach (Category => 
		{
			if (Category.Banner_Image.includes ('blob:'))
			{
				Category.Banner_Image = Convert_Image_to_Base64 (Category.Banner_Image);
			}
		});
		if (Restaurant.Cart_Icon.includes ('blob:'))
		{
			Restaurant.Cart_Icon = Convert_Image_to_Base64 (Restaurant.Cart_Icon);
		}
		Object.keys (Restaurant.Icons).forEach (Key =>
		{
			if (Restaurant.Icons [Key].includes ('blob:'))
			{
				Restaurant.Icons [Key] = Convert_Image_to_Base64 (Restaurant.Icons [Key]);
			}
		});
		Restaurant.Data.Menu.forEach (Menu_Item => 
		{
			if (Menu_Item.Image.includes ('blob:'))
			{
				Menu_Item.Image = Convert_Image_to_Base64 (Menu_Item.Image);
			}
		}); 
		if (Restaurant.Logo.includes ('blob:'))
		{
			Restaurant.Logo = Convert_Image_to_Base64 (Restaurant.Logo);
		}
		return await (await fetch (Configuration.API_URL + '/restaurant', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify (Restaurant)}));
	},

	Update_the_User: async (User) =>
	{
		return await (await fetch (Configuration.API_URL + '/user', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify (User)}));
	},

	Update_the_Users: async (Users) =>
	{
		return await (await fetch (Configuration.API_URL + '/users', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify (Users)}));
	}
};

export default API;