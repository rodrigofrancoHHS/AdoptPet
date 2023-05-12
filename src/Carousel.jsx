import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="flex justify-center items-center">
        <img src={images[active]} alt="animal" className="w-80 h-80 object-cover"/>
        <div className="flex flex-wrap mt-2 mx-auto max-w-xs sm:max-w-full sm:mt-0 sm:mx-0">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "w-16 h-16 sm:w-24 sm:h-24 m-1 border-2 border-blue-500 rounded-md shadow-md cursor-pointer": "w-16 h-16 sm:w-24 sm:h-24 m-1 border rounded-md opacity-50 cursor-pointer"} 
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
