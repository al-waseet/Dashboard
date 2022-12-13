import API from '../API';
import { useContext, useEffect, useState } from "react";
import { User_Context } from '../Contexts/User';

export const useRestaurantFetch = () =>
{
	const [restaurant, setRestaurant] = useState ({});
	const [User] = useContext (User_Context);

	const Get_the_Restaurant = async () =>
	{
		try
		{
			const Restaurant = await API.Get_the_Restaurant (User.Restaurant_ID);
			setRestaurant (Restaurant.Data);
		}
		catch
		{

		}
	}

	useEffect (() => Get_the_Restaurant, []);

	return {restaurant, setRestaurant};
}