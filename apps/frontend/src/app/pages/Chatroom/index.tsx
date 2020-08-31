<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
import { Fab } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

import io from 'socket.io-client';
=======
import React from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
>>>>>>> Stashed changes
=======
import React from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
>>>>>>> Stashed changes

import {
  Container,
  ChatWindow,
  ChatArea,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  // Sidebar,
  // SidebarHeader,
  // UserList,
  // UserCard,
  // Divider,
  Header,
  HeaderLogo,
  MessageInputDiv,
  MessageInput,
  MessagesDiv,
  MessageBubble,
  MessageHeader,
  MessageText,
} from './styles';

import logo from '../../../assets/logo_header.png';
const socket = io('http://localhost:4000');

interface ChatMessage {
  user: string;
  message: string;
}

const Chatroom: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const username = JSON.parse(localStorage.getItem('username'));

  const addChatMessage = (message: ChatMessage) =>
    setChat((state) => [...state, message]);

  useEffect(() => {
    socket.on('msgToClient', addChatMessage);
    socket.on('userJoin', (id: string) => {
      addChatMessage({ user: 'userJoin', message: `${id} entrou` });
    });
    socket.on('userLeft', (id: string) => {
      addChatMessage({ user: 'userLeft', message: `${id} saiu` });
    });
    return () => socket.disconnect();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const handleSubmit = () => {
    socket.emit('msgToServer', {
      user: username,
      message,
    });
    setMessage('');
  };
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

  return (
    <Container>
      <ChatWindow>
        <Header>
          <HeaderLogo src={logo} alt="Logo do Superchat" />
        </Header>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <ChatArea>
          <MessagesDiv>
            {chat.map((chat) => {
              let messageAlign: string = 'left';
              let headAlign: string = 'right';
              if (chat.user.match(/user(Left|Join)/g)) {
                messageAlign = 'center';
                headAlign = 'center';
              }
              if (chat.user === username) {
                messageAlign = 'right';
                headAlign = 'left';
              }
              return (
                <MessageBubble theme={{ message: messageAlign !== 'center' }}>
                  {headAlign !== 'center' && (
                    <MessageHeader theme={{ headAlign }}>
                      {chat.user}
                    </MessageHeader>
                  )}
                  <MessageText theme={{ messageAlign }}>
                    {chat.message}
                  </MessageText>
                </MessageBubble>
              );
            })}
          </MessagesDiv>
          <MessageInputDiv>
            <MessageInput
              placeholder="Digite algo..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              onKeyPress={handleKeyPress}
            />
            <Fab
              color="primary"
              aria-label="send"
              style={{ gridArea: 'button' }}
              onClick={handleSubmit}
            >
              <SendIcon />
            </Fab>
          </MessageInputDiv>
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        </ChatArea>
      </ChatWindow>
    </Container>
  );
};

export default Chatroom;
<<<<<<< Updated upstream
<<<<<<< Updated upstream

{
  /* <Sidebar>
  <SidebarHeader>Usuários Online</SidebarHeader>
  <ScrollContainer className="scroll-container">
    <UserList>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <UserCard>{user}</UserCard>
            <Divider />
          </div>
        );
      })}
    </UserList>
  </ScrollContainer>
</Sidebar> */
}
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
