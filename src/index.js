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

ReactDOM.render(
    <React.StrictMode>
        <div className={'holder'}>
            <div className={'watches'}>
                <h1>Emil og Anna</h1>
                <ClockOne />
            </div>
            <div className={'watches'}>
                <h1>Sofie og Sebastian</h1>
                <ClockTwo />
            </div>
            <div className={'watches'}>
                <h1>Victoria og Rasmus</h1>
                <ClockThree />
            </div>
            <div className={'watches'}>
                <h1>Klara og Emil</h1>
                <ClockFour />
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();