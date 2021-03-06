import env from "../../../env";
import axios from "axios";
import {
  loadingResource,
  successOnLoad,
  errorOnLoad
} from "./getArticles.action";
import {
  GET_ONE_ARTICLE_REQUEST,
  GET_ONE_ARTICLE_SUCCESS,
  GET_ONE_ARTICLE_ERROR
} from "../types";

const fetchOneArticle = slug => async dispatch => {
  dispatch(loadingResource(GET_ONE_ARTICLE_REQUEST));

  await axios
    .get(`${env.BASE_URL}/blogs/${slug}`)
    .then(response => {
      dispatch(successOnLoad(GET_ONE_ARTICLE_SUCCESS, response.data.blogs));
    })
    .catch(err => {
      dispatch(errorOnLoad(GET_ONE_ARTICLE_ERROR, err.response.data ? err.response.data : {}));
    });
};

export default fetchOneArticle;
