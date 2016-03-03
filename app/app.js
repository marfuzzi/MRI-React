// The inclusion of this top import upsets me a little and leads me to
// believe the package overrides for react-dom are not configured correctly.
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>Hello World!</div>,
    document.getElementById('app-container')
);