import API from '../API';
import { useContext, useEffect, useState } from "react";
import { User_Context } from '../Contexts/User';

export const useRestaurantFetch = () =>
{
	const [restaurant, setRestaurant] = useState ({});
	const [Restaurant_Loading_Status, Set_Restaurant_Loading_Status] = useState (false);
	const [User] = useContext (User_Context);

	const Get_the_Restaurant = async () =>
	{
		try
		{
			Set_Restaurant_Loading_Status (true);
			const Restaurant = await API.Get_the_Restaurant (User.Restaurant_ID);
			setRestaurant (Restaurant.Data);
		}
		catch (Error_Object)
		{
			console.error (Error_Object)
		}
		finally
		{
			Set_Restaurant_Loading_Status (false);
		}
	}

	useEffect (() => Get_the_Restaurant, [User]);

	return {restaurant, Restaurant_Loading_Status, setRestaurant};
}