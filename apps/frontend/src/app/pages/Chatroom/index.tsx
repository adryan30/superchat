import React, { useState, useEffect } from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
import { Fab } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

import io from 'socket.io-client';

import {
  Container,
  ChatWindow,
  ChatArea,
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

  return (
    <Container>
      <ChatWindow>
        <Header>
          <HeaderLogo src={logo} alt="Logo do Superchat" />
        </Header>
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
        </ChatArea>
      </ChatWindow>
    </Container>
  );
};

export default Chatroom;

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
