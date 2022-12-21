import API from '../API';
import { useEffect, useState } from "react";

export const usePOSFetch = () =>
{
	const [POS, Set_POS] = useState ({});

	const Get_the_POS = async () =>
	{
		try
		{
			const Response = await API.Get_the_POS ();
			Set_POS (Response.Data);
		}
		catch (Error_Object)
		{
			console.error (Error_Object)	
		}
	}

	useEffect (() => Get_the_POS, []);

	return POS;
}