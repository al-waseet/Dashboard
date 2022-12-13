import './Grid.css';

const Grid = ({children, Classes, Minimum_Column_Width}) => <div className={'Grid' + (Classes ? (' ' + Classes.join (' ')) : '')} style={Minimum_Column_Width ? {gridTemplateColumns: `repeat(auto-fit, minmax(${Minimum_Column_Width}, 1fr))`} : null}>{children}</div>

export default Grid;