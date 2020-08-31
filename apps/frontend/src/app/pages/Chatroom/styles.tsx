import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

export const ChatWindow = styled.div`
  height: 90vh;
  width: 90vw;
  display: grid;
  color: white;
  place-items: center;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 1fr 7fr;
  /* grid-template-areas:
    'header  sidebar'
    'chat sidebar'; */
  /* @media (max-width: 1000px) { */
  grid-template-areas:
    'header  header'
    'chat chat';
  /* } */
  background-image: radial-gradient(
      circle at center center,
      hsla(166, 0%, 10%, 1) 0%,
      hsla(181, 0%, 10%, 1) 29%,
      transparent 65%
    ),
    linear-gradient(
      90deg,
      rgb(35, 35, 35) 0%,
      rgb(35, 35, 35) 50%,
      rgb(35, 35, 35) 50%,
      rgb(35, 35, 35) 100%
    );
  background-size: 7px 7px;
`;

export const Header = styled.div`
  grid-area: header;
  display: grid;
  place-items: center;
`;

export const HeaderLogo = styled.img`
  height: 8rem;
`;

export const Sidebar = styled.div`
  height: calc(100% - 3rem);
  width: calc(100% - 1.5rem);
  opacity: 75%;
  border-radius: 0.5rem;
  box-shadow: 0px 6px 10px 0px;
  grid-area: sidebar;
  background-color: white;
  color: black;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 9fr;
  grid-template-areas:
    'header'
    'user-list';
`;

export const SidebarHeader = styled.div`
  grid-area: header;
  text-align: center;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  border-bottom: 1.5px solid #000;
`;

export const UserList = styled.ul`
  grid-area: user-list;
  cursor: grab;
  overflow: auto;
  background-clip: padding-box;
`;

export const UserCard = styled.li`
  position: relative;
  list-style-type: none;
  text-align: center;
  padding: 0.5rem 0;
  clip: auto;
  overflow: auto;
`;

export const Divider = styled.hr`
  color: black;
  border-top: 1px dotted black;
`;

export const ChatArea = styled.div`
  grid-area: chat;
  height: 95%;
  width: 95%;
  border-radius: 0.5rem;
  color: black;
  box-shadow: 0px 6px 10px 0px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 8fr 1fr;
  grid-template-areas:
    '.   messages  .'
    '.    input    .';
`;

export const MessagesDiv = styled.div`
  grid-area: messages;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageBubble = styled.div`
  width: ${(props) => (props.theme.message ? '100%' : '50%')};
  margin-top: 10px;
  border: 1px blue dotted;
  border-radius: 50px;
  padding: 2px 15px;
`;

export const MessageHeader = styled.div`
  font-weight: bold;
  text-align: ${(props) => props.theme.headAlign};
`;

export const MessageText = styled.div`
  text-align: ${(props) => props.theme.messageAlign};
  word-wrap: break-word;
`;

export const MessageInputDiv = styled.div`
  grid-area: input;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  grid: '. input button' 1fr/ 1fr 8fr 1fr;
`;

export const MessageInput = styled.input`
  grid-area: input;
  height: 65%;
  width: 100%;
  border-radius: 50px;
  font-size: 1.3rem;
  padding-left: 12px;
  outline: 0;
  transition: border 1s;
  border: 4px solid grey;
  &:focus {
    border: 4px solid black;
  }
`;
