import React, { PropTypes, PureComponent } from 'react';
import memoize from 'lodash/memoize';
import Bodymovin from '/components/Bodymovin';

export default class BodySock extends PureComponent {

    static propTypes = {
        data: PropTypes.object.isRequired,
        totalFrames: PropTypes.number.isRequired,
        className: PropTypes.string,
        playSegment: PropTypes.array,
        autoPlay: PropTypes.bool,
        play: PropTypes.bool,
        pause: PropTypes.bool,
        playDelay: PropTypes.number,
        playSpeed: PropTypes.number,
        loop: PropTypes.bool,
        onComplete: PropTypes.func,
        currentFrame: PropTypes.func,
        continuous: PropTypes.bool,
        toggleLoop: PropTypes.bool,
    };

    static defaultProps = {
        autoPlay: true,
        playDelay: 0,
        loop: false,
    };

    constructor(props) {
        super();

        this.fps = 24;
        this.trueSpeed = props.totalFrames / this.fps;
        const frameCount = props.playSegment ? this.calcFrameCount(props.playSegment) : props.totalFrames;

        if (props.playSpeed) {
            this.trueSpeed = props.playSpeed;
        }

        this.state = {
            playSpeed: props.playSpeed ? this.calcPlaySpeed(props.playSegment) : this.trueSpeed,
            frameCount,
        };

        this.bodymovin = {
            frame: 0,
        };
    }

    componentDidMount() {
        if (this.props.autoPlay) {
            this.playBodyMovin(this.props.playDelay);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.play !== this.props.play && nextProps.play) {
            this.playBodyMovin(this.props.playDelay);
        }
        if (nextProps.playSegment !== this.props.playSegment) {
            this.setState(() => {
                return {
                    frameCount: this.calcFrameCount(nextProps.playSegment),
                    playSpeed: nextProps.playSegment ? this.calcPlaySpeed(nextProps.playSegment) : this.trueSpeed,
                };
            }, () => {
                if (!this.props.toggleLoop) {
                    this.playBodyMovin(0);
                }
            });
        }
        if (nextProps.playSpeed !== this.props.playSpeed) {
            this.trueSpeed = nextProps.playSpeed;
            this.setState(() => {
                return {
                    playSpeed: this.props.playSegment ? this.calcPlaySpeed(this.props.playSegment) : this.trueSpeed,
                };
            });
        }
    }

    componentWillUnmount() {
        this.killAllTweens();
        this.killLoop = true;
        this.bodymovinRef.destroy();
    }

    calcFrameCount([firstFrame, lastFrame]) {
        return Math.abs(firstFrame - lastFrame);
    }

    calcPlaySpeed(playSegment) {
        if (!playSegment) {
            return this.trueSpeed;
        }
        return (this.calcFrameCount(playSegment) / this.fps) * this.trueSpeed;
    }

    killAllTweens() {
        TweenLite.killTweensOf(this.bodymovin);
    }

    updateHandler = memoize(([first, last]) => () => {
        if (this.killLoop) return;

        if (this.bodymovin.frame < first) {
            this.bodymovin.frame = first;
            this.killAllTweens();

        } else if (this.bodymovin.frame > last) {
            this.bodymovin.frame = last;
            this.killAllTweens();
        }

        let looped;
        // callbacks for completion
        if (this.bodymovin.frame === last) {
            this.onComplete();
            looped = true;  
        } else {
            looped = false;
        }

        this.bodymovinRef.goToAndStop(this.bodymovin.frame, true);
        this.props.currentFrame(this.bodymovin.frame, first, last, looped, this.fps, this.trueSpeed);
    });

    playBodyMovin(delay = 0) {
        const { frameCount, playSpeed, totalFrames } = this.state;
        const { playSegment, continuous } = this.props;
        let firstFrame; let lastFrame;
        if (playSegment) {
            [firstFrame, lastFrame] = playSegment;
        } else {
            firstFrame = 0;
            lastFrame = totalFrames;
        }
        const isForward = (lastFrame - firstFrame) > 0;
        const segments = isForward ? playSegment : playSegment.reverse();
        const op = isForward ? '+' : '-';

        this.killAllTweens();
        // if not in range set first frame
        // if continuous overrides check to make sure the first frame is within the current range
        if (continuous) {
            if (segments[1] >= this.bodymovin.frame <= segments[0]) {
                TweenLite.set(this.bodymovin, {
                    frame: firstFrame,
                });
            }
        } else {
            // if not reset to first frame
            TweenLite.set(this.bodymovin, {
                frame: firstFrame,
            });
        }

        TweenLite.delayedCall(delay, () => {
            TweenLite.to(this.bodymovin, playSpeed, {
                frame: `${op}=${frameCount}`,
                onUpdate: this.updateHandler(segments),
                ease: Linear.easeNone,
            });
        });
    }

    onComplete = () => {
        const { loop } = this.props;
        if (loop) {
            this.playBodyMovin(0);
        }
        this.props.onComplete();
    };

    render() {
        const className = this.props.className ? `bodysock ${this.props.className}` : 'bodysock';
        return (
            <div
                className={className}
            >
                <Bodymovin
                    animationData={this.props.data}
                    renderer="svg"
                    ref={ref => this.bodymovinRef = ref}
                    cleanUpInlineStyles
                />
            </div>
        );
    }
}
