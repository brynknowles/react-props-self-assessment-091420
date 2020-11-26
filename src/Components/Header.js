import React from "react";

class Header extends React.Component {

  render() {
      // Header should append the value of this prop to the DOM
    return <h1>{this.props.text}</h1>;
  }
}

export default Header;
