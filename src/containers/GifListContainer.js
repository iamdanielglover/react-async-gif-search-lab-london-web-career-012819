import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  render() {
    return (
      <div>
         <GifSearch fetchGifs={this.fetchGifs} />
         <GifList gifs={this.state.gifs} />
     </div>
    )
  }

  fetchGifs = (query = "unicorn" ) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(gifs => {
         this.setState({
           gifs: gifs.data.map(gif => ({ url: gif.images.original.url }))
         })
        })
      }

  componentDidMount() {
    this.fetchGifs()
  }

}

export default GifListContainer
