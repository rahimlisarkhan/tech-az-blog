import { useState } from "react";
import { FaCalendar, FaGraduationCap, FaUserCheck } from "react-icons/fa";
import { MdBusinessCenter, MdEmail } from "react-icons/md";
import stores from "../../stores";

const ProfileUserInfo = (props) => {
  //Hooks for Form
  const [formData, setFormData] = useState({...props.userInfo});
  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    console.log(formData);

    const formdata = new FormData();
    formdata.append("first_name", formData.first_name);
    formdata.append("last_name", formData.last_name);
    formdata.append("username", formData.username);
    formdata.append("email", formData.email);
    formdata.append("education", formData.education);
    formdata.append("position", formData.position);
    formdata.append("image", formData.image);
    formdata.append("birthday", formData.birthday);
    formdata.append("token", formData.token);
    formdata.append("articles", formData.articles);

    // formData.append('action', 'previewImg');
    stores.userStore.putUser('user/profile',formdata,stores.userStore.userToken);

    // setDisabled(!disableBtn)
  };

    return(
        <div className="profile-user-info">
        <h1>hesab məlumatları</h1>
        <div className="profile-user-info__content">
          <p>
            <i>
              <FaUserCheck />
            </i>
            {!props.userInfoChangePanel ? (
              props.userInfo && props.userInfo.username
            ) : (
              <input
                type="text"
                onChange={handleChange}
                name="username"
                value={formData.username}
                defaultValue={formData.username}
              />
            )}
          </p>
          <p>
            <i>
              <MdEmail />
            </i>


            {!props.userInfoChangePanel ? (
              props.userInfo && props.userInfo.email
            ) : (
              <input
                type="text"
              onChange={handleChange}
              name="email"
                value={formData.email}
                defaultValue={formData.email}
              />
            )}
          </p>
          <p>
            <i>
              <FaCalendar />
            </i>

            {!props.userInfoChangePanel ? (
              props.userInfo && props.userInfo.birthday
                ? props.userInfo.birthday
                : "doğum tarixi"
            ) : (
              <input
                type="date"
              onChange={handleChange}
              name="birthday"
              value={formData.birthday}

                defaultValue={formData.birthday}
              />
            )}
          </p>
          <p>
            <i>
              <FaGraduationCap />
            </i>

            {!props.userInfoChangePanel ? (
              props.userInfo && props.userInfo.education
                ? props.userInfo.education
                : "təhsil"
            ) : (
              <input
                type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
                defaultValue={props.userInfo && props.userInfo.education}
                placeholder={props.userInfo && props.userInfo.education ? props.userInfo.education : 'təhsiliniz?'}

              />
            )}
          </p>
          <p>
            <i>
              <MdBusinessCenter />
            </i>

            {!props.userInfoChangePanel ? (
              props.userInfo && props.userInfo.position
                ? props.userInfo.position
                : "iş yeri"
            ) : (
              <input
                type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
                defaultValue={props.userInfo && props.userInfo.position}
                placeholder={props.userInfo && props.userInfo.position ? props.userInfo.position : 'iş yeriniz?'}

              />
            )}
          </p>
        </div>
        {!props.userInfoChangePanel ? (
          <button
            onClick={() => props.setUserInfoChangePanel()}
            className="profile-user-info__created"
          >
            məlumatları dəyişdir
          </button>
        ) : (
          <button
            className="profile-user-info__created bg-success-1"
            onClick={() =>{ 
              props.setUserInfoChangePanel()
              handleSubmit()
            }}
          >
            yaddaşda saxla
          </button>
        )}
      </div>
   

    )
}

export default ProfileUserInfo