/**
 * Created by prayasha on 7/2/17.
 */
/**
 * Created by prayasha on 6/30/17.
 */
import React, { Component } from 'react';
import fetch from 'node-fetch';
import moment from 'moment';

class table extends Component{

    constructor(){
        super();
        this.state = {
            observation : []
        }
    }

    componentWillMount(){
        let observationPromise = []
        this.props.dataSeries.map(series => {
            observationPromise.push(fetch(`http://kishankolagi.org/api-public/observation?series_id=${series.id}&date_from=${moment().format('YYYY-MM-DD')}&date_to=${moment().format('YYYY-MM-DD')}`).then(res => res.json()));
        });
       Promise.all(observationPromise)
           .then(res => {
               // console.log(res);
               // this.setState({observation:res})
                res.map(series => {
                    let name = series.name.split('_');

                })
           })
    }

    render(){
        const dataSeries = this.props.dataSeries;
        return(
            <div>
                <table>
                    <tbody>
                    {
                        this.state.observation.map(series => {
                            return(
                                <tr>
                                    <td>{series.parameter_name}</td>
                                    <td>{series.data ? series.data[series.data.length -1] : 'N/A'}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default table;