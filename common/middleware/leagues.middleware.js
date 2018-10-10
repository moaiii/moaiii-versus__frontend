const leagues = {};

module.exports = leagues;

// import axios from 'axios';

// export function getLeagues(store, action) {
//   store.dispatch({
//     type: 'GET_LEAGUES__PENDING'
//   });

//   axios.get('https://zw0z5ika4b.execute-api.eu-west-1.amazonaws.com/latest/games')
//     .then(res => {
//       store.dispatch({
//         type: 'GET_LEAGUES__FUFILLED', 
//         payload: res
//       });
//     })
//     .catch(err => {
//       store.dispatch({
//         type: 'GET_LEAGUES__ERROR', 
//         payload: err
//       });
//     })
// }