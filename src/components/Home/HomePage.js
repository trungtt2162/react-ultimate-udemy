import videoHomepage from '../../assets/video-homepage.mp4'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HomePage = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
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
                <div className='homepage-button'>
                    {isAuthenticated === false ?
                        <button onClick={() => { navigate('/login') }} className='homepage-button-main'>Get's started. It's free</button> :
                        <button onClick={() => { navigate('/users') }} className='homepage-button-main'>Doing quiz now</button>
                    }
                </div>
            </div>
        </div>
    )
}
export default HomePage;