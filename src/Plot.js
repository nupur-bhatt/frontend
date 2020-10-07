import axios from 'axios';
import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class Plot extends Component {

    constructor(){
        super();
        this.state = {
            data : []
        }
    }

   async componentDidMount(){
        let res = await axios.get('https://backend-plot-numbers.herokuapp.com/');
        let data = res.data;

        console.log(data);
        this.setState({data});
    }

    render() { 
        const options = {
            chart:{
              type:'column'
            },
            title: {
              text: 'Trend'
            },
            series: [{
                name: 'Random Numbers',
                data: this.state.data
            }],
            colors: [
              '#FFA500'
            ]
          }
      
        return ( 
            <div>

            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            </div>
            
         );
    }
}
 
export default Plot;

