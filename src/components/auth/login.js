import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { observer } from "mobx-react";
import stores from "../../stores/";

let LoginPopup = (props) => {

  //hooks
  const [passwordShow, setPasswordShow] = useState(false);
  const [handlerNumber, setHandlerNumber] = useState(null);
  const [handlerPassword, setHandlerPassword] = useState(null);
  const [disableBtn, setDisabled] = useState(false);

  //props
  const { setOpenCloseAuth, setRegisterPopup } = props;

  useEffect(() => {
    // setDisabled(false);
  }, [stores.userStore.userAuth, stores.userStore.userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { username: handlerNumber, password: handlerPassword };

    const formdata = new FormData()

    formdata.append('username',formData.username )
    formdata.append('password',formData.password )


    console.log(formData);
    stores.userStore.login(formdata);
    // setDisabled(!disableBtn);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login-popup__content form_height">
          <div className="login-popup__content__header">
            <button className="auth-active">Daxil ol</button>
            <button onClick={() => setRegisterPopup()}>Qeydiyyatdan keç</button>
          </div>
          <div className="login-popup__content__form">
            <div
              className={
                // stores.userStore.userAuth
                //   ? stores.userStore.userAuth.data.username
                //     ? "input-group error-border"
                //     : "input-group success-border"
                  // : 
                  "input-group"
              }
            >
              <input
                value={handlerNumber ? handlerNumber : ''}
                onChange={(e) => setHandlerNumber(e.target.value)}
              />

              {/* {stores.userStore.userAuth && (
                <p className="error-message">
                  {stores.userStore.userAuth.data.username}
                </p>
              )} */}
            </div>
            <div
              className={
                // stores.userStore.userAuth
                //   ? stores.userStore.userAuth.data.password
                //     ? "input-group error-border"
                //     : "input-group success-border"
                //   : 
                  "input-group"
              }
            >
              <input
                type={!passwordShow ? "password" : "text"}
                name="password"
                placeholder="Şifrə"
                value={handlerPassword ? handlerPassword :''}
                onChange={(e) => setHandlerPassword(e.target.value)}
              />
              <span onClick={() => setPasswordShow(!passwordShow)}>
                {!passwordShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
              {/* {stores.userStore.userAuth && (
                <p className="error-message">
                  {stores.userStore.userAuth.data.password}
                </p>
              )} */}
            </div>

            {/* {props.auth.authResult === "login_error" && (
            <p className="login_error">Məlumatların düzgünlüyünü yoxlayın.</p>
          )} */}
            <button type="submit" disabled={disableBtn}>
              
              Daxil ol
            </button>
            <p className="form-info">
              Hesabın yoxdursa
              <a onClick={() => setRegisterPopup()}>Qeydiyyatdan keç</a>
            </p>
          </div>

          <button className="form-close" onClick={() => setOpenCloseAuth()}>
            <i>
              <svg
                id="fi_2089650"
                enableBackground="new 0 0 413.348 413.348"
                height="25"
                viewBox="0 0 413.348 413.348"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"></path>
              </svg>
            </i>
          </button>
        </div>
      </form>
    </>
  );
};

export default observer(LoginPopup);
