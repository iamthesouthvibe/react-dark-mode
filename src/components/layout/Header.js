import Navbar from 'react-bootstrap/Navbar';
import DarkMode from './DarkMode';


function Header() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                Cours REACT
            </Navbar.Brand>
            <DarkMode />
        </Navbar>
    )
}

export default Header;