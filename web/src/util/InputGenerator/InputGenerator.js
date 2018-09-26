import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '@versus-store';
import actions from '@versus-actions';
import inputGeneratorPropTypes from './inputGenerator.proptypes'

export default ({ ...props }, callback) => {

  return class InputGenerator extends Component {

    static propTypes = {

      ...inputGeneratorPropTypes
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
        if (!this.state.hasMounted) {
          if (props.select.isSelect) {
            let $ = props.options;
            store.dispatch(actions[$.reducer][$.action]());
          }
          this.setState({ hasMounted: true })
        }
      })

    }

    handleChange = e => {
      let value = parseInt(e.target.value, 10);
      if (!isNaN(value)) { this.setState({ value }) }
      callback(props.name, value)
    }

    render() {
      const { value } = this.state;
      const { type, name, min, max, disabled } = props;

      const input = props.select.isSelect
        ? <select></select>
        : <input {...{
          type: type,
          name: name,
          min: min,
          max: max,
          disabled: disabled,
          value: value,
          onChange: this.handleChange
        }} />

      return (
        <div className={`FormInput --${props.name}`}>
          <p className={`FormInput__label`}>{props.name}</p>
          {input}
        </div>
      )
    }
  }
}