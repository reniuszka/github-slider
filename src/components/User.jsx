import React from "react";
import { FaAngleLeft, FaAngleRight, FaUserAlt } from "react-icons/fa";
import Loading from "./Loading";
import { UserGithubState, userLength } from "../context/GithubContext";

export const User = () => {
  const { setNumber, user, loading } = UserGithubState();

  const getNextUser = (e) => {
    setNumber((prevPersonNumber) => {
      if (prevPersonNumber >= userLength) {
        return setNumber(0);
      }
      return setNumber(prevPersonNumber + 1);
    });
  };

  const getPreviousUser = (e) => {
    setNumber((prevPersonNumber) => {
      if (prevPersonNumber <= 0) {
        return setNumber(4);
      }
      return setNumber(prevPersonNumber - 1);
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="profile">
      {/* <h2>User details</h2> */}
      <div className="profile-container">
        <div>
          <FaAngleLeft className="icon-arrow" onClick={getPreviousUser} />
        </div>
        <div className="profile-box">
          <span className="profile-overlay"></span>
          <div className="profile-image-container">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="profile-img"
            />
          </div>
          <div className="profile-details">
            <h6>avatar details</h6>
            <p className="details">
              <FaUserAlt className="icon-person" />
              {user.login}
            </p>
          </div>
        </div>
        <div>
          <FaAngleRight className="icon-arrow" onClick={getNextUser} />
        </div>
      </div>
    </div>
  );
};
