import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
  console.log(props);
  console.log("RENDER YO");
  let postsElements = props.posts.map((p, i) => (
    <Post key={i} message={p.message} likesCount={p.likesCount} />
  ));

  const addPost = (values) => {
    props.clickedAddPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <AddPostFormRedux onSubmit={addPost} />
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name={"newPostText"}
          placeholder={"Add your post"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "myPosts" })(AddPostForm);

export default MyPosts;
