import { observer } from "mobx-react";
import logo from "../../img/Artboard 2.png";
import stores from "../../stores/"
import { withRouter } from "react-router";
import { useState } from "react";
import Auth from "../auth/auth";

const Header = (props) => {
  const [opencloseAuth,setOpenCloseAuth] = useState(false)

    return (
    <header className="header-desktop">
      <div className="header-desktop__content">
        <div className="header-desktop__content__logo" onClick={() => props.history.push('/esas')}>
          <img src={logo} alt="Logo" />
        </div>
        <nav className="header-desktop__content__navbar">
          <ul>
            <li className={props.location.pathname === '/esas' && 'active'} onClick={() => props.history.push('/esas')}>əsas</li>
            <li className={props.location.pathname === '/xeberler' && 'active'} onClick={() => props.history.push('/xeberler')}>xəbərlər</li>
            <li className={props.location.pathname === '/videolar' && 'active'} onClick={() => props.history.push('/videolar')}>videolar</li>
            <li className={props.location.pathname === '/meqaleler' && 'active'} onClick={() => props.history.push('/meqaleler')}>məqalələr</li>
            <li className={props.location.pathname === '/haqqimizda' && 'active'} onClick={() => props.history.push('/haqqimizda')}>haqqımızda</li>
          </ul>
        </nav>
        <div className="header-desktop__content__user">
          {/* <div className="header-desktop__content__user__btn">
            <div className="userimage">SR</div>
            <span>Sarkhan Rahimli</span>
          </div> */}
             <div className="header-desktop__content__user__btn">
                <button onClick={() => setOpenCloseAuth(!opencloseAuth)}>məqalə paylaş</button>
            </div>
           <div className="header-desktop__content__user__btn">
                <button  onClick={() => setOpenCloseAuth(!opencloseAuth)}>daxil ol</button>
            </div>
        </div>
      </div>

      {opencloseAuth && (
          <Auth
            setOpenCloseAuth={() => setOpenCloseAuth(!opencloseAuth)}
          />
        )}

    </header>
  );
};

export default process.browser
  ? observer(withRouter(Header))
  : withRouter(Header);