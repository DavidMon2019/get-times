import React, { Component } from 'react';

class StopWatch extends Component {
    getInitialState() {
        return {
            isStart: false,
            elapsed: 0,
            diff: 0,
            laps: [],
        };
    }
    componentWillUnmount() { // clear timer
        clearInterval(this.state.timer);
        this.setState({ timer: undefined });
    }
    tick() {
        var elapsed = Date.now() - this.state.start + this.state.diff;
        this.setState({ elapsed: elapsed });
    }
    getTimeSpan(elapsed) { // 754567(ms) -> "12:34.567"
        var m = String(Math.floor(elapsed / 1000 / 60) + 100).substring(1);
        var s = String(Math.floor((elapsed % (1000 * 60)) / 1000) + 100).substring(1);
        var ms = String(elapsed % 1000 + 1000).substring(1);
        return m + ":" + s + "." + ms;
    }
    onClick() {
        if (!this.state.isStart) { // start
            var timer = setInterval(this.tick, 33);
            this.setState({
                isStart: true,
                timer: timer,
                start: new Date(),
            });
        } else { // pause
            clearInterval(this.state.timer);
            this.setState({
                timer: undefined,
                isStart: false,
                diff: this.state.elapsed,
            });
        }
    }
    setLap() {
        var lapElapsed = this.state.laps.length ? this.state.laps[0].elapsed : 0;
        var lapTitle = "Lap" + (this.state.laps.length + 1);
        var lapTime = lapTitle + ": " + this.getTimeSpan(this.state.elapsed - lapElapsed)
        var lapElem = { label: lapTime, elapsed: this.state.elapsed };
        this.setState({ laps: [lapElem].concat(this.state.laps) });
    }
    reset() {
        clearInterval(this.state.timer);
        this.setState({
            timer: undefined,
            isStart: false,
            elapsed: 0,
            diff: 0,
            laps: [],
        });
    }
    render() {
        return (
            <div>
                <h1>{this.getTimeSpan(elapsed)}</h1>
                <button onClick={this.onClick} style={style.button}>
                    {this.state.isStart ? "pause" : "start"}
                </button>
                <button onClick={this.setLap} style={style.button}>lap</button>
                <button onClick={this.reset} style={style.button}>reset</button>
                <ul style={style.lap}>
                    {this.state.laps.map(function (lap) {
                        return <li>{lap.label}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default StopWatch;