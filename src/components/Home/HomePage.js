import videoHomepage from '../../assets/video-homepage.mp4'


const HomePage = (props) => {

    return (
        <div className="homepage-container" >
            <video className='homepage-video' autoPlay loop muted>
                <source
                    src={videoHomepage}
                    type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='tittle'>There's a better way to ask</div>
                <div className='description'>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
                <div className='homepage-button'> <button className='homepage-button-main'>Get's started. It's free</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage;