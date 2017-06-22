import React from 'react';
import { a } from 'react-router';

export default class Home extends React.Component {

    state = {
        play: false,
        firstFrame: 0,
        lastFrame: 85,
        playSpeed: 3.5,
    };

    componentDidMount() {

    }

    handleCompleteLast = () => {
        console.log('hit last frame');
    };

    handleCompleteFirst = () => {
        console.log('hit first frame');
    };

    onClick = () => {

    };

    onCurrentFrame = (frame) => {
        // console.log('current frame:', frame);
    };

    render() {

        return (
            <div>
                <p className="intro-paragraph">
                    BodySock is a React wrapper component for Bodymovin that uses GreenSock’s TweenLite to animate the Bodymovin timeline. This allows for greater control of Bodymovin animations and is especially useful for interactivity. We can animate forward and backward along any segment of the timeline at any speed and at any time. We can even seamlessly move from one segment to another by specifying transitional segments between them (see ToggleLoop).
                </p>
                <h3>Examples:</h3>
                <div className="examples">

                    <div className="example">
                        <a href="/example1" className="example-a-wrap">
                            <div className="example-svg">
                                <svg version="1.1" width="245px" height="245px" viewBox="0 0 245 245">
                                    <rect opacity="0.76" fill="#FF4747" width="245" height="245"/>
                                    <rect x="52.5" y="122.5" fill="#FF1D1D" width="140" height="6.5"/>
                                </svg>
                            </div>
                            <h4>Example 1:</h4>
                            <h4>General Use.</h4>
                            <p>
                                Play, pause, auto play, play a segment forward or backward, loop, set speed and callbacks.
                                <br />
                                <br />
                                <strong>Learn more =></strong>
                            </p>
                        </a>
                    </div>

                    <div className="example">
                        <a href="/example2" className="example-a-wrap">
                            <div className="example-svg">
                                <svg version="1.1" width="245px" height="245px" viewBox="0 0 245 245">
                                    <rect opacity="0.76" fill="#FF4747" width="245" height="245"/>
                                    <rect x="52.5" y="125.8" transform="matrix(-0.6778 0.7353 -0.7353 -0.6778 300.3771 126.3582)" fill="#FF1D1D" width="140" height="6.5"/>
                                </svg>
                            </div>
                            <h4>Example 2:</h4>
                            <h4>Hovers.</h4>
                            <p>
                                Specify segments to play on mouse enter and leave, forward or backward, set different speeds for mouse enter and leave.
                                <br />
                                <br />
                                <strong>Learn more =></strong>
                            </p>
                        </a>
                    </div>

                    <div className="example">
                        <a href="/example3" className="example-a-wrap">
                            <div className="example-svg">
                                <svg version="1.1" width="245px" height="245px" viewBox="0 0 245 245">
                                    <rect opacity="0.76" fill="#FF4747" width="245" height="245"/>
                                    <g>
                                        <rect x="52.4" y="175.4" transform="matrix(-0.5 0.866 -0.866 -0.5 289.5652 189.6133)" fill="#FF1D1D" width="75.3" height="6"/>
                                        <rect x="52.4" y="175.4" transform="matrix(-0.8345 0.5511 -0.5511 -0.8345 263.4926 277.6439)" opacity="0.71" fill="#FF1D1D" width="75.3" height="6"/>
                                        <rect x="52.4" y="175.4" transform="matrix(-0.9942 0.1072 -0.1072 -0.9942 198.6898 346.1176)" opacity="0.6" fill="#FF1D1D" width="75.3" height="6"/>
                                        <rect x="52.4" y="175.4" transform="matrix(-0.9449 -0.3274 0.3274 -0.9449 116.7226 376.4425)" opacity="0.39" fill="#FF1D1D" width="75.3" height="6"/>
                                        <rect x="52.4" y="175.4" transform="matrix(-0.7744 -0.6327 0.6327 -0.7744 46.9156 373.5212)" opacity="0.28" fill="#FF1D1D" width="75.3" height="6"/>
                                        <rect x="52.4" y="175.4" transform="matrix(-0.4509 -0.8926 0.8926 -0.4509 -28.58 339.2123)" opacity="0.19" fill="#FF1D1D" width="75.3" height="6"/>
                                        <rect x="52.4" y="175.4" transform="matrix(6.123234e-17 -1 1 6.123234e-17 -88.351 268.4428)" opacity="0.15" fill="#FF1D1D" width="75.3" height="6"/>
                                    </g>
                                    <g>
                                        <rect x="60.3" y="104.5" transform="matrix(-0.5 0.866 -0.866 -0.5 291.3191 51.9491)" fill="#FF1FD0" width="140.7" height="11.2"/>
                                        <rect x="60.3" y="104.5" transform="matrix(-0.8345 0.5511 -0.5511 -0.8345 300.3526 129.9201)" opacity="0.71" fill="#FF1FD0" width="140.7" height="11.2"/>
                                        <rect x="60.3" y="104.5" transform="matrix(-0.9942 0.1072 -0.1072 -0.9942 272.3687 205.5071)" opacity="0.6" fill="#FF1FD0" width="140.7" height="11.2"/>
                                        <rect x="60.3" y="104.5" transform="matrix(-0.9449 -0.3274 0.3274 -0.9449 218.088 256.8546)" opacity="0.39" fill="#FF1FD0" width="140.7" height="11.2"/>
                                        <rect x="60.3" y="104.5" transform="matrix(-0.7744 -0.6327 0.6327 -0.7744 162.2148 277.9788)" opacity="0.28" fill="#FF1FD0" width="140.7" height="11.2"/>
                                        <rect x="60.3" y="104.5" transform="matrix(-0.4509 -0.8926 0.8926 -0.4509 91.3374 276.33)" opacity="0.19" fill="#FF1FD0" width="140.7" height="11.2"/>
                                        <rect x="60.3" y="104.5" transform="matrix(6.123234e-17 -1 1 6.123234e-17 20.592 240.7343)" opacity="0.15" fill="#FF1FD0" width="140.7" height="11.2"/>
                                    </g>
                                </svg>
                            </div>
                            <h4>Example 3:</h4>
                            <h4>ToggleLoop.</h4>
                            <p>
                                Seamless transistion between two different loops in a timeline. Specify the two loop segments as well as two transitional segments.
                                <br />
                                <br />
                                <strong>Learn more =></strong>
                            </p>
                        </a>
                    </div>

                    <div className="example example-4">
                        <a href="/example4" className="example-a-wrap">
                            <div className="example-svg">
                                <svg version="1.1" width="245px" height="245px" viewBox="0 0 245 245">
                                    <rect opacity="0.76" fill="#FF4747" width="245" height="245"/>
                                    <g>
                                        <rect x="67.7" y="133.2" transform="matrix(-0.5 0.866 -0.866 -0.5 291.2279 105.763)" fill="#FF1D1D" width="94.7" height="7.5"/>
                                        <rect x="67.7" y="133.2" transform="matrix(-0.8345 0.5511 -0.5511 -0.8345 286.5836 187.8174)" opacity="0.71" fill="#FF1D1D" width="94.7" height="7.5"/>
                                        <rect x="67.7" y="133.2" transform="matrix(-0.9942 0.1072 -0.1072 -0.9942 244.1782 260.7831)" opacity="0.6" fill="#FF1D1D" width="94.7" height="7.5"/>
                                        <rect x="67.7" y="133.2" transform="matrix(-0.9449 -0.3274 0.3274 -0.9449 178.9855 304.0334)" opacity="0.39" fill="#FF1D1D" width="94.7" height="7.5"/>
                                        <rect x="67.7" y="133.2" transform="matrix(-0.7744 -0.6327 0.6327 -0.7744 117.5624 315.8195)" opacity="0.28" fill="#FF1D1D" width="94.7" height="7.5"/>
                                        <rect x="67.7" y="133.2" transform="matrix(-0.4509 -0.8926 0.8926 -0.4509 44.7389 301.4254)" opacity="0.19" fill="#FF1D1D" width="94.7" height="7.5"/>
                                        <rect x="67.7" y="133.2" transform="matrix(6.123234e-17 -1 1 6.123234e-17 -21.869 252.0345)" opacity="0.15" fill="#FF1D1D" width="94.7" height="7.5"/>
                                    </g>
                                    <g>
                                        <rect x="77.8" y="108.1" transform="matrix(-0.5 0.866 -0.866 -0.5 291.2279 56.3144)" fill="#FF1FD0" width="103.1" height="8.2"/>
                                        <rect x="77.8" y="108.1" transform="matrix(-0.8345 0.5511 -0.5511 -0.8345 299.1455 134.5953)" opacity="0.71" fill="#FF1FD0" width="103.1" height="8.2"/>
                                        <rect x="77.8" y="108.1" transform="matrix(-0.9942 0.1072 -0.1072 -0.9942 269.9958 209.9471)" opacity="0.6" fill="#FF1FD0" width="103.1" height="8.2"/>
                                        <rect x="77.8" y="108.1" transform="matrix(-0.9449 -0.3274 0.3274 -0.9449 214.8426 260.6208)" opacity="0.39" fill="#FF1FD0" width="103.1" height="8.2"/>
                                        <rect x="77.8" y="108.1" transform="matrix(-0.7744 -0.6327 0.6327 -0.7744 158.5337 280.9789)" opacity="0.28" fill="#FF1FD0" width="103.1" height="8.2"/>
                                        <rect x="77.8" y="108.1" transform="matrix(-0.4509 -0.8926 0.8926 -0.4509 87.5183 278.2931)" opacity="0.19" fill="#FF1FD0" width="103.1" height="8.2"/>
                                        <rect x="77.8" y="108.1" transform="matrix(6.123234e-17 -1 1 6.123234e-17 17.13 241.5848)" opacity="0.15" fill="#FF1FD0" width="103.1" height="8.2"/>
                                    </g>
                                </svg>
                            </div>
                            <h4>Example 4:</h4>
                            <h4>ToggleLoop (once).</h4>
                            <p>
                                Tells the toggle loop to go back to the initial loop automatically with only one event, rather than having to trigger the toggle twice (on for the toggle loop, off to go back to initial loop).
                                <br />
                                <br />
                                <strong>Learn more =></strong>
                            </p>
                        </a>
                    </div>

                </div>
            </div>
        );
    }

}
