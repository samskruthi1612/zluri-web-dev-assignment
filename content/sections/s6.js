import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./style";
import Desert from "../images/Landscape=Desert.png";
import Ocean from "../images/Landscape=Ocean.png";
import Mountain from "../images/Landscape=Mountain.png";
import Forest from "../images/Landscape=Forest.png";

const S6 = () => {
  let menuArray = [
    {
      name: "Desert",
      image: Desert,
    },
    {
      name: "Ocean",
      image: Ocean,
    },
    {
      name: "Mountain",
      image: Mountain,
    },
    {
      name: "Forest",
      image: Forest,
    },
  ];
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const [image, setImage] = useState(Mountain);

  const openDropdown = () => setShow(!show);

  const changeDropdown = (e) => {
    const value = e.target.parentNode.querySelector(".active");
    if (value) {
      value.classList.remove("active");
    }

    console.log(e.target.textContent);
    document.querySelector(".dropdownHeader .title").textContent =
      e.target.textContent;

    e.target.classList.add("active");

    const item = menuArray.filter((item) => item.name === e.target.textContent);

    setImage(item[0].image);

    setSelected(e.target.textContent);
  };

  return (
    <Container>
      <Title>
        <h4>Solution Here</h4>
        <p>Put the created component below this.</p>
      </Title>
      <AnswersDiv>
        <div className="dropdownWrapper">
          <div className="dropdownHeader" onClick={openDropdown}>
            <div className="title">Dropdown</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </div>
          {show ? (
            <ul
              className="dropdownContent"
              onClick={changeDropdown}
              onMouseOver={changeDropdown}
            >
              <li className="dropdownItem active">Mountain</li>
              <li className="dropdownItem">Forest</li>
              <li className="dropdownItem">Ocean</li>
              <li className="dropdownItem">Desert</li>
            </ul>
          ) : (
            ""
          )}
        </div>
        <div className="imageContainer">
          <img src={image} alt="" />
        </div>
      </AnswersDiv>
    </Container>
  );
};

export default S6;

const Title = styled.div`
  h4 {
    font-size: 32px;
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.4px;
    span {
      background: #fae090;
    }
  }
  p {
    font-size: 18px;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;
const QuestionsDiv = styled.div`
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    font-size: 20px;
  }
`;

const AnswersDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  font-family: Lexend Medium;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.4px;
  padding: 10rem;

  .dropdownWrapper {
    position: relative;
  }

  .dropdownHeader {
    width: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    padding: 0 1rem;
  }
  .dropdownHeader:hover {
    border: 1px solid #5287e8;
    color: #a8a8a8;
    fill: #a8a8a8;
  }
  .dropdownContent {
    position: absolute;
    z-index: 1000;
    margin: 5px 0;
    padding: 5px;
    width: 200px;
    list-style: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #fff;
  }
  .dropdownItem {
    border-radius: 10px;
    padding: 0 5px;
  }

  .active {
    background-color: #e1e8f8;
  }

  .dropdownItem:hover {
    background-color: #e1e8f8;
  }
`;
