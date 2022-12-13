import './Tab.css';

const Tab = ({Active_Tab, ID, Set_Active_Tab, Set_View_Title, Title}) => <div className={'Tab' + (Active_Tab === ID ? ' Active_Tab' : '')} onClick={() => {Set_Active_Tab (ID); Set_View_Title (Title);}}>{Title}</div>

export default Tab;