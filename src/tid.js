import React from "react";
import './App.css';
import _uniqueId from 'lodash/uniqueId';

class Tid extends React.Component {
    state = {
        startTime: 0,
        updatedTime: 0,
        difference: 0,
        tInterval: 0,
        savedTime: 0,
        paused: 0,
        running: 0,
        hours: "00",
        minutes: "00",
        seconds: "00",
        milliseconds: "00",
        uniqueId: "",
    };

    startTimer = () => {
        if(!this.state.running){
            this.setState({startTime:new Date().getTime()});
            this.setState({tInterval: setInterval(this.getShowTime, 1)});
            // change 1 to 1000 above to run script every second instead of every millisecond.
            // one other change will be needed in the getShowTime() function below for this to work. see comment there.
            this.setState({paused: 0});
            this.setState({running: 1});
        }
    }

    getShowTime = () => {
        this.setState({updatedTime: new Date().getTime()});
        if (this.state.savedTime){
            this.setState({difference: (this.state.updatedTime - this.state.startTime) + this.state.savedTime});
        } else {
            this.setState({difference:  this.state.updatedTime - this.state.startTime});
        }
        // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.setState({hours: Math.floor((this.state.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))});
        this.setState({minutes: Math.floor((this.state.difference % (1000 * 60 * 60)) / (1000 * 60))});
        this.setState({seconds: Math.floor((this.state.difference % (1000 * 60)) / 1000)});
        this.setState({milliseconds: Math.floor((this.state.difference % 1000) / 10)});

        this.setState({hours: (this.state.hours < 10) ? "0" + this.state.hours : this.state.hours});
        this.setState({minutes: (this.state.minutes < 10) ? "0" + this.state.minutes : this.state.minutes});
        this.setState({seconds: (this.state.seconds < 10) ? "0" + this.state.seconds : this.state.seconds});
        this.setState({milliseconds: (this.state.milliseconds < 10) ? "0" + this.state.milliseconds : this.state.milliseconds });
    }

    pauseTimer = () => {
        if (!this.state.difference){
            // if timer never started, don't allow pause button to do anything
        } else if (!this.state.paused) {
            this.setState({savedTime: this.state.difference});
            this.setState({paused: 1})
            this.setState({running: 0})
            clearInterval(this.state.tInterval);
        } else {
            //this.startTimer();
        }
    }

    resetTimer = () => {
        clearInterval(this.state.tInterval);
        this.setState({savedTime: 0})
        this.setState({difference: 0})
        this.setState({paused: 0})
        this.setState({running: 0})
        this.setState({minutes: "00"})
        this.setState({seconds: "00"})
        this.setState({milliseconds: "00"})
    }

    keydownHandler = (e) => {
        if(e.keyCode===111) {
            this.pauseTimer();
        } else if (e.keyCode===107) {
            this.startTimer();
        } else if (e.keyCode===109) {
            this.resetTimer();
        } else if (e.keyCode===97) {
            document.getElementById("pause1").click();
        } else if (e.keyCode===98) {
            document.getElementById("pause2").click();
        } else if (e.keyCode===99) {
            document.getElementById("pause3").click();
        } else if (e.keyCode===100) {
            document.getElementById("pause4").click();
        }
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({running:0});
        }, 50);
        this.setState({uniqueId: _uniqueId()});
        document.addEventListener('keydown',this.keydownHandler);
    }

    componentWillUnmount() {
        clearTimeout(this.startTimer);
        document.removeEventListener('keydown',this.keydownHandler);
    }

    render() {
        return(
            <div className={'Ur'}>
                <div className={'tid'}>
                    <h1>{this.state.minutes}:{this.state.seconds}:{this.state.milliseconds}</h1>
                </div>
                <div className={'control'}>
                    <button className={'start'} onClick={this.startTimer}>Start</button>
                    <button className={'pause'} id={'pause'+this.state.uniqueId} onClick={this.pauseTimer}>Pause</button>
                    <button className={'reset'} onClick={this.resetTimer}>Nulstil</button>
                </div>
            </div>
        )
    }
}
export default Tid;