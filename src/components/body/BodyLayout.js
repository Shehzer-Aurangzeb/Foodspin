import styled from "styled-components";

const BodyLayout = styled.div`
   {
    display: flex;
    flex-direction: row;
  }
  .section-1 {
    max-width: 350px;
    padding-top: 190px;
  }

  .dishPrice {
    font-family: Poppins;
    font-weight: 600;
    font-size: 44px;
    line-height: 66px;
  }
  .dishName {
    font-family: Poppins;
    font-weight: 500;
    font-size: 36px;
    line-height: 50px;
    margin-bottom: 12px;
    color: #333333;
  }
  .dishDesc {
    font-family: Poppins;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #333333;
    text-transform: capitalize;
    margin-bottom: 28px;
  }
  .link {
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 13.1595px;
    margin-top: 142px;
  }
  .link a {
    color: #000;
    text-decoration: none;
    line-height: 20px;
  }

  .section-2 {
    width: 100%;
    padding-left: 100px;
    text-align: center;
  }
  .section-2 .dishes {
    margin-top: 230px;
    height: 290px;
    width: 290px;
  }
`;

export default BodyLayout;
