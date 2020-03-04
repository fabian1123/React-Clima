import React from "react";
import WeatherCard from "./WeatherCard";
import { cargarClima } from "./Api";

class WeatherBarApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        cargarClima().then(data => {
            this.setState({
                data: data
            });
        });
    }

    render(){
        return (
            <div>
                <div className="clima-barra">
                    {this.state.data && this.state.data.map((d, index) => <WeatherCard key={index} weather={d} />)}
                </div>
            </div>
        )
    }
}

export default WeatherBarApi;