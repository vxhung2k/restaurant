import React, { useRef } from 'react'
import Proptypes from 'prop-types'
import { meal } from '../../constants';
import './Video.css'


const renderVideo = ({
    noControls,
    vidButtonRef,
    vidRef,
    handleToggleVideo,
}) => (
    <>
        {noControls ? (
            <div ref={vidButtonRef} className="video video__play-button" >
                <video
                    ref={vidRef}
                    src={meal}
                    onClick={handleToggleVideo}
                ></video>
            </div>
        ) : (
            <video
                src={meal}
                controls
            ></video>


        )}
    </>
);

const Video = (props) => {
    const vidRef = useRef(null);
    const vidButtonRef = useRef(null);
    const { noControls, src } = props
    const handlePlay = () => {
        vidRef.current.play()
        vidButtonRef.current.classList.add('is-playing')
    }
    const handlePause = () => {
        vidRef.current.pause()
        vidButtonRef.current.classList.remove('is-playing')
    }
    const handleToggleVideo = () => (
        vidRef.current.paused ? handlePlay() : handlePause()
    )
    return (
        <>
            <div className='showvideo'>
                {renderVideo({
                    noControls,

                    vidButtonRef,
                    vidRef,
                    handleToggleVideo,
                })}
            </div>

        </>
    )
}



export default Video