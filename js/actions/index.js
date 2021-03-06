import * as firebase from 'firebase';
import { userId } from '../reducers/dataReducer.jsx';

const config = {
    apiKey: "AIzaSyCY4e40sSMHKqeMWVaj37p8DNoMef_DBIs",
    authDomain: "react-esn-project.firebaseapp.com",
    databaseURL: "https://react-esn-project.firebaseio.com",
    projectId: "react-esn-project",
    storageBucket: "react-esn-project.appspot.com",
    messagingSenderId: "818544713250"
  };
firebase.initializeApp(config);

const Data = firebase.database().ref();
const DataNews = Data.child('news');
const DataGroups = Data.child('groups');
const DataKnowledge = Data.child('knowledge');
const DataSites = Data.child('sites');
const UserData = Data.child('users').child(userId);


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

export function updateUserData(data) {
  return dispatch => {
    return Data.child('users').child(userId).update(data);
  }
}