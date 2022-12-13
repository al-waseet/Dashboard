import React from "react";

const useLocalStorage = (Key, Initial_Value) =>
{
	const [storedValue, setStoredValue] = React.useState (() => 
	{
		try 
		{
			const Item = window.localStorage.getItem (Key);
			return Item ? JSON.parse (Item) : Initial_Value;
		}
		catch (Error_Exception) 
		{
			console.error (Error_Exception);
			return Initial_Value;
		}
	});

	const setValue = (Value) => 
	{
		try 
		{
			const valueToStore = Value instanceof Function ? Value (storedValue) : Value;
			setStoredValue (valueToStore);
			window.localStorage.setItem (Key, JSON.stringify (valueToStore));
		} 
		catch (Error_Exception)
		{
			console.error (Error_Exception);
		}
	};

	return [storedValue, setValue];
}

export default useLocalStorage;