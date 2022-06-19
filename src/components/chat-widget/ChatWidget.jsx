import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './chatWidget.css';
// import logo from './logo.svg';
export const ChatWidget = () => {
    useEffect(() => {
        addResponseMessage('Ai z :D');
    }, []);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);;
            const url = '/get?mess=' + newMessage;
            console.log(url);
            fetch(url).then(
                res => res.json()
            ).then(
                data => {
                   addResponseMessage(data.bot);
                }
            )
        
    };
    
    return (
        <div className="App">
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                // profileAvatar={hehe}
                title="Xin chào!"
                subtitle="Cái này demo thôi :))"
            />
        </div>
    );
}

