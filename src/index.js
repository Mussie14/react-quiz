import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Quiz";
import LionsExhibit from "./LionsExhibit";

class App extends Component {
    render() {
        return (
            <div>
                <Lions />
            </div>
        )
    }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));
