import profileReducer, { addPostActionCreator } from "./profile-reducer";

it("should ", () => {
  let action = addPostActionCreator("Hey");
  let initialState = {
    postsData: [
      { id: 1, message: "Hi, how are you?", likesCount: 13 },
      { id: 2, message: "It's my first post!", likesCount: 25 },
      { id: 3, message: "React is cool!", likesCount: 12 },
      { id: 4, message: "What's up!", likesCount: 5 },
    ],
  };

  let newState = profileReducer(initialState, action);

  expect(newState.postsData.length).toBe(5);
});
