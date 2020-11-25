import React, { Component } from 'react';

class ToyCard extends Component {


  handleDonateToy = () => {
    const { id } = this.props.toy
    fetch(`http://localhost:3000/toys/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      this.props.donateToy(id)
    })
  }

  render() {
    const { name, image, likes } = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDonateToy}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
