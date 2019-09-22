import constants from './constants';

const initialSettings = {
  blog: { data: {}, error: null, loading: false},
};


const projectModule = (state = initialSettings, action) => {
  switch (action.type) {
    
    case constants.blog.SET_ERROR:
      return {
        ...state,
        blog: { ...state.blog, error: action.error }
      };

    case constants.blog.SET_DATA:
      return {
        ...state,
        blog: { ...state.blog, data: action.data }
      };
    

    default:
      return state;
  }
};

export default projectModule;
