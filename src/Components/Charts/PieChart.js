import React from 'react';
import CanvasJSReact from '../../canvasjs.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = props=> {
    
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
            dataPoints: manageData(props.data)
        }]
	}


    return (
		<div>
			<CanvasJSChart options = {options}/>
		</div>
		);
}

export default PieChart;