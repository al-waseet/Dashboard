import './Text_Area.css';

const Text_Area = ({Classes, Function, Label, Value}) => <div className={'Text_Area' + (Classes ? (' ' + Classes.join (' ')) : '')}>{Label && <label className='Text_Area_Label'>{Label}</label>}<textarea className='Text_Area_Field' onChange={(Event) => Function (Event.target.value)} rows='10' style={!Label && {marginTop: 0}} type='text' value={Value} ></textarea></div>

export default Text_Area;