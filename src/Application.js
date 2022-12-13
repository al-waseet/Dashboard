import './Application.css';
import Authentication from './Pages/Authentication/Authentication';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Not_Found from './Pages/Not_Found/Not_Found';
import Registration from './Pages/Registration/Registration';
import User_Provider from './Contexts/User';

const Application = () => (
	<Router key='Router_Key'>
		<User_Provider>
			<Routes key='Routes_Key'>
				<Route key='Authentication_Route_Key' path='/authentication' element={<Authentication />} />
				<Route key='Dashboard_Route_Key' path='/dashboard' element={<Dashboard />} />
				<Route key='Miscellaneous_Route_Key' path='/*' element={<Not_Found />} />
				<Route key='Registration_Route_Key' path='/registration' element={<Registration />} />
			</Routes>
		</User_Provider>
	</Router>
);

export default Application;