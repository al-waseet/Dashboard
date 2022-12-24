import API from '../API';
import { useContext, useEffect, useState } from "react";
import { User_Context } from '../Contexts/User';

export const useUsersFetch = () =>
{
	const [Users, Set_Users] = useState ({});
	const [User] = useContext (User_Context);

	const Get_the_Users = async () =>
	{
		try
		{
			const Response = await API.Get_the_Users (User.Restaurant_ID);
			Set_Users (Response.Data);
		}
		catch (Error_Object)
		{
			console.error (Error_Object)
		}
	}

	useEffect (() => Get_the_Users, [User]);

	return {Users, Set_Users};
}