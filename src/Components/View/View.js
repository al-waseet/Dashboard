import './View.css';

const View = ({Active_Tab, children, ID}) => Active_Tab === ID ? <div className="View">{children}</div> : null

export default View;