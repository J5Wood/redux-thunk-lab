import React, { Component } from 'react'

export default class CatList extends Component {
    
    renderCats = () => {
        return this.props.catPics.map((cat, id) => {
            return (
                <div key={id}>
                    <img src={cat.url} alt='Cute Cat'/>
                </div>
            )
        })
    }
    
    render() {
        return (
            <div>
                {this.renderCats()}
            </div>
        )
    }
}
