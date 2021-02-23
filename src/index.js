import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tid from "./tid.js";
import * as serviceWorker from './serviceWorker';

class ClockOne extends Tid {
    render() {
        return super.render();
    }
}
class ClockTwo extends Tid {
    render() {
        return super.render();
    }
}
class ClockThree extends Tid {
    render() {
        return super.render();
    }
}
class ClockFour extends Tid {
    render() {
        return super.render();
    }
}

class Keys extends React.Component {
    keydownHandler = (e) => {
        if (e.keyCode===97) {
            document.getElementById("pause1").click();
            } else if (e.keyCode===98) {
            document.getElementById("pause3").click();
            } else if (e.keyCode===99) {
                document.getElementById("pause5").click();
            } else if (e.keyCode===100) {
                document.getElementById("pause7").click();
            }
        }
        componentDidMount() {
            document.addEventListener('keydown',this.keydownHandler);
        }
        componentWillUnmount() {
            document.removeEventListener('keydown',this.keydownHandler);
        }
        render() {
        return(
            <div>
                <p/>
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <div className={'holder'}>
            <ClockOne />
            <ClockTwo />
            <ClockThree />
            <ClockFour />
            <Keys />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();