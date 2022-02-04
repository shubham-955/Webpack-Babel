import "./style.css";
import ReactDOM from "react-dom";
import react from "react"

// const i = react.createElement(
//     "i",
//     "Italic Text"
// )

const h1 = react.createElement(
    'h1',
    {
        className: 'colorForH1',
    },
    "Hello Webpack React"
);

ReactDOM.render(
    h1,
    document.getElementById('root')
)