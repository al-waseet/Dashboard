export const Configuration =
{
	API_URL: process.env.REACT_APP_Environment === 'Production' ? 'https://alwaseet.me/api' : 'http://localhost:3030/api',
	COS_URL: process.env.REACT_APP_Environment === 'Production' ? 'https://alwaseet.me' : 'http://localhost:3030',
	Dashboard_URL: process.env.REACT_APP_Environment === 'Production' ? 'https://alwaseet.me' : 'http://localhost:3002',
	Landing_Page_URL: process.env.REACT_APP_Environment === 'Production' ? 'https://alwaseet.me/dashboard' : 'http://localhost:3001/dashboard',
	Ordering_Application_URL: process.env.REACT_APP_Environment === 'Production' ? 'https://alwaseet.me/menu' : 'http://localhost:3000/menu',
	Language: 'en-US'
};