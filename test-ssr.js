const React = require('react');
const ReactDOMServer = require('react-dom/server');
require('@babel/register')({
  presets: ['next/babel'],
  extensions: ['.ts', '.tsx']
});
const LightRays = require('./src/components/containers/LightRays').default;

try {
  console.log(ReactDOMServer.renderToString(React.createElement(LightRays)));
} catch (e) {
  console.error(e);
}
