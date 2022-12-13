import './Button.css';

const Button = ({Colors, Function, Secondary, Text}) => <button className={!Secondary ? 'Generic_Button' : 'Secondary_Generic_Button'} onClick={Function} style={Colors && (!Secondary ? ({backgroundColor: Colors.Button ? Colors.Button : "#F5B8D3", backgroundImage: Colors.Button ? "radial-gradient(farthest-corner at bottom left, transparent, transparent)" : "radial-gradient(farthest-corner at bottom left, #90DDF5, transparent 50%), radial-gradient(farthest-corner at bottom right, #8068A8, transparent 50%)", color: Colors.Button_Text ? Colors.Button_Text : "#FFFFFF"}) : ({background: '#FFFFFF', border: `2px solid ${Colors.Button}`, color: Colors.Button}))}>{Text}</button>;

export default Button;