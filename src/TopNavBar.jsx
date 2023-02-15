import { BsFillBellFill, BsFillGearFill, BsPersonCircle } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import BookData from './Data.json'
// import CurrentAiContext from './CurrentAiContext'
import  React from 'react'
import logo from './images/peoplewelcomelogo3.png';
// import background from './images/blackandwhite2.png';


function TopNavBar() {
    /*
    const location = useLocation() // to keep track of the current route
    const [navClass, setNavClass] = useState('navbar invisible') // state of navbar classes
    */
    // const currentAi = useContext(CurrentAiContext).currentAi

    // navbar disappears on the login page

    /*
    useEffect(() => {
        if(location.pathname !== '/') {
            setNavClass('navbar')
        } else {
            setNavClass('navbar invisible')
        }
      }, [location])
    */

    return(
        <nav className='navbar'>
            <Link to='/'><img id='logo-head' src={logo} alt="People Welcome logo" /><div>People <br /> Welcome</div></Link>
            <SearchBar placeholder='Search for anything' data={BookData}/>
            {/* <h3>{`AI: ${currentAi}`}</h3> */}
            <ul>
                <li>
                    <NavLink to='/settings'>
                        <BsFillGearFill/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/notifications'>
                        <BsFillBellFill/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/myaccount'>
                        <BsPersonCircle/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default TopNavBar