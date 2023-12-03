import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/userPhoto.png";
import ProfileStatus from "./ProfileStatus";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import s from "./ProfileInfo.module.css";

export default function ProfileInfo({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) {
  const [editMode, setEditMode] = useState(false);

  if (profile === null) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length === 1) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData)
      .then(() => {
        setEditMode(false);
      })
      .catch(() => {});
  };

  return (
    <div>
      <img
        className={s.profilePhoto}
        src={profile.photos.small === null ? userPhoto : profile.photos.large}
        alt="userPhoto"
      />
      {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
      {editMode ? (
        <ProfileDataFormReduxForm
          initialValues={profile}
          profile={profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          goToEditMode={() => setEditMode(true)}
        />
      )}
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Full name: </b>
        {profile.fullName}
      </div>
      <div>
        <b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My skills: </b>
          {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};
