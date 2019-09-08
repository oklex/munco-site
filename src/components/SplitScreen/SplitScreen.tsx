import React from 'react'
import './SplitScreen.scss'

interface ISplitScreenProps {
    hideOnWrap?: boolean,
    children: JSX.Element,
}


class SplitScreen extends React.Component<ISplitScreenProps,{}> {

    getHideOnWrap = () => {
        if (this.props.hideOnWrap) {
            return 'hide-on-wrap'
        } else return ''
    }

    render() {
        return (
            <div className={'col-md-6 split-screen ' + this.getHideOnWrap()}>
                {this.props.children}
            </div>
        )
    }
}

export default SplitScreen