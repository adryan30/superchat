import React from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';

import {
  Container,
  ChatWindow,
  ChatArea,
  Sidebar,
  SidebarHeader,
  UserList,
  UserCard,
  Divider,
  Header,
  HeaderLogo,
  MessageDiv,
  MessageInput,
} from './styles';

import logo from '../../../assets/logo_header.png';

const Chatroom: React.FC = () => {
  const username = JSON.parse(localStorage.getItem('username'));
  const users = [
    'Adryan',
    'Peppa',
    'Ivillys',
    'Jonas',
    'Hiran',
    'Davi',
    'Monaly',
    'Adryan',
    'Peppa',
    'Ivillys',
    'Jonas',
    'Hiran',
    'Davi',
    'Monaly',
    'Adryan',
    'Peppa',
    'Ivillys',
    'Jonas',
    'Hiran',
    'Davi',
    'Monaly',
    'Adryan',
    'Peppa',
    'Ivillys',
    'Jonas',
    'Hiran',
    'Davi',
    'Monaly',
    'Adryan',
    'Peppa',
    'Ivillys',
    'Jonas',
    'Hiran',
    'Davi',
    'Monaly',
    'Adryan',
    'Peppa',
    'Ivillys',
    'Jonas',
    'Hiran',
    'Davi',
    'Monaly',
    'Adryan',
    'Peppa',
    'Ivillys',
    'Jonas',
    'Hiran',
    'Davi',
    'Monaly',
    'Adryan',
    'Peppa',
    'Ivillys',
    'Jonas',
    'Hiran',
    'Davi',
    'Monaly',
  ];

  return (
    <Container>
      <ChatWindow>
        <Header>
          <HeaderLogo src={logo} alt="Logo do Superchat" />
        </Header>
        <Sidebar>
          <SidebarHeader>Usuários Online</SidebarHeader>
          <ScrollContainer className="scroll-container">
            <UserList>
              {users.map((user, index) => {
                return (
                  <>
                    <UserCard key={index}>{user}</UserCard>
                    <Divider />
                  </>
                );
              })}
            </UserList>
          </ScrollContainer>
        </Sidebar>
        <ChatArea>
          <MessageDiv>
            <input type="text" />
            {/* <MessageInput></MessageInput> */}
          </MessageDiv>
        </ChatArea>
      </ChatWindow>
    </Container>
  );
};

export default Chatroom;
