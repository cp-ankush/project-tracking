// types of action
export const Types = {
  CREATE_PROJECT: 'CREATE_PROJECT',
  DELETE_PROJECT: "DELETE_PROJECT",
};


export const createProject = (task) => ({
  type: Types.CREATE_PROJECT,
  payload: task,
});

export const deleteProject = (name) => ({
  type: Types.DELETE_PROJECT,
  payload: name,
});
