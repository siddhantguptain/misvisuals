import React, {useState} from 'react';
import * as XLSX from "xlsx";        

const ParseExcel = () =>{
    const [fileName , setFileName] = useState(null);    
    const [Data , setData] = useState('');

    const handleFile = async (event) =>{
        const file = event.target.files[0];
        setFileName(file.name)
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);  
        // xlsx to json
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
        // Array
        // const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        //     header:1,
        // });

        const worksheet2 = workbook.Sheets[workbook.SheetNames[1]];
        const jsonData2 = XLSX.utils.sheet_to_json(worksheet2);
        console.log(jsonData);
        console.log(jsonData2);
         setData(jsonData);
    };

    return(
        <div>
        <h2>Parse Excel</h2>
        <input type="file" onChange={(event) => handleFile(event)} />
         {fileName && (
            <>
              <p> File Name: <span>{fileName}</span></p>
{/* 
              <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>POD</th>
                    <th>Total</th>
                    <th>Present</th>
                    <th>Leave</th>
                </tr>
                </thead>
              <tbody>

                    { Data.map((getdata , index)=>(
                    <tr key={index}>
                        <td>{getdata.ID}</td>
                        <td>{getdata.POD}</td>
                        <td>{getdata.TOTAL}</td>
                        <td>{getdata.PRESENT}</td>
                        <td>{getdata.LEAVE}</td>

                    </tr>
                ))}
             
              </tbody>
              </table> */}
             
            </>
             
         )} 
        </div>
    );

}
export default ParseExcel;