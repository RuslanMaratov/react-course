import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Users/Preloader";
import userPhoto from "../../../assets/userPhoto.png";

export default function ProfileInfo({ profile }) {
  if (profile === null) {
    return <Preloader />;
  } else
    return (
      <div>
        <div>
          <img
            className={s.img}
            alt="profile-img"
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          />
        </div>
        <img
          src={profile.photos.small === null ? userPhoto : profile.photos.small}
          alt="userPhoto"
        />
        <div className={s.descriptionBlock}>ava + description</div>
      </div>
    );
}
