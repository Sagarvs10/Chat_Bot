import {useMemo} from 'react';
import {AiChat} from '@nlux/react';
import './custom-nova-theme.css';
import '@nlux/themes/nova.css';
import {streamAdapter} from './adapter';
import {user, botStyle} from './personas';

export default () => {
  const adapter = useMemo(() => streamAdapter, []);
  return (
    <AiChat
      className="custom-ai-chat-comp"
      adapter={adapter}
      personaOptions={{
        bot: {
          name: 'Welcome to our Restaurant',
          picture: <span style={botStyle}>🤖</span>,
          tagline: 'Im Your Restaurant bot'
        },
        user
      }}
      layoutOptions={{
        height: 800,
        maxWidth: 500,
        
      }}
    />
  );
};