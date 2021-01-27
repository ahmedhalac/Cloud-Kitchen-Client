import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  width: ${(p) => (p.isSidebarOpen ? "18%" : "5%")};
  max-width: 280px;
  min-width: 80px;
  background-image: linear-gradient(
      315deg,
      rgb(40, 49, 59, 0.9) 50%,
      rgb(72, 84, 97, 0.8) 100%
    ),
    url(${(p) => p.sidebarPic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  height: 100%;
  transition: 0.2s ease-in all;
`;

export const sidebarLogoContainer = styled.div`
  padding: 20px 0;
  margin-bottom: 10px;
`;

export const SidebarLogo = styled.img`
  margin: 0 auto; //centring img
  display: block; //centring img
  height: 50px;
  width: 120px;
  ${(p) => !p.isSidebarOpen && `display: none`}
`;

export const MenuItemContainer = styled.div``;

export const MenuItem = styled.div`
  ${(p) =>
    !p.isSidebarOpen &&
    `
    text-align: center;
    ${p.selected && `background-color: rgb(40, 49, 59, 0.9);`};
    `};
  padding: 6px 20px;
  font-weight: 500;
  color: ${(p) => (p.selected ? "white" : "gray")};
  white-space: nowrap;

  &:hover {
    color: white;
    cursor: pointer;
    transition: 0.1s ease-in all;
  }

  &:after {
    content: "";
    border: 1px solid ${(p) => (p.selected ? "white" : "gray")};
    display: block;
    margin: 5px 0 4px;
  }

  ${(p) =>
    !p.selected &&
    `
    &:hover {
      &:after {
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: 0.1s ease-in all; 
      }
    }
  `}
`;

export const Text = styled.p`
  display: ${(p) => (p.isSidebarOpen ? "inline" : "none")};
  padding-left: 15px;
`;
export const Icon = styled.img`
  height: 16px;
  width: 16px;
`;

//Toggler -----------------------------------------------------
export const ToggleContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Toggler = styled.div`
  height: 40px;
  cursor: pointer;
  poistion: relative; //horizontal lines

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25em;
    height: 0.1em;
    width: 100%;
    background: #fff;
    box-shadow: 0 0.75em 0 0 #fff, 0 1.5em 0 0 #fff;
  }
`;
