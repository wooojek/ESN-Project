import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCY4e40sSMHKqeMWVaj37p8DNoMef_DBIs",
    authDomain: "react-esn-project.firebaseapp.com",
    databaseURL: "https://react-esn-project.firebaseio.com",
    projectId: "react-esn-project",
    storageBucket: "react-esn-project.appspot.com",
    messagingSenderId: "818544713250"
  };
firebase.initializeApp(config);

const Data = firebase.database().ref().child('data');

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