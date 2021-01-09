const addTeacherAction = data => {
  return dispatch => {
    // ajax
    dispatch({
      type: 'POST_DATA',
      data
    })
  }
}

export {
  addTeacherAction
}