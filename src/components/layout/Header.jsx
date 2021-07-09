import { observer } from "mobx-react";
import logo from "../../img/Artboard 2.png";
import stores from "../../stores/";
import { Router, withRouter } from "react-router";
import { useEffect, useState } from "react";
import Auth from "../auth/auth";
import { AiOutlineUser } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import FormAddArticle from "../profile/FormAddArticle";
import { FiChevronUp } from "react-icons/fi";

const Header = (props) => {
  const [opencloseAuth, setOpenCloseAuth] = useState(false);
  const [openUserDrop, setOpenUserDrop] = useState(false);
  const [articlePanel, setArticlePanel] = useState(false);
  const activePath = props.location.pathname.split('/')[1]

  console.log(props);

  useEffect(() => {
    //checktoken
    !stores.userStore.userToken &&
      stores.userStore.setToken(localStorage.getItem('techaz'));
    //auth panel close
    stores.userStore.userToken && !stores.userStore.userInfo && stores.userStore.getUser('user/profile',{},stores.userStore.userToken);

    stores.userStore.userToken && setOpenCloseAuth(false);
    !stores.newsStore.tags && stores.newsStore.getTags("tags/", {});


  }, [stores.userStore.userToken]);



  return (
    <header id='7' className="header-desktop">
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
              className={activePath === "esas" || props.location.pathname === "/" ? "active" : ''}
              onClick={() => props.history.push("/esas")}
            >
              əsas
            </li>
            <li
              className={activePath === "xeberler" ? "active" : ''}
              onClick={() => props.history.push("/xeberler")}
            >
              xəbərlər
            </li>
            <li
              className={activePath === "videolar" ? "active" : ''}
              onClick={() => props.history.push("/videolar")}
            >
              videolar
            </li>
            <li
              className={activePath === "meqaleler" ? "active" :''}
              onClick={() => props.history.push("/meqaleler")}
            >
              məqalələr
            </li>
            <li
              className={activePath === "haqqimizda" ? "active":''}
              onClick={() => props.history.push("/haqqimizda")}
            > 
              haqqımızda
            </li>
          </ul>
        </nav>
        {/* <div className="header-desktop__content__user">
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
                  <li  onClick={() => props.history.push("/hesabim")}>
                    <i>
                      <AiOutlineUser />
                    </i>
                    hesabım
                  </li>
                  <li  onClick={() =>{
                      setArticlePanel(!articlePanel)
                  }}>
                    <i>
                      <BsPlusCircle />
                    </i>
                    məqalə paylaş
                  </li>
                  <li >
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
        </div> */}
      </div>
      {opencloseAuth && (
        <Auth setOpenCloseAuth={() => setOpenCloseAuth(!opencloseAuth)} />
      )}
            {/* //profile Create article panel */}

            <div
        className={
          articlePanel ? "form-article form-article-show" : "form-article"
        }
      >
        <FormAddArticle setArticlePanel={() => setArticlePanel(false)} />
      </div>
    
      <a href='#7' className='arrowIcon'><FiChevronUp/> </a>
    
    </header>
  );
};

// export default process.browser
//   ? observer(withRouter(Header))
//   : withRouter(Header);

export default withRouter(observer(Header))