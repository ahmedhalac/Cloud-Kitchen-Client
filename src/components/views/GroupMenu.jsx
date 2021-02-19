import React from "react";
import { connect } from "react-redux";
import { getGroupMenus } from "../../actions/auth";

class GroupMenu extends React.Component {
  componentDidMount() {
    this.props.dispatch(getGroupMenus());
  }
  renderGroupMenus() {
    return this.props.menuNames.map((menuName, index) => {
      return (
        <>
          <h1 key={index}>{menuName.res_name}</h1>
          <h5>{menuName.menu_name}</h5>
        </>
      );
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Grupni meni</h1>
        <a href="/">
          <button>Pocetna</button>
        </a>
        <ul style={{ listStyleType: "none" }}>
          <li>{this.renderGroupMenus()}</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuNames: Object.values(state.restRed.menuNames),
  };
}

export default connect(mapStateToProps)(GroupMenu);
