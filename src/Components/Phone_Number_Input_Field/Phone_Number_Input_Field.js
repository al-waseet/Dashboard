import './Phone_Number_Input_Field.css';

const Country_Codes = 
[
	{
		"Country": "United Arab Emirates",
		"Code": "+971",
		"Flag": "🇦🇪"
	},
	{
		"Country": "United States",
		"Code": "+1",
		"Flag": "🇺🇸"
	},
	{
		"Country": "Canada",
		"Code": "+1",
		"Flag": "🇨🇦"
	},
	{
		"Country": "Kazakhstan",
		"Code": "+7",
		"Flag": "🇰🇿"
	},
	{
		"Country": "Russia",
		"Code": "+7",
		"Flag": "🇷🇺"
	},
	{
		"Country": "Egypt",
		"Code": "+20",
		"Flag": "🇪🇬"
	},
	{
		"Country": "South Africa",
		"Code": "+27",
		"Flag": "🇿🇦"
	},
	{
		"Country": "Greece",
		"Code": "+30",
		"Flag": "🇬🇷"
	},
	{
		"Country": "Netherlands",
		"Code": "+31",
		"Flag": "🇳🇱"
	},
	{
		"Country": "Belgium",
		"Code": "+32",
		"Flag": "🇧🇪"
	},
	{
		"Country": "France",
		"Code": "+33",
		"Flag": "🇫🇷"
	},
	{
		"Country": "Spain",
		"Code": "+34",
		"Flag": "🇪🇸"
	},
	{
		"Country": "Hungary",
		"Code": "+36",
		"Flag": "🇭🇺"
	},
	{
		"Country": "Italy",
		"Code": "+39",
		"Flag": "🇮🇹"
	},
	{
		"Country": "Romania",
		"Code": "+40",
		"Flag": "🇷🇴"
	},
	{
		"Country": "Switzerland",
		"Code": "+41",
		"Flag": "🇨🇭"
	},
	{
		"Country": "Austria",
		"Code": "+43",
		"Flag": "🇦🇹"
	},
	{
		"Country": "United Kingdom",
		"Code": "+44",
		"Flag": "🇬🇧"
	},
	{
		"Country": "Denmark",
		"Code": "+45",
		"Flag": "🇩🇰"
	},
	{
		"Country": "Sweden",
		"Code": "+46",
		"Flag": "🇸🇪"
	},
	{
		"Country": "Norway",
		"Code": "+47",
		"Flag": "🇳🇴"
	},
	{
		"Country": "Svalbard and Jan Mayen",
		"Code": "+47",
		"Flag": "🇸🇯"
	},
	{
		"Country": "Poland",
		"Code": "+48",
		"Flag": "🇵🇱"
	},
	{
		"Country": "Germany",
		"Code": "+49",
		"Flag": "🇩🇪"
	},
	{
		"Country": "Peru",
		"Code": "+51",
		"Flag": "🇵🇪"
	},
	{
		"Country": "Mexico",
		"Code": "+52",
		"Flag": "🇲🇽"
	},
	{
		"Country": "Cuba",
		"Code": "+53",
		"Flag": "🇨🇺"
	},
	{
		"Country": "Argentina",
		"Code": "+54",
		"Flag": "🇦🇷"
	},
	{
		"Country": "Brazil",
		"Code": "+55",
		"Flag": "🇧🇷"
	},
	{
		"Country": "Chile",
		"Code": "+56",
		"Flag": "🇨🇱"
	},
	{
		"Country": "Colombia",
		"Code": "+57",
		"Flag": "🇨🇴"
	},
	{
		"Country": "Venezuela",
		"Code": "+58",
		"Flag": "🇻🇪"
	},
	{
		"Country": "Malaysia",
		"Code": "+60",
		"Flag": "🇲🇾"
	},
	{
		"Country": "Australia",
		"Code": "+61",
		"Flag": "🇦🇺"
	},
	{
		"Country": "Christmas Island",
		"Code": "+61",
		"Flag": "🇨🇽"
	},
	{
		"Country": "Cocos Islands",
		"Code": "+61",
		"Flag": "🇨🇨"
	},
	{
		"Country": "Indonesia",
		"Code": "+62",
		"Flag": "🇮🇩"
	},
	{
		"Country": "Philippines",
		"Code": "+63",
		"Flag": "🇵🇭"
	},
	{
		"Country": "New Zealand",
		"Code": "+64",
		"Flag": "🇳🇿"
	},
	{
		"Country": "Pitcairn",
		"Code": "+64",
		"Flag": "🇵🇳"
	},
	{
		"Country": "Singapore",
		"Code": "+65",
		"Flag": "🇸🇬"
	},
	{
		"Country": "Thailand",
		"Code": "+66",
		"Flag": "🇹🇭"
	},
	{
		"Country": "Japan",
		"Code": "+81",
		"Flag": "🇯🇵"
	},
	{
		"Country": "South Korea",
		"Code": "+82",
		"Flag": "🇰🇷"
	},
	{
		"Country": "Vietnam",
		"Code": "+84",
		"Flag": "🇻🇳"
	},
	{
		"Country": "China",
		"Code": "+86",
		"Flag": "🇨🇳"
	},
	{
		"Country": "Turkey",
		"Code": "+90",
		"Flag": "🇹🇷"
	},
	{
		"Country": "India",
		"Code": "+91",
		"Flag": "🇮🇳"
	},
	{
		"Country": "Pakistan",
		"Code": "+92",
		"Flag": "🇵🇰"
	},
	{
		"Country": "Afghanistan",
		"Code": "+93",
		"Flag": "🇦🇫"
	},
	{
		"Country": "Sri Lanka",
		"Code": "+94",
		"Flag": "🇱🇰"
	},
	{
		"Country": "Myanmar",
		"Code": "+95",
		"Flag": "🇲🇲"
	},
	{
		"Country": "Iran",
		"Code": "+98",
		"Flag": "🇮🇷"
	},
	{
		"Country": "South Sudan",
		"Code": "+211",
		"Flag": "🇸🇸"
	},
	{
		"Country": "Morocco",
		"Code": "+212",
		"Flag": "🇲🇦"
	},
	{
		"Country": "Western Sahara",
		"Code": "+212",
		"Flag": "🇪🇭"
	},
	{
		"Country": "Algeria",
		"Code": "+213",
		"Flag": "🇩🇿"
	},
	{
		"Country": "Tunisia",
		"Code": "+216",
		"Flag": "🇹🇳"
	},
	{
		"Country": "Libya",
		"Code": "+218",
		"Flag": "🇱🇾"
	},
	{
		"Country": "Gambia",
		"Code": "+220",
		"Flag": "🇬🇲"
	},
	{
		"Country": "Senegal",
		"Code": "+221",
		"Flag": "🇸🇳"
	},
	{
		"Country": "Mauritania",
		"Code": "+222",
		"Flag": "🇲🇷"
	},
	{
		"Country": "Mali",
		"Code": "+223",
		"Flag": "🇲🇱"
	},
	{
		"Country": "Guinea",
		"Code": "+224",
		"Flag": "🇬🇳"
	},
	{
		"Country": "Côte d’Ivoire",
		"Code": "+225",
		"Flag": "🇨🇮"
	},
	{
		"Country": "Burkina Faso",
		"Code": "+226",
		"Flag": "🇧🇫"
	},
	{
		"Country": "Niger",
		"Code": "+227",
		"Flag": "🇳🇪"
	},
	{
		"Country": "Togo",
		"Code": "+228",
		"Flag": "🇹🇬"
	},
	{
		"Country": "Benin",
		"Code": "+229",
		"Flag": "🇧🇯"
	},
	{
		"Country": "Mauritius",
		"Code": "+230",
		"Flag": "🇲🇺"
	},
	{
		"Country": "Liberia",
		"Code": "+231",
		"Flag": "🇱🇷"
	},
	{
		"Country": "Sierra Leone",
		"Code": "+232",
		"Flag": "🇸🇱"
	},
	{
		"Country": "Ghana",
		"Code": "+233",
		"Flag": "🇬🇭"
	},
	{
		"Country": "Nigeria",
		"Code": "+234",
		"Flag": "🇳🇬"
	},
	{
		"Country": "Chad",
		"Code": "+235",
		"Flag": "🇹🇩"
	},
	{
		"Country": "Central African Republic",
		"Code": "+236",
		"Flag": "🇨🇫"
	},
	{
		"Country": "Cameroon",
		"Code": "+237",
		"Flag": "🇨🇲"
	},
	{
		"Country": "Cape Verde",
		"Code": "+238",
		"Flag": "🇨🇻"
	},
	{
		"Country": "São Tomé & Príncipe",
		"Code": "+239",
		"Flag": "🇸🇹"
	},
	{
		"Country": "Equatorial Guinea",
		"Code": "+240",
		"Flag": "🇬🇶"
	},
	{
		"Country": "Gabon",
		"Code": "+241",
		"Flag": "🇬🇦"
	},
	{
		"Country": "Republic of the Congo",
		"Code": "+242",
		"Flag": "🇨🇬"
	},
	{
		"Country": "Democratic Republic of the Congo",
		"Code": "+243",
		"Flag": "🇨🇩"
	},
	{
		"Country": "Angola",
		"Code": "+244",
		"Flag": "🇦🇴"
	},
	{
		"Country": "Guinea-Bissau",
		"Code": "+245",
		"Flag": "🇬🇼"
	},
	{
		"Country": "British Indian Ocean Territory",
		"Code": "+246",
		"Flag": "🇮🇴"
	},
	{
		"Country": "Seychelles",
		"Code": "+248",
		"Flag": "🇸🇨"
	},
	{
		"Country": "Sudan",
		"Code": "+249",
		"Flag": "🇸🇩"
	},
	{
		"Country": "Rwanda",
		"Code": "+250",
		"Flag": "🇷🇼"
	},
	{
		"Country": "Ethiopia",
		"Code": "+251",
		"Flag": "🇪🇹"
	},
	{
		"Country": "Somalia",
		"Code": "+252",
		"Flag": "🇸🇴"
	},
	{
		"Country": "Djibouti",
		"Code": "+253",
		"Flag": "🇩🇯"
	},
	{
		"Country": "Kenya",
		"Code": "+254",
		"Flag": "🇰🇪"
	},
	{
		"Country": "Tanzania",
		"Code": "+255",
		"Flag": "🇹🇿"
	},
	{
		"Country": "Uganda",
		"Code": "+256",
		"Flag": "🇺🇬"
	},
	{
		"Country": "Burundi",
		"Code": "+257",
		"Flag": "🇧🇮"
	},
	{
		"Country": "Mozambique",
		"Code": "+258",
		"Flag": "🇲🇿"
	},
	{
		"Country": "Zambia",
		"Code": "+260",
		"Flag": "🇿🇲"
	},
	{
		"Country": "Madagascar",
		"Code": "+261",
		"Flag": "🇲🇬"
	},
	{
		"Country": "Mayotte",
		"Code": "+262",
		"Flag": "🇾🇹"
	},
	{
		"Country": "Réunion",
		"Code": "+262",
		"Flag": "🇷🇪"
	},
	{
		"Country": "Zimbabwe",
		"Code": "+263",
		"Flag": "🇿🇼"
	},
	{
		"Country": "Namibia",
		"Code": "+264",
		"Flag": "🇳🇦"
	},
	{
		"Country": "Malawi",
		"Code": "+265",
		"Flag": "🇲🇼"
	},
	{
		"Country": "Lesotho",
		"Code": "+266",
		"Flag": "🇱🇸"
	},
	{
		"Country": "Botswana",
		"Code": "+267",
		"Flag": "🇧🇼"
	},
	{
		"Country": "Swaziland",
		"Code": "+268",
		"Flag": "🇸🇿"
	},
	{
		"Country": "Comoros",
		"Code": "+269",
		"Flag": "🇰🇲"
	},
	{
		"Country": "Saint Helena",
		"Code": "+290"
	},
	{
		"Country": "Eritrea",
		"Code": "+291",
		"Flag": "🇪🇷"
	},
	{
		"Country": "Aruba",
		"Code": "+297",
		"Flag": "🇦🇼"
	},
	{
		"Country": "Faroe Islands",
		"Code": "+298",
		"Flag": "🇫🇴"
	},
	{
		"Country": "Greenland",
		"Code": "+299",
		"Flag": "🇬🇱"
	},
	{
		"Country": "Gibraltar",
		"Code": "+350",
		"Flag": "🇬🇮"
	},
	{
		"Country": "Portugal",
		"Code": "+351",
		"Flag": "🇵🇹"
	},
	{
		"Country": "Luxembourg",
		"Code": "+352",
		"Flag": "🇱🇺"
	},
	{
		"Country": "Ireland",
		"Code": "+353",
		"Flag": "🇮🇪"
	},
	{
		"Country": "Iceland",
		"Code": "+354",
		"Flag": "🇮🇸"
	},
	{
		"Country": "Albania",
		"Code": "+355",
		"Flag": "🇦🇱"
	},
	{
		"Country": "Malta",
		"Code": "+356",
		"Flag": "🇲🇹"
	},
	{
		"Country": "Cyprus",
		"Code": "+357",
		"Flag": "🇨🇾"
	},
	{
		"Country": "Finland",
		"Code": "+358",
		"Flag": "🇫🇮"
	},
	{
		"Country": "Bulgaria",
		"Code": "+359",
		"Flag": "🇧🇬"
	},
	{
		"Country": "Lithuania",
		"Code": "+370",
		"Flag": "🇱🇹"
	},
	{
		"Country": "Latvia",
		"Code": "+371",
		"Flag": "🇱🇻"
	},
	{
		"Country": "Estonia",
		"Code": "+372",
		"Flag": "🇪🇪"
	},
	{
		"Country": "Moldova",
		"Code": "+373",
		"Flag": "🇲🇩"
	},
	{
		"Country": "Armenia",
		"Code": "+374",
		"Flag": "🇦🇲"
	},
	{
		"Country": "Belarus",
		"Code": "+375",
		"Flag": "🇧🇾"
	},
	{
		"Country": "Andorra",
		"Code": "+376",
		"Flag": "🇦🇩"
	},
	{
		"Country": "Monaco",
		"Code": "+377",
		"Flag": "🇲🇨"
	},
	{
		"Country": "San Marino",
		"Code": "+378",
		"Flag": "🇸🇲"
	},
	{
		"Country": "Vatican",
		"Code": "+379",
		"Flag": "🇻🇦"
	},
	{
		"Country": "Ukraine",
		"Code": "+380",
		"Flag": "🇺🇦"
	},
	{
		"Country": "Serbia",
		"Code": "+381",
		"Flag": "🇷🇸"
	},
	{
		"Country": "Montenegro",
		"Code": "+382",
		"Flag": "🇲🇪"
	},
	{
		"Country": "Kosovo",
		"Code": "+383",
		"Flag": "🇽🇰"
	},
	{
		"Country": "Croatia",
		"Code": "+385",
		"Flag": "🇭🇷"
	},
	{
		"Country": "Slovenia",
		"Code": "+386",
		"Flag": "🇸🇮"
	},
	{
		"Country": "Bosnia and Herzegovina",
		"Code": "+387",
		"Flag": "🇧🇦"
	},
	{
		"Country": "Macedonia",
		"Code": "+389",
		"Flag": "🇲🇰"
	},
	{
		"Country": "Czech Republic",
		"Code": "+420",
		"Flag": "🇨🇿"
	},
	{
		"Country": "Slovakia",
		"Code": "+421",
		"Flag": "🇸🇰"
	},
	{
		"Country": "Liechtenstein",
		"Code": "+423",
		"Flag": "🇱🇮"
	},
	{
		"Country": "Falkland Islands",
		"Code": "+500",
		"Flag": "🇫🇰"
	},
	{
		"Country": "Belize",
		"Code": "+501",
		"Flag": "🇧🇿"
	},
	{
		"Country": "Guatemala",
		"Code": "+502",
		"Flag": "🇬🇹"
	},
	{
		"Country": "El Salvador",
		"Code": "+503",
		"Flag": "🇸🇻"
	},
	{
		"Country": "Honduras",
		"Code": "+504",
		"Flag": "🇭🇳"
	},
	{
		"Country": "Nicaragua",
		"Code": "+505",
		"Flag": "🇳🇮"
	},
	{
		"Country": "Costa Rica",
		"Code": "+506",
		"Flag": "🇨🇷"
	},
	{
		"Country": "Panama",
		"Code": "+507",
		"Flag": "🇵🇦"
	},
	{
		"Country": "Saint Pierre and Miquelon",
		"Code": "+508",
		"Flag": "🇵🇲"
	},
	{
		"Country": "Haiti",
		"Code": "+509",
		"Flag": "🇭🇹"
	},
	{
		"Country": "Saint Barthélemy",
		"Code": "+590",
		"Flag": "🇧🇱"
	},
	{
		"Country": "Saint Martin",
		"Code": "+590",
		"Flag": "🇲🇫"
	},
	{
		"Country": "Bolivia",
		"Code": "+591",
		"Flag": "🇧🇴"
	},
	{
		"Country": "Guyana",
		"Code": "+592",
		"Flag": "🇬🇾"
	},
	{
		"Country": "Ecuador",
		"Code": "+593",
		"Flag": "🇪🇨"
	},
	{
		"Country": "Paraguay",
		"Code": "+595",
		"Flag": "🇵🇾"
	},
	{
		"Country": "Suriname",
		"Code": "+597",
		"Flag": "🇸🇷"
	},
	{
		"Country": "Uruguay",
		"Code": "+598",
		"Flag": "🇺🇾"
	},
	{
		"Country": "Curaçao",
		"Code": "+599",
		"Flag": "🇨🇼"
	},
	{
		"Country": "Netherlands Antilles",
		"Code": "+599",
		"Flag": "🇧🇶"
	},
	{
		"Country": "Timor-Leste",
		"Code": "+670",
		"Flag": "🇹🇱"
	},
	{
		"Country": "Antarctica",
		"Code": "+672",
		"Flag": "🇦🇶"
	},
	{
		"Country": "Brunei",
		"Code": "+673",
		"Flag": "🇧🇳"
	},
	{
		"Country": "Nauru",
		"Code": "+674",
		"Flag": "🇳🇷"
	},
	{
		"Country": "Papua New Guinea",
		"Code": "+675",
		"Flag": "🇵🇬"
	},
	{
		"Country": "Tonga",
		"Code": "+676",
		"Flag": "🇹🇴"
	},
	{
		"Country": "Solomon Islands",
		"Code": "+677",
		"Flag": "🇸🇧"
	},
	{
		"Country": "Vanuatu",
		"Code": "+678",
		"Flag": "🇻🇺"
	},
	{
		"Country": "Fiji",
		"Code": "+679",
		"Flag": "🇫🇯"
	},
	{
		"Country": "Palau",
		"Code": "+680",
		"Flag": "🇵🇼"
	},
	{
		"Country": "Wallis and Futuna",
		"Code": "+681",
		"Flag": "🇼🇫"
	},
	{
		"Country": "Cook Islands",
		"Code": "+682",
		"Flag": "🇨🇰"
	},
	{
		"Country": "Niue",
		"Code": "+683",
		"Flag": "🇳🇺"
	},
	{
		"Country": "Samoa",
		"Code": "+685",
		"Flag": "🇼🇸"
	},
	{
		"Country": "Kiribati",
		"Code": "+686",
		"Flag": "🇰🇮"
	},
	{
		"Country": "New Caledonia",
		"Code": "+687",
		"Flag": "🇳🇨"
	},
	{
		"Country": "Tuvalu",
		"Code": "+688",
		"Flag": "🇹🇻"
	},
	{
		"Country": "French Polynesia",
		"Code": "+689",
		"Flag": "🇵🇫"
	},
	{
		"Country": "Tokelau",
		"Code": "+690",
		"Flag": "🇹🇰"
	},
	{
		"Country": "Micronesia",
		"Code": "+691",
		"Flag": "🇫🇲"
	},
	{
		"Country": "Marshall Islands",
		"Code": "+692",
		"Flag": "🇲🇭"
	},
	{
		"Country": "North Korea",
		"Code": "+850",
		"Flag": "🇰🇵"
	},
	{
		"Country": "Hong Kong",
		"Code": "+852",
		"Flag": "🇭🇰"
	},
	{
		"Country": "Macau",
		"Code": "+853",
		"Flag": "🇲🇴"
	},
	{
		"Country": "Cambodia",
		"Code": "+855",
		"Flag": "🇰🇭"
	},
	{
		"Country": "Laos",
		"Code": "+856",
		"Flag": "🇱🇦"
	},
	{
		"Country": "Bangladesh",
		"Code": "+880",
		"Flag": "🇧🇩"
	},
	{
		"Country": "Taiwan",
		"Code": "+886",
		"Flag": "🇹🇼"
	},
	{
		"Country": "Maldives",
		"Code": "+960",
		"Flag": "🇲🇻"
	},
	{
		"Country": "Lebanon",
		"Code": "+961",
		"Flag": "🇱🇧"
	},
	{
		"Country": "Jordan",
		"Code": "+962",
		"Flag": "🇯🇴"
	},
	{
		"Country": "Syria",
		"Code": "+963",
		"Flag": "🇸🇾"
	},
	{
		"Country": "Iraq",
		"Code": "+964",
		"Flag": "🇮🇶"
	},
	{
		"Country": "Kuwait",
		"Code": "+965",
		"Flag": "🇰🇼"
	},
	{
		"Country": "Saudi Arabia",
		"Code": "+966",
		"Flag": "🇸🇦"
	},
	{
		"Country": "Yemen",
		"Code": "+967",
		"Flag": "🇾🇪"
	},
	{
		"Country": "Oman",
		"Code": "+968",
		"Flag": "🇴🇲"
	},
	{
		"Country": "Palestine",
		"Code": "+970",
		"Flag": "🇵🇸"
	},
	{
		"Country": "Israel",
		"Code": "+972",
		"Flag": "🇮🇱"
	},
	{
		"Country": "Bahrain",
		"Code": "+973",
		"Flag": "🇧🇭"
	},
	{
		"Country": "Qatar",
		"Code": "+974",
		"Flag": "🇶🇦"
	},
	{
		"Country": "Bhutan",
		"Code": "+975",
		"Flag": "🇧🇹"
	},
	{
		"Country": "Mongolia",
		"Code": "+976",
		"Flag": "🇲🇳"
	},
	{
		"Country": "Nepal",
		"Code": "+977",
		"Flag": "🇳🇵"
	},
	{
		"Country": "Tajikistan",
		"Code": "+992",
		"Flag": "🇹🇯"
	},
	{
		"Country": "Turkmenistan",
		"Code": "+993",
		"Flag": "🇹🇲"
	},
	{
		"Country": "Azerbaijan",
		"Code": "+994",
		"Flag": "🇦🇿"
	},
	{
		"Country": "Georgia",
		"Code": "+995",
		"Flag": "🇬🇪"
	},
	{
		"Country": "Kyrgyzstan",
		"Code": "+996",
		"Flag": "🇰🇬"
	},
	{
		"Country": "Uzbekistan",
		"Code": "+998",
		"Flag": "🇺🇿"
	}
]

