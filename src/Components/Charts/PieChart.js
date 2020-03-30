import React, { useContext } from 'react';
import CanvasJSReact from '../../canvasjs.react';
import infectedContext from '../../infectedContext';

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
            text: "Infected People by Country"
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
			<CanvasJSChart options = {options}/>
            <a href={"/countries"}>Return</a>
		</div>
		);
}

export default PieChart;