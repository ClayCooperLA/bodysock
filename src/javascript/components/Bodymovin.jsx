import React, { PropTypes } from 'react';
const bodymovin = require('../libs/bodymovin');

export default class Bodymovin extends React.Component {

    static propTypes = {
        animationData: PropTypes.object.isRequired,
        cleanUpInlineStyles: PropTypes.bool,
        prerender: PropTypes.bool,
        renderer: PropTypes.oneOf(['svg', 'canvas']),
    };

    static defaultProps = {
        prerender: false,
        renderer: 'svg',
    };

    componentDidMount() {
        this.setupAnimation(this.props);
        if (this.props.cleanUpInlineStyles) {
            this.cleanUpInlineStyles();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.animationData !== this.props.animationData) {
            this.setupAnimation(nextProps);
        }
        if (nextProps.cleanUpInlineStyles) {
            this.cleanUpInlineStyles();
        }
    }

    componentWillUnmount() {
        // remove for now, causing error
        this.anim.destroy();
    }

    cleanUpInlineStyles() {
        const container = this.container;
        // A crappy, hacky way to remove styles added from the bodymovin library
        // to the svg animation container it generates follows.
        // The point of it is to remove all uneeded inline styles to fix
        // IE 11 SVG display issues.
        const svg = container.children[0];
        svg.style.transform = "";
        svg.style.transformOrigin = "";
        svg.style.height = "";
    }

    setupAnimation(props) {
        if (this.anim) this.anim.destroy();
        this.anim = bodymovin.loadAnimation({
            container: this.container,
            renderer: props.renderer,
            loop: false,
            prerender: props.prerender,
            animationData: props.animationData,
        });
    }

    goToAndStop = (value, isFrame) => {
        return this.anim.goToAndStop(value, isFrame);
    };

    destroy() {
        return this.anim.destroy();
    }

    render() {
        return (
            <div
                className={this.props.className}
                ref={ref => this.container = ref}
            />
        );
    }

}
