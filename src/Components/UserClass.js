import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props.name + "Constructor ");

    this.state = {
      userInfo: {
        name: "Aagam",
        location: "Sagar",
        avatar_url: "http/aagam342",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "ComponentdidMount");
    const data = await fetch("https://api.github.com/users/aagam342");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("Component did update");
  }

  componentWillUnmount() {
    // console.log("Component Unmounted");
  }

  render() {
    // console.log(this.props.name + "Render called");

    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.state.userInfo);

    return (
      <div className="user-card  text-center p-2 m-2 border ">
        <div>
          <img className="w-40 mx-auto" src={avatar_url} alt="avatar" />
        </div>
        <div>
          <h3>Name : {name}</h3>
          <h3>Location : {location}</h3>
        </div>
      </div>
    );
  }
}
export default UserClass;
