define(['react', 'react-dom', 'Bech32Address'], function (_react, _reactDom, _Bech32Address) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _Bech32Address2 = _interopRequireDefault(_Bech32Address);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _reactDom2.default.render(_react2.default.createElement(_Bech32Address2.default), document.getElementById('container'));
});