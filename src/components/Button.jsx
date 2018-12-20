import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  color: "#ffffff"
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  min-height: 40px;
  border-radius: 20px;
  background-color: #3a77eb;
  border: 1px solid #3a77eb;
  width: 100%;
  
/* Style sub-classes */
  &.primary {
    color: #ffffff;
    background: #337ab7;
    border-color: #2e6da4;
    &:hover {
      color: #ffffff;
      background-color: #5a6268;
      border-color: #545b62;
    }
  }
  &.success {
    color: #ffffff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }
  &.link {
    color: #337ab7;
    background-color: transparent;
    border: none;
    border-radius: 0;
    font-weight: 400;
  }
  &.large {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }
  &.disabled {
    color: #ddd;
    background-color: #aaa;
    border: 1px solid #aaa;
  }
`;

export default Button;
