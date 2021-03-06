import React from "react";
import ReactExport from "react-export-excel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Download = props=>{
    return (
        <ExcelFile element={<button className="table-buttons"><FontAwesomeIcon icon={faDownload}/> Download</button>}>
            <ExcelSheet data={props.data} name="Infected">
                <ExcelColumn label="First Name" value="first_name"/>
                <ExcelColumn label="Last Name" value="last_name"/>
                <ExcelColumn label="Country" value="country"/>
                <ExcelColumn label="Alive"
                            value={(col) => col.live ? "Yes" : "No"}/>
                <ExcelColumn label="Age" value="age"/>
                <ExcelColumn label="Infected Date" 
                            value={col => col.infect_date.slice(0,10)}/>
                <ExcelColumn label="Gender"
                            value={(col) => col.female ? "Female" : "Male"}/>
            </ExcelSheet>
        </ExcelFile>
    );
}

export default Download