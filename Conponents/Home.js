import React from 'react';
import searchinput from './searchinput';
import {Link} from 'react-router';
import fetch from 'node-fetch';
import Table from './table';

const urlname= 'http://kishankolagi.org/api-public/station/1/data-series';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dataSeries : [],
            requestFailed: false
        }
    }

    componentDidMount(){
        fetch(urlname)
            .then((response) => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }
                return response
            }).then(res => {
                return res.json();
        }).then(data => {
            console.log(data);
            this.setState({dataSeries:data})
        })
    }
    render() {
        return (
            <div className='app'>
                <div className="Home-header"> </div>
                <div className="App-introbox"></div>
                <h1 className="App-intro">Kishan Ko Lagi</h1>
                <div className= "image-cropper">
                <img src="http://img.diytrade.com/cdimg/1977841/29011769/-1/1350214680/Real_Time_Solutions_Pvt_Ltd.jpg"/>
                </div>
                <searchinput/>
                {this.state.dataSeries.length > 0 && <Table dataSeries={this.state.dataSeries} />}
            </div>

        );
    }

}

export default Home;