import * as request from 'superagent'
//using superagent for FETCHING data from API 


export const ADD_ALBUM = 'ADD_ALBUM'


export function addAlbum (id, title) {
    return {
        type: ADD_ALBUM,
        payload: {
            id,
            title
        }

    }
}


export const SET_ALBUMS = 'SET_ALBUMS'

export function setAlbums (albums) {
    return {
        type: SET_ALBUMS,
        payload: albums

    }
}

// install yarn add redux-thunk in project to use dispatch here to fetch data
export function getAlbums() {
    return function (dispatch) {
      request('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
          dispatch(setAlbums(response.body))
        })
    }
}

export const SET_PHOTOS = 'SET_PHOTOS'

export function setPhotos(photos){
    return {
        type: SET_PHOTOS,
        payload: photos
    }
}

//fetching photos from API
//response.body is an array === setPhotos(photos is an array)
export function getPhotosByAlbum(albumId) {
    return function (dispatch){
        //request('https://jsonplaceholder.typicode.com/photos?albumId=:id')
        request(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        //getAlbums(albumId)
        .then(response => {
              
                dispatch(setPhotos(response.body))
        })
    }
}