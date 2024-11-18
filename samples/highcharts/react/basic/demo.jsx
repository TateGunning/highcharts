import React from  'react';
import ReactDOM from 'react-dom';
import { Chart, Series } from 'highcharts-react-official';

export default function ChartComponent() {
    return (
        <div>
            <Chart title="hello">
                <Series type="line" data={[1, 2, 3]} />
            </Chart>
        </div>
    );
}

ReactDOM.createRoot(
    document.querySelector('#container')
)?.render(<ChartComponent />);


