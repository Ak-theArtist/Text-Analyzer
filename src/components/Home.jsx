import React, { useState } from 'react';
import Footer from './Footer';

function Home() {
    const [text, setText] = useState("");

    function toUpperCase() {
        setText(text.toUpperCase());
    }

    function toLowerCase() {
        setText(text.toLowerCase());
    }

    function toCube() {
        const number = parseFloat(text);
        if (!isNaN(number)) {
            setText((number ** 3).toString());
        } else {
            alert("Please enter a valid number to cube.");
        }
    }

    function changeStyle() {
        let textElement = document.getElementById('text');
        textElement.style.color = 'red';
    }

    function WelcomeMessage() {
        alert(`Good Morning! Welcome ${text}`);
    }

    function handleNumber(e) {
        setText(e.target.value);
    }

    function clearText() {
        setText(""); 
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    return (
        <>
            <div className='home'>
                <h1>
                    <b>Enter The Text To Analyze:</b>
                </h1>
                <textarea
                    value={text}
                    onChange={handleNumber}
                    className='text-area'
                    name="text"
                    id="text"
                    rows={10}
                    cols={100}
                    placeholder='Enter Your Text!'
                />
                <div className="btns">
                    <button onClick={toUpperCase}>Upper Case</button>
                    <button onClick={toLowerCase}>Lower Case</button>
                    <button onClick={toCube}>Cube</button>
                    <button onClick={changeStyle}>Style</button>
                    <button onClick={WelcomeMessage}>Welcome</button>
                    <button onClick={clearText}>Clear</button>
                    <button type="submit" onClick={speak}>Speak</button>
                </div>
                <h2 className='home-h2'>
                    <b>Your Text Summary:</b>
                    <p>{text.split(" ").filter((e) => e.length !== 0).length} words and {text.length} characters</p>
                </h2>
            </div>
            <Footer />
        </>
    );
}

export default Home;
