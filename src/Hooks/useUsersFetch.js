import API from '../API';
import { useContext, useEffect, useState } from "react";
import { User_Context } from '../Contexts/User';

export const useUsersFetch = () =>
{
	const [User] = useContext (User_Context);
	const [Users, Set_Users] = useState ([]);
	const [Users_Loading_Status, Set_Users_Loading_Status] = useState (false);
	
	const Get_the_Users = async () =>
	{
		try
		{
			Set_Users_Loading_Status (true);
			const Response = await API.Get_the_Users (User.Restaurant_ID);
			Set_Users (Response.Data);
		}
		catch (Error_Object)
		{
			console.error (Error_Object)
		}
		finally
		{
			Set_Users_Loading_Status (false);
		}
	}

	useEffect (() => Get_the_Users, [User]);

	return {Users, Users_Loading_Status, Set_Users};
}