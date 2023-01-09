export const Convert_Image_to_Base64 = Image_File => new Promise ((Resolve, Reject) => 
{
    const Image_File_Reader = new FileReader ();
    Image_File_Reader.readAsDataURL (Image_File);
    Image_File_Reader.onload = () => Resolve (Image_File_Reader.result);
    Image_File_Reader.onerror = Error_Message => Reject (Error_Message);
});