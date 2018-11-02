import * as React from 'react'
//import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import {connect} from 'react-redux'
//import {helloWorld} from '../actions/test'
//import {addAlbum} from '../actions/actionsList'
import {getAlbums} from '../actions/actionsList'

// const sleep = time => new Promise(
//   resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    //1. fetching data from API to React and set it to original state/local state above
    // request('https://jsonplaceholder.typicode.com/albums')
    //   .then(response => this.setState({ albums: response.body })) // original state = {}

    //2.Fetching data from API to Redux through SET_ALBUMS action
    //* REMEMBER DATA TYPES: SET_ALBUMS RETURN AN ARRAY */
    //state in REDUX now [], response.body is an array of obj
    // request('https://jsonplaceholder.typicode.com/albums')
    //   .then(response => this.props.setAlbums(response.body)) 

    //3. using request to fetching data in action creator getAlbums()
 
    this.props.getAlbums()
      //binding action creator 
      // NO MORE this.props.dispatch()
   // this.props.helloWorld()
  //  this.props.addAlbum(5,'Enjoying Sunshine')
  //  this.props.addAlbum(10,'Having fun in the US')

    // sleep(2000)
    //   .then(message =>this.props.setAlbums([
    //     {
    //       id:1,
    //       title:message
    //     },
    //     {
    //       id:2,
    //       title:'This is the second message'
    //     },
    //     {
    //       id:1,
    //       title:'The last album'
    //     }
    //   ]))
    // sleep(3000)
    //     .then(message =>this.props.addAlbum(2,message))
    }


  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums

  }
  
}



export default connect(mapStateToProps,{getAlbums} )(AlbumsListContainer)

