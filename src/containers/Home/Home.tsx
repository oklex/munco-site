import React from 'react'
import FullScreen from '../../components/SplitScreen/FullScreen'
import SplitScreen, { SplitscreenWrapSize } from '../../components/SplitScreen/SplitScreen'
import './Home.scss'

class Home extends React.Component<{},{}> {
    render() {
        return (
            <div className='home-hero'>
                <div className='row full-screen'>
                    <div className='col-md-6 split-screen'><h1>Left side</h1></div>
                    <div className='col-md-6 split-screen'><h1>Right side</h1></div>
                </div>
            </div>
        )
    }
}

export default Home