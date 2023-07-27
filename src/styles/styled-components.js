import styled, { keyframes } from "styled-components";

/**=========App Styles================= */

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 40px;
  background: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.font};
  min-height: 100vh;
  position: relative;
`;

/**=========Home Page Styles================= */
export const Header = styled.div`
  text-align: center;
  font-size: 48px;
  padding-block: 50px;
`;

export const Footer = styled.h6`
  text-align: center;
  font-size: 14px;
  font-weight: 200;
  font-style: italic;
  opacity: 0.5;
  padding-block: 25px;
`;

export const ThemeToggle = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**=========Todo List Styles================= */

export const TodoListContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  height: max(432px, 100%);
  width: max(540px, 60%);
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 5px 10px;
  border: none;
  margin-bottom: 10px;
  outline: none;
  font-size: 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.font};
`;

export const Button = styled.button`
  width: max-content;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.success};
  color: ${(props) => props.theme.colors.font};
  padding-inline: 20px;
  cursor: pointer;
  transition: scale, background-color 0.3s;

  &:hover {
    scale: 0.95;
    background-color: ${(props) => props.theme.colors.primary};
  }
  > img {
    width: 30px;
    object-fit: cover;
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.danger};
  padding: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: scale, background-color 0.3s;
  width: 40px;
  height: 40px;

  &:hover {
    scale: 0.95;
    background-color: ${(props) => props.theme.colors.primary};
  }

  > img {
    width: 100%;
    object-fit: cover;
  }
`;

export const FilterButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 12px;

  border: ${(props) =>
    props.$isActive ? `1px solid ${props.theme.colors.primary}` : "none"};
  border-radius: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
`;

export const TodoFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  justify-self: end;
  margin-top: auto;
`;

export const ItemsLeft = styled.span`
  font-size: 12px;
`;

export const ClearButton = styled(FilterButton)`
  font-size: 12px;
  background-color: transparent;
  visibility: ${(props) => (props.$isVisible ? `visible` : "hidden")};
`;

/**=========Todo Item Styles================= */
export const TodoItemWrapper = styled.div`
  height: 40px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

export const TodoText = styled.span`
  flex-grow: 1;
  margin-right: 8px;

  text-decoration: ${(props) => (props.$isChecked ? `line-through` : "none")};
`;

/*==============Notification Styles=================== */
const slideFromRight = keyframes`
 0%{  right:-120%; }
 25%{  right:-80%; }
 50%{  right:-40%; }
 75%{  right:0%; }
 100%{  right:20px; }
`;

export const Notification = styled.div`
  width: max-content;
  padding: 10px 20px;
  background-color: ${(props) =>
    props.type === "error"
      ? props.theme.colors.danger
      : props.theme.colors.success};
  position: absolute;
  top: 50px;
  animation-name: ${slideFromRight};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;
