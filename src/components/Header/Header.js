import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
const Header = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);

    console.log(isAuthenticated);
    console.log(account)
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handleSignup = () => {
        navigate('/signup');
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">TNTT 21</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar-nav">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='users' className='nav-link'>User</NavLink>
                        <NavLink to='admin' className='nav-link'>Admin</NavLink>
                    </Nav>

                    <Nav>
                        {isAuthenticated === false ?
                            <>
                                < button className='btn-login' onClick={() => { handleLogin() }}>Log in</button>
                                <button className='btn-signup' onClick={() => { handleSignup() }}>Sign up</button>
                            </>
                            :
                            <NavDropdown title="Setting" id="basic-nav-dropdown">
                                <NavDropdown.Item >Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;