import './navBar.scss';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineMoon, HiSearch } from 'react-icons/hi';
import { BiGridAlt } from 'react-icons/bi';

const NavBar = () => {
  return (
    <div className='navbar'>

      <div className="left">
        <Link to='/home'>
          <span>
            Hello Social
          </span>
        </Link>
        <AiOutlineHome />
        <HiOutlineMoon />
        <BiGridAlt />
        <div className="search">
          <HiSearch />
          <input type="text" placeholder='search ...' />
        </div>
      </div>

      <div className="right">

      </div>
    </div>
  );
};

export default NavBar;