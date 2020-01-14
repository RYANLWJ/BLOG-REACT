import * as types from "../types";
import { getRepos } from "../../request/api";

function getRepoData(res) {
  return {
    type: types.SET_REPO_DATA,
    data: res
  };
}

// export function fetchFilmDetail(id){
//     return (dispatch) => {
//         dispatch(utils.loading(true))
//         api.getFilmDetail(id,function(res){
//             dispatch(getFilmDetail(res))
//             dispatch(utils.loading(false))
//         })
//     }
// }

const fetchRepoData = () => async dispatch => {
  const { data } = await getRepos();
  console.log(data)
  if (data) dispatch(getRepoData(data));
};

export { fetchRepoData };
