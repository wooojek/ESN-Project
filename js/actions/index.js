import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC7TXXwpb4NtOETZZiei4KDAn2rTUbPSQ8",
    authDomain: "redux-training-4e795.firebaseapp.com",
    databaseURL: "https://redux-training-4e795.firebaseio.com",
    projectId: "redux-training-4e795",
    storageBucket: "redux-training-4e795.appspot.com",
    messagingSenderId: "743040885817"
  };
firebase.initializeApp(config);

const Data = firebase.database().ref().child('name');

export function fetchData() {
  return dispatch => {
    Data.on('value', snapshot => {
      dispatch({
        type: 'FETCH_DATA',
        payload: snapshot.val(),
      });
    });
  };
}