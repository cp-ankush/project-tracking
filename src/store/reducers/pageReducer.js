import { Types } from "../actions/items";

const defaultState = {
  projects: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.CREATE_PROJECT: {
      const { projects } = state;

      projects.push(action.payload);

      return { ...state, projects };
    }

    case Types.DELETE_PROJECT: {
      console.log("hello")
      const newState = state?.projects?.filter((item) => {
        return item?.name !== action.payload
      })
      return {projects: newState};
    }

    default:
      return state;
  }
};

export default reducer;
