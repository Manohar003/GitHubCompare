

const INITIAL_STATE = {
  profileData: [],
  repoData: [],
};

const StorageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PROFILE_DATA":
      return {
        ...state,
        profileData: state.profileData.concat(action.payload).sort((a,b) =>b.followers - a.followers),
      };
    case "SET_REPO_DATA":
      return {
        ...state,
        repoData: state.repoData.concat([action.payload]),
      };
    default:
      return state;
  }
};

export default StorageReducer;
