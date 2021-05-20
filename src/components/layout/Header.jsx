import { observer } from "mobx-react";
import logo from "../../img/Artboard 2.png";
// import stores from "../../stores/"
import { withRouter } from "react-router";

const Header = (props) => {
  
    return (
    <header className="header-desktop">
      <div className="header-desktop__content">
        <div className="header-desktop__content__logo" onClick={() => props.history.push('/esas')}>
          <img src={logo} alt="Logo" />
        </div>
        <nav className="header-desktop__content__navbar">
          <ul>
            <li className='active' onClick={() => props.history.push('/esas')}>əsas</li>
            <li onClick={() => props.history.push('/xeberler')}>xəbərlər</li>
            <li onClick={() => props.history.push('/videolar')}>videolar</li>
            <li onClick={() => props.history.push('/meqaleler')}>məqalələr</li>
            <li onClick={() => props.history.push('/haqqimizda')}>haqqımızda</li>
          </ul>
        </nav>
        <div className="header-desktop__content__user">
          <div className="header-desktop__content__user__btn">
            <div className="userimage">SR</div>
            <span>Sarkhan Rahimli</span>
          </div>
             {/* <div className="header-desktop__content__user__btn">
                <button>məqalə paylaş</button>
            </div>
           <div className="header-desktop__content__user__btn">
                <button>daxil ol</button>
            </div> */}
        </div>
      </div>
    </header>
  );
};

// export default process.browser
//   ? observer(withRouter(Header))
//   : withRouter(Header);
export default withRouter(Header)