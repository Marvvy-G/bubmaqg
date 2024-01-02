import React, {Component} from 'react';

class SingleService extends Component {
    render(){
        return (
            <div className="col-md-3" >
                        <span className="fa-stack fa-4x" >
                            <i className="fas fa-square fa-stack-2x " style={{color:"#aad7d9"}}></i>
                            <i className={`fas ${this.props.icon} fa-stack-1x fa-inverse`}></i>
                        </span>
                        <h4 className="my-4">{this.props.title}</h4>
                        <p className="text-muted">{this.props.description}</p>
            </div>
        )
    }
}

export default SingleService;