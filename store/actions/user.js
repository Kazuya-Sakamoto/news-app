// ! ADD CLIP Action
export const addClip = ({ clip }) => {
  return {
    type: 'ADD_CLIP',
    clip,
  }
}

// ! DELETE CLIP Action
export const deleteClip = ({ clip }) => {
  return {
    type: 'DELETE_CLIP',
    clip,
  };
};