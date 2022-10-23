import './navBar.scss';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { HiOutlineMoon, HiSearch } from 'react-icons/hi';
import { BiGridAlt } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';

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
      <AiOutlineUser/>
      <AiOutlineMail/>
      <IoMdNotificationsOutline/>
      <div className="user">
        <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg" alt="" />
        <span>Hujaifa Hossain</span>
      </div>
      </div>
    </div>
  );
};

export default NavBar;