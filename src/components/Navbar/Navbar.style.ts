import styled from "styled-components";

export const NavWrapper = styled.main`
    background: var(--navbar-color);
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height:75px;
    padding: 5px;
    text-align: center;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border-color);

    .mode-switch label {
  display: inline-block;
  width: 40px;
  height: 20px;
  position: relative;
  margin-left: 10px;
}

.mode-switch .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
}

.mode-switch input:checked + .slider {
  background-color: #2196f3;
}

.mode-switch .slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.mode-switch input:checked + .slider:before {
  transform: translateX(20px);
}
  .sliderText {
    margin-top:5px;
  }
    `
    ;