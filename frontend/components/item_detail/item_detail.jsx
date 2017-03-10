import React from 'react';

class ItemDetail extends React.Component {
  render() {
    console.log(this.props.params);
    debugger;
    return (
      <ul>
        <img src={this.props.item.image_url} width="75px" />
        <li>{this.props.item.name}</li>
        <li>Price: {this.props.item.price}</li>
        <li>Happiness: {this.props.item.happiness}</li>
      </ul>
    );
  }
}

export default ItemDetail;
