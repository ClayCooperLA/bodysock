import React from 'react';

import BodySock from 'components/BodySock';
import data from '../bodymovin/data.json';

export default class Example2 extends React.Component {

    constructor() {
        super();

        this.state = {
            play: false,
            pause: false,
            currentFrame: 0,
            playSegment: [0, 85],
            playSpeed: 0.5,
        };
    }

    componentDidMount() {
        this.play();
    }

    play() {
        this.setState({
            play: true,
        });
    }

    pause() {
        this.setState({
            pause: true,
        });
    }

    handleComplete = () => {
        console.log('last frame');
    };

    onClick = () => {
        console.log('movin clicked');

        this.setState({
            playSegment: [30, 50],
        }, () => {
            this.play();
        });
    };

    onCurrentFrame = (frame) => {
        // console.log('current frame:', frame);
        this.setState({
            currentFrame: frame,
        });
    };

    handleMouseEnter = () => {
        this.setState({
            playSegment: [0, 85],
            playSpeed: 0.3,
        });
    };

    handleMouseLeave = () => {
        this.setState({
            playSegment: [85, 0],
            playSpeed: 0.7,
        });
    };

    render() {
        const { currentFrame, playSegment, playSpeed, play } = this.state;
        return (
            <div>
                <div className="content">
                    <h2>Example 2</h2>
                    <p>Play forward, mouse enter forward, mouse leave backward</p>
                    <p>FRAME: {currentFrame}</p>
                    <div
                        onClick={this.onClick}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    >
                        <BodySock
                            data={data}
                            totalFrames={85}
                            className="bodysock-example-1"
                            playSegment={playSegment}
                            autoPlay={false}
                            play={play}
                            playDelay={0}
                            playSpeed={playSpeed}
                            loop={false}
                            onComplete={this.handleComplete}
                            currentFrame={this.onCurrentFrame}
                            continuous
                        />
                    </div>
                </div>
            </div>
        );
    }
}
