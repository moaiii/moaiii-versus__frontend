import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '@versus-store';
import actions from '@versus-actions';

function InputGenerator({...props}, callback) {
  return class InputGenerator extends Component {
    static propTypes = {
      props: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.number,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        required: PropTypes.bool.isRequired,
        min: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.object // null
        ]),
        max: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.object // null
        ]),
        disabled: PropTypes.bool,
        form: PropTypes.string,
        select: PropTypes.shape({
          isSelect: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.object // null
          ]),
          size: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.object // null
          ])
        }),
        options: PropTypes.shape({
          reducer: PropTypes.string,
          action: PropTypes.string
        }).isRequired,
        callback: PropTypes.func
      })
    }

    constructor(props) {
      super(props);

      this.state = {
        value: 1,
        hasMounted: false
      };
    }

    componentDidMount() {
      this.setState({
        value: props.value
      }, () => {
        console.log(this)
        if(!this.state.hasMounted) {
          if(props.select.isSelect) {
            let $ = props.options;
            store.dispatch(actions[$.reducer][$.action]());
          }
          this.setState({hasMounted: true})
        }
      })
      
    }
    
    handleChange = (e) => {
      let value = parseInt(e.target.value, 10);
      if(!isNaN(value)) {this.setState({value})}
      callback(props.name, value)
    }
    
    render() {
      const {value} = this.state;
      const {type, name, min, max, disabled} = props;

      const input = props.select.isSelect
        ? <select></select>
        : <input 
            type={type} 
            name={name}
            min={min}
            max={max}
            disabled={disabled}
            value={value}
            onChange={(e) => this.handleChange(e)}/>

      return(
        <div className={`FormInput --${props.name}`}>
          <p className={`FormInput__label`}>{props.name}</p>
          {input}
        </div>
      )
    }
  }
}

export default InputGenerator;