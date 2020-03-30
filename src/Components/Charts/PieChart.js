import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import CanvasJSReact from '../../canvasjs.react';
import infectedContext from '../../infectedContext';
import '../../App.scss';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = () => {
    const { infectedCountries } = useContext(infectedContext);

    const manageData = data =>{
        let matriz = data.map(country =>{
            return {y:country.infected, indexLabel: country.name}
        })
        return matriz;
    }
    
    
    const options = {
        theme: "light2",
        title:{
            text: ""
        },
        data: [{
            type: "pie",
            showInLegend: true,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: "###,###",
			legendText: "{indexLabel}",
            dataPoints: manageData(infectedCountries)
        }]
	}


    return (
		<div>
            <header className="content-header">
                <h2>Infected People by Country</h2>
                <div>
                    <a href={"/countries"}><span className="table-buttons"><FontAwesomeIcon icon={faUndoAlt}/> Back</span></a>
                </div>
            </header>
            <div className="chart-container">
			    <CanvasJSChart options = {options}/>
            </div>
		</div>
		);
}

export default PieChart;