import React from 'react'
import './SplitScreen.scss'

interface ISplitScreenProps {
    wrap: SplitscreenWrapSize,
    hideOnWrap?: boolean,
    imgBackground?: string,
    children: JSX.Element,
}

export enum SplitscreenWrapSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg'
}

class SplitScreen extends React.Component<ISplitScreenProps,{}> {

    getHideOnWrap = () => {
        if (this.props.hideOnWrap) {
            return 'hide-on-wrap'
        } else return ''
    }

    render() {
        return (
            <div className={'split-screen ' + this.props.wrap + this.getHideOnWrap()}>
                {this.props.children}
            </div>
        )
    }
}

export default SplitScreen