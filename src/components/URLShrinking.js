import './URLShrinking.css'
import { useState } from 'react';


const URLShrinking = function () {
    const [longURL, setLongUrl] = useState("");
    const [customCode, setCustomCode] = useState("");
    const [shortURL, setShortUrl] = useState("");

    const handleShortenUrl = function () {
        if (customCode.length > 4) {
            setShortUrl(`https://cpit405.co/${customCode}`);
        } else {
            const id = Math.random().toString(36).substring(6);
            setShortUrl(`https://cpit405.co/${id}`);
        }
    }

    const handleLongUrlChange = (e) => {
        setLongUrl(e.target.value);
    }

    return (
        <div className="shrink-url-form">
            <h1>Link Shrinker</h1>
            <div className="form-group">
                <label htmlFor='longURL'>Long URL: </label>
                <input type="text" id='longURL'
                    value={longURL}
                    onChange={handleLongUrlChange}
                />

                <label htmlFor='customCode'>Enter short code:</label>
                <input type="text" id='customCode'
                    value={customCode}
                    onChange={(e) => setCustomCode(e.target.value)}
                ></input>

            </div>
            <button className="submit-btn" onClick={handleShortenUrl}>Shorten URL</button>
            <div className="result">
                <label htmlFor='shortURL'>Short URL:</label>
                <input type="text" id="shortURL" value={shortURL} readOnly />

            </div>
        </div>
    )
}

export default URLShrinking;