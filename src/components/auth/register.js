import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import stores from "../../stores/";
import { observer } from "mobx-react";

let RegisterPopup = (props) => {
  console.log(stores);
  //hooks
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordShow2, setPasswordShow2] = useState(false);
  const [disableBtn, setDisabled] = useState(false);

  //Hooks for Form
  const [formData, setFormData] = useState({});

  useEffect(() =>{
    setRegisterPopup()
  },[stores.userStore.loginPanel])


  useEffect(() => {
    setDisabled(false);
  }, [stores.userStore.userRegisterValidate, stores.userStore.userInfo]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("first_name", formData.email);
    formdata.append("last_name", formData.email);
    formdata.append("username", formData.email);
    formdata.append("email", formData.email);
    formdata.append("password", formData.email);
    formdata.append("password2", formData.email);

    // formData.append('action', 'previewImg');
    stores.userStore.register(formdata);

    // setDisabled(!disableBtn)
  };

  //props
  const { setOpenCloseAuth, setRegisterPopup } = props;

  return (
    <div className="login-popup__content">
      <div className="login-popup__content__header">
        <button onClick={() => setRegisterPopup()}>Daxil ol</button>
        <button className="auth-active">Qeydiyyatdan keç</button>
      </div>
      <div className="login-popup__content__form">
        <form onSubmit={handleSubmit}>
          <div
            className={
              stores.userStore.userRegisterValidate
                ? stores.userStore.userRegisterValidate.first_name
                  ? "input-group error-border"
                  : "input-group success-border"
                : "input-group"
            }
          >
            <input
              type="text"
              placeholder="Adınızı daxil edin"
              name="first_name"
              onChange={handleChange}
              value={formData.name}
            />
            {stores.userStore.userRegisterValidate && (
              <p className="error-message">
                {stores.userStore.userRegisterValidate.first_name}
              </p>
            )}
          </div>
          <div
            className={
              stores.userStore.userRegisterValidate
                ? stores.userStore.userRegisterValidate.last_name
                  ? "input-group error-border"
                  : "input-group success-border"
                : "input-group"
            }
          >
            <input
              type="text"
              placeholder="Soydınızı daxil edin"
              name="last_name"
              onChange={handleChange}
              value={formData.name}
            />
            {stores.userStore.userRegisterValidate && (
              <p className="error-message">
                {stores.userStore.userRegisterValidate.last_name}
              </p>
            )}
          </div>
          <div
            className={
              stores.userStore.userRegisterValidate
                ? stores.userStore.userRegisterValidate.username
                  ? "input-group error-border"
                  : "input-group success-border"
                : "input-group"
            }
          >
            <input
              type="text"
              placeholder="Nick adı"
              name="username"
              onChange={handleChange}
              value={formData.username}
            />
            {stores.userStore.userRegisterValidate && (
              <p className="error-message">
                {stores.userStore.userRegisterValidate.username}
              </p>
            )}
          </div>

          <div
            className={
              stores.userStore.userRegisterValidate
                ? stores.userStore.userRegisterValidate.email
                  ? "input-group error-border"
                  : "input-group success-border"
                : "input-group"
            }
          >
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={formData.email}
            />

            {stores.userStore.userRegisterValidate && (
              <p className="error-message">
                {stores.userStore.userRegisterValidate.email}
              </p>
            )}
          </div>
          <div
            className={
              stores.userStore.userRegisterValidate
                ? stores.userStore.userRegisterValidate.password
                  ? "input-group error-border"
                  : "input-group success-border"
                : "input-group"
            }
          >
            <input
              type={!passwordShow ? "password" : "text"}
              name="password"
              placeholder="Şifrəniz"
              onChange={handleChange}
              value={formData.password}
            />
            <span onClick={() => setPasswordShow(!passwordShow)}>
              {!passwordShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            {stores.userStore.userRegisterValidate && (
              <p className="error-message">
                {stores.userStore.userRegisterValidate.password}
              </p>
            )}
          </div>
          <div
            className={
              stores.userStore.userRegisterValidate
                ? stores.userStore.userRegisterValidate.password2
                  ? "input-group error-border"
                  : "input-group success-border"
                : "input-group"
            }
          >
            <input
              type={!passwordShow2 ? "password" : "text"}
              name="password_confirmation"
              onChange={handleChange}
              placeholder="Şifrənizin təkrarı"
              value={formData.password2}
            />
            <span onClick={() => setPasswordShow2(!passwordShow2)}>
              {!passwordShow2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            {stores.userStore.userRegisterValidate && (
              <p className="error-message">
                {stores.userStore.userRegisterValidate.password2}
              </p>
            )}
          </div>
          {/* <div className="group-checkbox">
            <label className="checkbox">
              <span className="checkbox__input">
                <input
                  type="checkbox"
                  name="user_terms"
                  value={"on" ? 1 : 0}
                  onChange={handleChange}
                />
                <span
                  className="checkbox__control checkbox-error"
                  className={
                    stores.userStore.userRegisterValidate
                      ? stores.userStore.userRegisterValidate.user_terms
                        ? "checkbox__control checkbox-error"
                        : "checkbox__control success-checkbox"
                      : "checkbox__control"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1.73 12.91l6.37 6.37L22.79 4.59"/>
                  </svg>
                </span>
              </span>
              <span className="radio__label"> Raziyam</span>
            </label>
            {stores.userStore.userRegisterValidate && (
              <p className="error-userterms">
                {stores.userStore.userRegisterValidate.user_terms}
              </p>
            )}
          </div> */}
          <button type="submit" disabled={disableBtn}>
            Qeydiyyatdan keç
          </button>
          <p className="form-info">
            Hesabın vardırsa <a onClick={() => setRegisterPopup()}>Daxil ol</a>
          </p>
        </form>
      </div>
      <button
        className="form-close"
        onClick={() => {
          setOpenCloseAuth(false);
          stores.userStore.setRegister(null);
        }}
      >
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
  );
};

export default observer(RegisterPopup);
