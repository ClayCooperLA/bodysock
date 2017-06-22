import React, { PropTypes, Component } from 'react';

import BodySock from 'components/BodySock';

export default class BodySockToggleLoop extends React.Component {

    static propTypes = {
        data: PropTypes.object,
        totalFrames: PropTypes.number,
        play: PropTypes.bool,
        playSpeed: PropTypes.number,
        toggle: PropTypes.bool,
        toggleOnce: PropTypes.bool,
        initialLoopSegment: PropTypes.array,
        toggleInSegment: PropTypes.array,
        toggleLoopSegment: PropTypes.array,
        toggleOutSegment: PropTypes.array,
        currentFrame: PropTypes.func,
        onComplete: PropTypes.func,
    };

    constructor(props) {
        super();

        this.state = {
            playSegment: props.initialLoopSegment,
            toggled: props.toggle,
        };
    }

    componentDidMount() {
        this.toggleInThrottled = false;
        this.toggleOutThrottled = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.toggle !== this.props.toggle) {
            if (nextProps.toggle) {
                this.toggleLoopOn();
            } else {
                this.toggleLoopOff();
            }
        }
    }

    handleComplete = () => {
        this.props.onComplete();
    };

    onCurrentFrame = (frame, first, last, looped, fps, trueSpeed) => {
        this.fps = fps;
        this.trueSpeed = trueSpeed;
        const { initialLoopSegment, toggleLoopSegment, toggleOutSegment } = this.props;
        this.props.currentFrame(frame);

        // on every last frame
        if (looped) {
            if (this.state.toggled) {
                this.toggleOutThrottled = false;
                this.hasToggled = true;
                this.setState({
                    playSegment: toggleLoopSegment,
                });
            } else {
                if (this.hasToggled) {
                    this.hasToggled = false;
                    // wait until next loop cycle to allow last segment
                    const loopTime = this.calcPlaySpeed(toggleOutSegment);
                    setTimeout(() => {
                        this.hasExitedToggle = true;
                    }, loopTime * 1000);
                    this.setState({
                        playSegment: toggleOutSegment,
                    });
                }
                if (this.hasExitedToggle) {
                    this.hasExitedToggle = false;
                    this.toggleInThrottled = false;
                    this.setState({
                        playSegment: initialLoopSegment,
                    });
                }
            }
        }
    };

    calcFrameCount([firstFrame, lastFrame]) {
        return Math.abs(firstFrame - lastFrame);
    }

    calcPlaySpeed(playSegment) {
        return (this.calcFrameCount(playSegment) / this.fps) * this.trueSpeed;
    }

    toggleLoopOn = () => {
        const { toggleInSegment, playSpeed } = this.props;

        if (this.toggleInThrottled) return;
        clearTimeout(this.toggleOff);
        this.toggleInThrottled = true;
        this.toggleOutThrottled = true;

        this.setState({
            toggled: true,
            playSegment: toggleInSegment,
        });
    };

    toggleLoopOff = () => {
        const { toggleOutSegment, playSpeed } = this.props;
        const loopTime = this.calcPlaySpeed(toggleOutSegment);
        
        if (!this.toggleOutThrottled) {
            this.setState({
                toggled: false,
            });
        } else {
            this.toggleOutSegment = setTimeout(() => {
                this.setState({
                    toggled: false,
                });
            }, loopTime * 1000);
        }
    };

    render() {
        const { playSegment } = this.state;
        return (
            <BodySock
                data={this.props.data}
                totalFrames={this.props.totalFrames}
                className="bodysock-example-1"
                playSegment={playSegment}
                autoPlay={false}
                play={this.props.play}
                playDelay={0}
                playSpeed={this.props.playSpeed}
                loop={true}
                currentFrame={this.onCurrentFrame}
                onComplete={this.handleComplete}
                toggleLoop
            />
        );
    }
}
