import TestData from '../../TestData';

const SEARCH = "SEARCH";
const SEARCH_PENDING = "SEARCH_PENDING";
const SEARCH_FULFILLED = "SEARCH_FULFILLED";
const SEARCH_REJECTED = "SEARCH_REJECTED";

const initialState = {
  searchingKeyword: "",
  searchResult: {
    total: 0,
    totalPages: 0,
    results: []
  },
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PENDING:
      return {
        ...state,
        loading: true
      }
    case SEARCH_FULFILLED:
      return {
        ...state,
        searchResult: {
          total: TestData.total,
          totalPages: TestData.total_pages,
          results: TestData.results
        },
        loading: false
      }
    default:
      return state;
  }
}

export const search = (keyword) => ({
  type: SEARCH,
  payload: new Promise((resolve, reject) =>{
    setTimeout(()=>resolve(), 1000);
  })
});
