import React, {Component} from 'react';

class Field extends Component {
    render(){
        return(
            <div className="form-group">             
                {this.props.elementName === 'input' ?
                    <input 
                        className="form-control" 
                        id={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        data-sb-validations="required" 
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        /> 
                    
                    :
                          <div className="col-md-6">
                            
                            <div className="form-group form-group-textarea mb-md-0"> 
                            <textarea 
                                className="form-control" 
                                id={this.props.name}
                                placeholder={this.props.placeholder}
                                data-sb-validations="required"
                                name={this.props.name}
                                onChange={this.props.onChange}
                                onBlur={this.props.onBlur}
                            />
                               
                            </div> 
                        </div>
                   
               }
             <p className="help-block text-danger">

            {
            (this.props.touched  && this.props.errors) && 
            <span style={{color:"red"}}>{this.props.errors}</span>
            }
            </p> 

            </div>
        )
    }
}

export default Field;