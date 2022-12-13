import { useEffect } from "react";

export const useTitle = (Title) => 
{
	useEffect (() => 
	{
		const prevTitle = document.title
		document.title = Title
		return () => document.title = prevTitle;
	});
}