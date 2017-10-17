import React from 'react';
import bech32 from 'bech32_ecc';

class Bech32Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      validation: { error: null, pos: [] }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let newAddress = e.target.value;
    let result = bech32(newAddress, ['bc', 'tb']);
    console.log(result);
    this.setState(curState => {
      curState.address = newAddress;
      curState.validation = result;
      return curState;
    });
  }

  render() {
    let monoStyle = {
      fontFamily: 'monospace',
      fontSize: '1rem',
      width: '65ch',
      position: 'absolute',
      padding: '0.2em',
      margin: 0,
      overflow: 'hidden'
    };
    if (typeof this.props.style !== 'undefined') {
      if (typeof this.props.style.fontFamily !== 'undefined') {
        monoStyle.fontFamily = this.props.style.fontFamily;
      }
      if (typeof this.props.style.fontSize !== 'undefined') {
        monoStyle.fontSize = this.props.style.fontSize;
      }
    }

    let underlayStyle = Object.assign({
      color: 'transparent',
      top: '0.2em',
      left: '0.25em',
      height: '1.3em'
    }, monoStyle);
    let inputStyle = Object.assign({
      color: '#444',
      backgroundColor: 'transparent',
      border: 'solid 1px #CCC'
    }, monoStyle);

    let underlays = [];
    let message = false;
    if (this.state.validation.error !== null) {
      message = this.state.validation.error;
    } else {
      if (this.state.address != '') {
        inputStyle.backgroundColor = '#CFC';
      }
    }
    this.state.validation.pos.map(errorPos => {
      underlays.push(
        <span
          key={errorPos}
          style={{
            position: 'absolute',
            display: 'inline-block',
            left: errorPos + 'ch',
            width: '1ch',
            background: '#FCC',
            padding: 0
          }}
        >&#x2007;</span>
      );
    });
    return (
      <div className="address-input-wrapper" style={{ position: 'relative' }}>
        <div className="address-text-input-wrapper" style={{ height: '1.5em' }}>
          <div className="address-text-underlay" style={underlayStyle}>{underlays}</div>
          <input
            style={inputStyle}
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>
        <div className="address-input-errors" style={{ fontSize: '0.8rem', color: '#900' }}>{message}</div>
      </div>
    );
  }
}

export default Bech32Address;
