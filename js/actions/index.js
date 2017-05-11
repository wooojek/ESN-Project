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

const Data = firebase.database().ref();
const DataNews = Data.child('news');
const DataGroups = Data.child('groups');
const DataKnowledge = Data.child('knowledge');
const DataSites = Data.child('sites');


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

export function fetchDataNews() {
  return dispatch => {
    DataNews.on('value', snapshot => {
      dispatch({
        type: 'FETCH_DATA_NEWS',
        payload: snapshot.val(),
      });
    });
  };
}

export function fetchDataGroups() {
  return dispatch => {
    DataGroups.on('value', snapshot => {
      dispatch({
        type: 'FETCH_DATA_GROUPS',
        payload: snapshot.val(),
      });
    });
  };
}

export function fetchDataKnowledge() {
  return dispatch => {
    DataKnowledge.on('value', snapshot => {
      dispatch({
        type: 'FETCH_DATA_KNOWLEDGE',
        payload: snapshot.val(),
      });
    });
  };
}

export function fetchDataSites() {
  return dispatch => {
    DataSites.on('value', snapshot => {
      dispatch({
        type: 'FETCH_DATA_SITES',
        payload: snapshot.val(),
      });
    });
  };
}