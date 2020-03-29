import React from 'react';
import CanvasJSReact from '../../canvasjs.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart = props=> {

    const manageData = data =>{
        let matriz = {};
        let acumulador = 0;
        data.forEach(person=>{
            person.infect_date = person.infect_date.slice(0,10);
            
        });
        data.sort((a, b) => (a.infect_date > b.infect_date) ? 1 : -1);
        data.forEach(registro =>{
            let fecha = registro["infect_date"];
            matriz[fecha] = matriz[fecha] ? (matriz[fecha]+1):1;
        })
        matriz = Object.keys(matriz).map(function(fecha){
            return {x:new Date(fecha), y: acumulador+= matriz[fecha]}
        })
        return matriz;
    }


	const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Evolution of infected people by date"
        },
        axisY: {
            title: "Number of Infected People",
            includeZero: true,
            suffix: ""
        },
        axisX: {
            title: "Day",
            prefix: "",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Date {x}: Infected {y}",
            dataPoints: manageData(props.data)
        }]
	}
	return (
		<div>
			<CanvasJSChart options = {options}/>
		</div>
		);
}
export default Chart;                     