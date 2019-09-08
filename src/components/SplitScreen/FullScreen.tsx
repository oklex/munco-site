import React from 'react'
import './SplitScreen.scss'

interface IFullScreenProps {
    hideOnMobile: boolean,
    children: JSX.Element[]
}

class FullScreen extends React.Component<IFullScreenProps,{}>{
    render() {
        return (
            <div className='full-screen'>{this.props.children}</div>
        )
    }
}

export default FullScreen