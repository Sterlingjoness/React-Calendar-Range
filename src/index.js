import React, { Component } from 'react'
import { render } from 'react-dom'
import DatePicker from './DatePicker'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const App = () => (
    <div style={styles}>
        <DatePicker />
    </div>
);

render(<App />, document.getElementById("root"));
