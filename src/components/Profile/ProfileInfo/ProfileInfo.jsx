import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/userPhoto.png";
import ProfileStatus from "./ProfileStatus";
import s from "./ProfileInfo.module.css";

export default function ProfileInfo({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}) {
  if (profile === null) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length === 1) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <img
        className={s.profilePhoto}
        src={profile.photos.small === null ? userPhoto : profile.photos.large}
        alt="userPhoto"
      />
      {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
}
