import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  renderLoadIcon = () => {
    if (this.props.loading === true) {
      return (
        <div>PLEASE STAND BY WHILE LOADING. WE KNOW YOU HAVE A CHOICE OF SITES FOR CAT PICTURES AND WE ARE VERY GRATEFUL YOU CHOSE OURS FOR ALL OF YOUR CAT PICTURE NEEDS. YOU'RE PRETTY COOL!</div>
      )
    }
  }

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {this.renderLoadIcon()}
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)