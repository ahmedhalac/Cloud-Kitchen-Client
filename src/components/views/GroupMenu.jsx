import React from "react";
import { connect } from "react-redux";
import { getGroupMenus } from "../../actions/auth";
import "../../assets/css/GroupMenu.css";

function groupBy(data, key) {
  return data.reduce((acc, x) => {
    acc[x[key]] = [...(acc[x[key]] || []), x];
    return acc;
  }, {});
}

class GroupMenu extends React.Component {
  componentDidMount() {
    this.props.dispatch(getGroupMenus());
  }

  render() {
    const { menuNames } = this.props;
    const groupMenu = groupBy(menuNames, "menu_name");
    var total = 0;
    var restaurantName = "";
    return (
      <div className="container-fluid group-menu">
        <div className="title-menu">
          <p>Grupni jelovnici (meniji)</p>
        </div>
        <a href="/">
          <button className="btn btn-primary home-btn">Početna</button>
        </a>
        {Object.entries(groupMenu).map(([menuName, data]) => {
          total = 0; //resetujemo totalnu cijenu na 0
          return (
            <div className="row-menu" key={menuName}>
              <div className="row-menu-item">
                <h4 className="menu-name text-center">{menuName}</h4>
                {data.map((menu, index) => {
                  total += parseFloat(menu.price);
                  restaurantName = menu.res_name;
                  return (
                    <div className="menu-item" key={index}>
                      <p>{menu.food_name}</p>
                    </div>
                  );
                })}
                <h5 className="price-gm mt-1 text-center">Cijena: {total}KM</h5>
                <h5 className="text-center">
                  Restoran: <span>{restaurantName}</span>
                </h5>
              </div>
            </div>
          );
        })}
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
