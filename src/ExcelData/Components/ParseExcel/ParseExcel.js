import React, {useState} from 'react';
import * as XLSX from "xlsx";        

const ParseExcel = () =>{
    const [fileName , setFileName] = useState(null);    

    const handleFile = async (event) =>{
        const file = event.target.files[0];
        setFileName(file.name)
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);  
        // xlsx to json
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header:1,
            // span:2,
            // pod:3,
            // total:4
        });

        const worksheet2 = workbook.Sheets[workbook.SheetNames[1]];
        const jsonData2 = XLSX.utils.sheet_to_json(worksheet2);
        console.log(jsonData);
        console.log(jsonData2);

    };

    return(
        <div>
        <h2>Parse Excel</h2>
        <input type="file" onChange={(event) => handleFile(event)} />
         {fileName && (
            <p> File Name: <span>{fileName}</span></p>
         )} 
        </div>
    );

}
export default ParseExcel;