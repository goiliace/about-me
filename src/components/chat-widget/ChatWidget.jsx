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
        const data = { data: newMessage }
        console.log(newMessage);
        fetch('https://apichatbot-production.up.railway.app/get', {
                'method': 'POST',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                addResponseMessage(data.bot);
            })
            .catch((error) => {
                addResponseMessage("Hiện tại hệ thống đang lỗi, bạn chờ Hưng xíu nha");
            });
        // let res =  req.json();

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

