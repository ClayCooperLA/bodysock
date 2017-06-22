import React from 'react';

import BodySock from 'components/BodySock';
import data from '../bodymovin/data.json';

export default class Example1 extends React.Component {

    constructor() {
        super();

        this.state = {
            play: false,
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

    render() {
        const { currentFrame, playSegment, playSpeed, play, pause } = this.state;
        return (
            <div>
                <div className="content">
                    <h2>Example 1</h2>
                    <p>Play forward on a loop</p>
                    <p>FRAME: {currentFrame}</p>
                    <div
                        onClick={this.onClick}
                    >
                        <BodySock
                            data={data}
                            totalFrames={85}
                            className="bodysock-example-1"
                            playSegment={playSegment}
                            autoPlay={false}
                            play={play}
                            pause={pause}
                            playDelay={0}
                            playSpeed={playSpeed}
                            loop={true}
                            onComplete={this.handleComplete}
                            currentFrame={this.onCurrentFrame}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