const Phone_Number_Input_Field = ({Phone_Number, Phone_Number_Code, Set_Phone_Number, Set_Phone_Number_Code}) => (
	<div className='Phone_Number_Input_Field_Container'>
		<label className="Phone_Number_Input_Field_Label">Phone Number</label>
		<div className='Combined_Field'>
			<form className='Phone_Number_Code_Form'>
				<input className='Phone_Number_Code_Controller' type="checkbox" />
				<div className='Phone_Number_Code_Box'>
					<div className='Phone_Number_Code_Selected_Value'><span>-</span></div>
					<div className='Phone_Number_Code_Arrow_Icon'></div>
				</div>
				<div className='Phone_Number_Code_Options'>
					{Country_Codes.map (Country_Code =>
					<div className='Phone_Number_Code_Option' key={Country_Code.Country}>
						<input className='Phone_Number_Selection_Controller Top_Half' defaultChecked={Country_Code.Code === Phone_Number_Code} name='Phone_Number' onChange={Set_Phone_Number_Code} type='radio' />
						<input className='Phone_Number_Selection_Controller Bottom_Half' defaultChecked={Country_Code.Code === Phone_Number_Code} name='Phone_Number' onChange={Set_Phone_Number_Code} type='radio' />
						<span className='Phone_Number_Option_Label'>{Country_Code.Flag + ' ' + Country_Code.Code}</span>
						<span className='Phone_Number_Option_Value'>{Country_Code.Flag + ' ' + Country_Code.Code}</span>
					</div>)}
					<div className='Phone_Number_Option_Background'></div>
				</div>
			</form>
			<input className='Phone_Number_Input_Field' onChange={Set_Phone_Number} type='tel' value={Phone_Number} />
		</div>
	</div>
)

export default Phone_Number_Input_Field;