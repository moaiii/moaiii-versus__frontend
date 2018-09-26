import axios from 'axios';
import {apiDomain} from '../config'

const getLeagues = ({ dispatch }) => {

  dispatch({
    type: 'GET_LEAGUES__PENDING'
  });

  axios.get(`${apiDomain}/competitions`, {
    headers: { "X-Auth-Token": "d423d068c3314f3e9738b9ac002fd5fe" }
  })
    .then(res => {

      dispatch({
        type: 'GET_LEAGUES__FUFILLED',
        payload: res
      });
    })
    .catch(err => {

      dispatch({
        type: 'GET_LEAGUES__ERROR',
        payload: err
      });
    })
}

export default {

  getLeagues
}