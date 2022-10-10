import styled from "styled-components";

const HeaderLayout = styled.div`
  .navbar {
    background-color: transparent;
    justify-content: space-between;
    padding-top: 44px;
  }
  .navbar-brand p {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    line-height: 27px;
    margin: 0 0 0 5px;
  }
  .navbar-nav {
    margin-left: 170px;
  }
  .navbar-nav .nav-link {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    color: #333333;
    margin-right: 60px;
  }
  .navbar-nav .nav-link:hover {
    color: #333333;
  }
`;
export default HeaderLayout;
