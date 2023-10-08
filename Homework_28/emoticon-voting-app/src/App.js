import React, {useState} from 'react';
import EmoticonList from './Components/EmoticonListComponent/EmoticonList';
import './App.css';

function App() {
    const [emoticons] = useState(['🤠', '😃', '🤡', '😡', '😆']);
    const [winner, setWinner] = useState('');

    const calculateWinner = () => {
        const voteCounts = {};

        emoticons.forEach((emoticon) => {
            const count = localStorage.getItem(emoticon) || 0;
            voteCounts[emoticon] = parseInt(count);
        });

        const maxVotes = Math.max(...Object.values(voteCounts));
        const winners = Object.keys(voteCounts).filter(
            (emoticon) => voteCounts[emoticon] === maxVotes
        );

        if (winners.length === 1) {
            setWinner(winners[0]);
        } else {
            setWinner("It's a tie!");
        }
    };

    return (
        <div className="Container">
            <h1>Emoticon Voting App</h1>
            <EmoticonList emoticons={emoticons}/>

            <button onClick={calculateWinner} className="show-results-button">
                Show Results
            </button>
            {winner && <p className="results">Winning Smiley: {winner}</p>}
        </div>
    );
}


export default App;
