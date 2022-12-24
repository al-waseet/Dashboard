import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { User_Context } from '../Contexts/User';

const Protected_Route = ({children, Redirection_Path = '/authentication'}) => 
{
	const [User] = useContext (User_Context);

	if (!User)
	{
		return <Navigate to={Redirection_Path} replace />;
	}
	return children ? children : <Outlet />;
};

export default Protected_Route