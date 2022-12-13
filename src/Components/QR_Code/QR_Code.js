import Deletion_Button from '../Deletion_Button/Deletion_Button';
import {ReactComponent as Printer_Icon} from '../../Images/Printer_Icon.svg';
import QRCode from 'qrcode';
import './QR_Code.css';
import { useEffect, useRef, useState } from 'react';
import {useReactToPrint } from 'react-to-print';

const QR_Code = ({Delete_the_Table, Information}) => 
{
	const Print = useReactToPrint ({content: () => QR_Code_Reference.current});
	const [QR_Code_Image, Set_QR_Code_Image] = useState ('');
	const QR_Code_Reference = useRef ();

	useEffect (() => 
	{
		QRCode.toDataURL (`https://alwaseet.me/menu/${Information.Restaurant_ID}/${Information.Table_ID}`, {errorCorrectionLevel: 'H', type: 'image/svg', color: {dark:"#4D4D4DFF", light:"#FFFFFF00"}}, (Error_Object, Result) => Error_Object ? console.error (Error_Object) : Set_QR_Code_Image (Result));
	}, []);

	return <div className='Table_Container' ref={QR_Code_Reference}>
		<h2>Table {Information.Table_Number}</h2>
		<div className='QR_Code_Container'>
			<Deletion_Button Function={Delete_the_Table} Placement_Inside_Status={false}></Deletion_Button>
			<img alt='QR Code' className='QR_Code' src={QR_Code_Image}></img>
			<div className='Circular_Button' onClick={Print}>
				<Printer_Icon className='Circular_Button_Icon' fill='#8068A8'></Printer_Icon>
			</div>
		</div>
	</div>
}

export default QR_Code;