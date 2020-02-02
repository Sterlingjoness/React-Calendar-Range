import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(originalMoment);

class Date extends React.Component {
    constructor(props, context) {
        super(props, context);

        const today = moment();

        this.state = {
            isOpen: true,
            value: moment.range(today.clone(), today.clone())
        };
    }

    onSelect = (value, states) => {
        this.setState({ value, states });
    };

    onToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    renderSelectionValue = () => {
        return (
            <div>
                <div>Your Selection: </div>
                {this.state.value.start.format("MM-DD-YYYY")}
                {" to "}
                {this.state.value.end.format("MM-DD-YYYY")}
            </div>
        );
    };

    render() {
        return (
            <div>
                <div>{this.renderSelectionValue()}</div>

                <div>
                    <input
                        type="button"
                        value="Toggle Calendar"
                        onClick={this.onToggle}
                    />
                </div>

                {this.state.isOpen && (
                    <DateRangePicker
                        value={this.state.value}
                        onSelect={this.onSelect}
                        minimumDate={Date.now()}
                        singleDateRange={true}
                    />
                )}
            </div>
        );
    }
}

export default Date;
