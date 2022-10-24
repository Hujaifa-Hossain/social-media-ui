import './rightBar.scss';

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="user-info">
          <div className="user">
            <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg" alt="" />
            <span>Hujaifa Hosssain</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>
        <div className="user-info">
          <div className="user">
            <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg" alt="" />
            <span>Hujaifa Hosssain</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;