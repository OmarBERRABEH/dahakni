import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_DAHAKNI 	= 'ADD_DAHAKNI';
export const ADD_DAHAKNIES 	= 'ADD_DAHAKNIES';
export const DELETE_DAHAKNI = 'DELETE_DAHAKNI';


export function addDahakni(dahakni) {
  return {
    type: ADD_DAHAKNI,
    dahakni,
  };
}

export function addDahaknies(dahaknies) {
  return {
    type: ADD_DAHAKNIES,
    dahaknies,
  };
}


export function fetchDahaknies() {
  return (dispatch) => {
    return callApi('dahaknies').then(res => {
      dispatch(addDahaknies(res.dahaknies));
    });
  };
}


export function addDahakniRequest(dahakni) {
  return (dispatch) => {
    return callApi('dahaknies', 'post', {
      dahakni: {
        name: dahakni.name,
        title: dahakni.title,
        content: dahakni.content,
      },
    }).then(res => dispatch(addDahakni(res.dahakni)));
  };
}

export function delteDahakniRequest(dahakni) {
	return (dispatch) => {
		return callApi(`dahaknies/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
	}
}

export function deletePost(cuid) {
	return {
		type: DELETE_DAHAKNI,
		cuid
	}
}