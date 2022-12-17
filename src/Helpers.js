import bcryptjs from 'bcryptjs';

export const Encrypt_the_Password = (Plain_Text_Password) =>
{
    const Salt_Rounds = new Uint32Array (1);
	crypto.getRandomValues (Salt_Rounds);
	const Encrypted_Password = bcryptjs.hashSync (Plain_Text_Password, bcryptjs.genSaltSync (Salt_Rounds [0] % 10));
    return Encrypted_Password;
}

export const Go_to_Another_Page = (Navigate, URL_Path) => process.env.REACT_APP_Environment === 'Production' ? Navigate (URL_Path) : window.location.href = URL_Path;

// From: https://stackoverflow.com/questions/63558462/how-to-parse-image-to-ico-format-in-javascript-client-side
// By: https://stackoverflow.com/users/5818762/id01

export const pngToIco = (pngData) => 
{
    let icoFile = "\x00\x00\x01\x00\x01\x00"; // First 6 bytes are constant
    icoFile += pngData[15+4]; // PNG width byte
    icoFile += pngData[15+8]; // PNG height byte
    // Make sure PNG is less than 256x256
    if (pngData[15+1] || pngData[15+2] || pngData[15+3]) {
        console.log("Width over 255!"); return;
    }
    if (pngData[15+5] || pngData[15+6] || pngData[15+7]) {
        console.log("Height over 255!"); return;
    }
    // Add more (probably constant) information
    icoFile += "\x00\x00\x01\x00\x18\x00";
    // Add encoded length
    var lenBytes = pngData.length;
    for (var i=0; i<4; i++) {
        icoFile += String.fromCharCode(lenBytes % 256);
        lenBytes >>= 4;
    }
    // We had 0x16 bytes before now
    icoFile += "\x16\x00\x00\x00";
    // Now add the png data
    icoFile += pngData;
    // Now we have a valid ico file!
    return icoFile;
}

export const Convert_Image_to_Base64 = Image_File => new Promise ((Resolve, Reject) => 
{
    const Image_File_Reader = new FileReader ();
    Image_File_Reader.readAsDataURL (Image_File);
    Image_File_Reader.onload = () => Resolve (Image_File_Reader.result);
    Image_File_Reader.onerror = Error_Message => Reject (Error_Message);
});