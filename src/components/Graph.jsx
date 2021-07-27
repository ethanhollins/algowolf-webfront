import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

class Graph extends Component
{
    constructor(props)
    {
        super(props);

        this.setCanvasRef = elem => {
            this.canvas = elem;
        }
    }

    state = {
        data: [],
        chart: null
    }

    componentDidMount()
    {
        this.createGraph(this.props.data);
    }

    componentDidUpdate()
    {
        this.updateData();
    }

    render()
    {

        return (
            <div 
                className="graph background primary"
                style={{
                    width: this.props.width,
                    height: this.props.height
                }}
            >
            
            <canvas 
                ref={this.setCanvasRef}
                className="graph body"
            />
            
            </div>
        );
    }

    createGraph(data)
    {
        const ctx = this.canvas.getContext("2d");
        // const { data } = this.state;
        const screen_width = this.props.getScreenWidth();

        let y_ticks;
        if (screen_width <= 580)
        {
            y_ticks = {
                beginAtZero: true,
                stepSize: 10,
                callback: function(value, index, values) { 
                    return '';
                }
            }
        }
        else
        {
            y_ticks = {
                beginAtZero: true,
                stepSize: 10
            }
        }

        let x_props;
        if (this.props.showXTicks)
        {
            x_props = {};
        }
        else
        {
            x_props = {
                ticks: {
                    maxTicksLimit: 12,
                    callback: function(value, index, values) { 
                        return '';
                    }
                }
            }
        }

        let datasets;
        if (this.props.data)
        {
            datasets = [{
                label: this.props.label,
                data: this.props.data,
                backgroundColor: this.props.backgroundColor,
                borderColor: this.props.borderColor,
                borderWidth: 2,
                fill: true
            }];
        }

        const chart = new Chart(ctx, {
            type: this.props.type,
            data: {
                datasets: datasets
            },
            options: {
                plugins: {
                    legend: {
                        display: this.props.showLabel
                    }
                },
                scales: {
                    y: {
                        ticks: y_ticks
                    },
                    x: x_props
                },
                elements: {
                    point:{
                        radius: 0
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        });

        this.setState({ chart });
    }

    updateData()
    {
        let { chart } = this.state;

        if (this.props.isGraphUpdate())
        {
            chart.data.datasets = [{
                label: this.props.label,
                data: this.props.data,
                backgroundColor: this.props.backgroundColor,
                borderColor: this.props.borderColor,
                borderWidth: 2,
                fill: true
            }];
            chart.update();
            this.props.setGraphUpdate(false)
        }
    }

}

export default withRouter(Graph);
