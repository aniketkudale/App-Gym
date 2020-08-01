// Externals
import React from 'react';
// Internals
import Tooltip from './Tooltip/Tooltip';

function App () {
    return (
        <section>
            <h1>Minimal Tooltips</h1>
            <Tooltip title="Primary tooltip on top" position="top" type="primary">
                <button className="primary">Primary</button>
            </Tooltip>
            <Tooltip title="Success tooltip at bottom" position="bottom" type="success">
                <button className="success"> Success</button>
            </Tooltip>
            <Tooltip title="Danger tooltip on left" position="left" type="danger">
                <button className="danger">Danger</button>
            </Tooltip>
            <Tooltip title="Tooltip on right" position="right" type="warning">
                <button className="warning">Warning</button>
            </Tooltip>
        </section>
    );
}

export default App;