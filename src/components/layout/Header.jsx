import { observer } from "mobx-react";
import logo from "../../img/Artboard 2.png";
import stores from "../../stores/";
import { withRouter } from "react-router";
import { useEffect, useState } from "react";
import Auth from "../auth/auth";
import { AiOutlineUser } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";

const Header = (props) => {
  const [opencloseAuth, setOpenCloseAuth] = useState(false);
  const [openUserDrop, setOpenUserDrop] = useState(false);

  useEffect(() => {
    //checktoken
    !stores.userStore.userToken &&
      stores.userStore.setToken(localStorage.getItem('techaz'));
    //auth panel close
    stores.userStore.userToken && !stores.userStore.userInfo && stores.userStore.getUser('user/profile',{},stores.userStore.userToken);

    stores.userStore.userToken && setOpenCloseAuth(false);


  }, [stores.userStore.userToken]);

  return (
    <header className="header-desktop">
      <div className="header-desktop__content">
        <div
          className="header-desktop__content__logo"
          onClick={() => props.history.push("/esas")}
        >
          <img src={logo} alt="Logo" />
        </div>
        <nav className="header-desktop__content__navbar">
          <ul>
            <li
              className={props.location.pathname === "/esas" ? "active" : ''}
              onClick={() => props.history.push("/esas")}
            >
              əsas
            </li>
            <li
              className={props.location.pathname === "/xeberler" ? "active" : ''}
              onClick={() => props.history.push("/xeberler")}
            >
              xəbərlər
            </li>
            <li
              className={props.location.pathname === "/videolar" ? "active" : ''}
              onClick={() => props.history.push("/videolar")}
            >
              videolar
            </li>
            <li
              className={props.location.pathname === "/meqaleler" ? "active" :''}
              onClick={() => props.history.push("/meqaleler")}
            >
              məqalələr
            </li>
            <li
              className={props.location.pathname === "/haqqimizda" ? "active":''}
              onClick={() => props.history.push("/haqqimizda")}
            >
              haqqımızda
            </li>
          </ul>
        </nav>
        <div className="header-desktop__content__user">
          {stores.userStore.userToken ? (
            <div
              className="header-desktop__content__user__btn"
              onClick={() => setOpenUserDrop(!openUserDrop)}
            >
              <div className="userimage">
                {stores.userStore.userInfo && stores.userStore.userInfo.first_name.slice(0, 1)}
                {stores.userStore.userInfo && stores.userStore.userInfo.last_name.slice(0, 1)}
              </div>
              <span>
                {stores.userStore.userInfo && stores.userStore.userInfo.first_name}{" "}
                {stores.userStore.userInfo && stores.userStore.userInfo.last_name}
              </span>
              <div
                className={
                  openUserDrop ? "user-drop user-drop-show" : "user-drop"
                }
              >
                <ul>
                  <li>
                    <i>
                      <AiOutlineUser />
                    </i>
                    hesabım
                  </li>
                  <li>
                    <i>
                      <BsPlusCircle />
                    </i>
                    məqalə paylaş
                  </li>
                  <li>
                    <i>
                      <IoExitOutline />
                    </i>
                    çıxış
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <div className="header-desktop__content__user__btn">
                <button onClick={() => setOpenCloseAuth(!opencloseAuth)}>
                  məqalə paylaş
                </button>
              </div>
              <div className="header-desktop__content__user__btn">
                <button onClick={() => setOpenCloseAuth(!opencloseAuth)}>
                  daxil ol
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {opencloseAuth && (
        <Auth setOpenCloseAuth={() => setOpenCloseAuth(!opencloseAuth)} />
      )}
    </header>
  );
};

// export default process.browser
//   ? observer(withRouter(Header))
//   : withRouter(Header);

export default withRouter(observer(Header))