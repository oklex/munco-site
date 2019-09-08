import React from 'react'
import './SplitScreen.scss'

interface IFullScreenProps {
    hideOnMobile: boolean,
    children: JSX.Element[]
}

class FullScreen extends React.Component<IFullScreenProps,{}>{

    hideOnMobile = () => {
        if (this.props.hideOnMobile) {
            return ' hide-on-mobile'
        } else return ''
    }

    render() {
        return (
            <div className={'row full-screen' + this.hideOnMobile()}>{this.props.children}</div>
        )
    }
}

export default FullScreen