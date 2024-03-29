export const Convert_Image_to_Base64 = Image_File => new Promise (async (Resolve, Reject) => 
{
    const Response = await fetch (Image_File);
    const Image_Blob = await Response.blob ()
    const Image_File_Reader = new FileReader ();
    Image_File_Reader.readAsDataURL (Image_Blob);
    Image_File_Reader.onload = () => Resolve (Image_File_Reader.result);
    Image_File_Reader.onerror = Error_Message => Reject (Error_Message);
});

export const Get_the_File_Extension = Image_File_Type =>
{
    const File_Types = 
    {
        "image/jpeg": ".jpeg",
        "image/png": ".png",
        "image/svg+xml": ".svg"
    }
    return File_Types [Image_File_Type] !== undefined ? File_Types [Image_File_Type] : '';
}