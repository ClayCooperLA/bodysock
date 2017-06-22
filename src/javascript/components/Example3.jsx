import React from 'react';

import BodySockToggleLoop from 'components/BodySockToggleLoop';
import data from '../bodymovin/example4.json';

export default class Example3 extends React.Component {

    constructor() {
        super();

        this.state = {
            play: false,
            playSpeed: 0.5,
            currentFrame: 0,
            initialLoopSegment: [0, 24],
            toggleInSegment: [24, 48],
            toggleLoopSegment: [48, 72],
            toggleOutSegment: [72, 96],
            hover: false,
            faster: false,
        };
    }

    componentDidMount() {
        this.setState({
            play: true,
        });
    }

    handleComplete = () => {
        //console.log('hit last frame');
    };

    onClick = () => {
        if (this.state.faster) {
            this.setState({
                faster: false,
                playSpeed: 0.5,
            });
        } else {
            this.setState({
                faster: true,
                playSpeed: 0.2,
            });
        }
    };

    onCurrentFrame = (frame) => {
        // console.log('current frame:', frame);
        this.setState({
            currentFrame: frame,
        });
    };

    handleMouseEnter = () => {
        this.setState({
            hover: true,
        });
    };

    handleMouseLeave = () => {
        this.setState({
            hover: false,
        });
    };

    render() {
        const { hover, currentFrame, playSegment, initialLoopSegment, toggleInSegment, toggleLoopSegment, toggleOutSegment, playSpeed, play } = this.state;
        return (
            <div>
                <div className="content">
                    <h2>Example 3</h2>
                    <p><strong>Toggle Loop:</strong> Hover over graphic area to trigger toggle loop, hover out to see transition back to original loop</p>
                    <p>Bonus: Click the area while hovering to make it go faster!</p>
                    <p>FRAME: {currentFrame}</p>
                    <div
                        onClick={this.onClick}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    >
                        <BodySockToggleLoop
                            data={data}
                            totalFrames={96}
                            play={play}
                            playSpeed={playSpeed}
                            toggle={hover}
                            toggleOnce={false}
                            initialLoopSegment={initialLoopSegment}
                            toggleInSegment={toggleInSegment}
                            toggleLoopSegment={toggleLoopSegment}
                            toggleOutSegment={toggleOutSegment}
                            currentFrame={this.onCurrentFrame}
                            onComplete={this.handleComplete}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
