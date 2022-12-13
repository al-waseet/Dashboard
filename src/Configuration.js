export const Configuration =
{
	API_URL: process.env.REACT_APP_Environment === 'Production' ? 'https://alwaseet.me/api' : 'http://localhost:3030/api',
	COS_URL: process.env.REACT_APP_Environment === 'Production' ? 'https://alwaseet.me/' : 'http://localhost:3030',
	Language: 'en-US'
};