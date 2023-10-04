import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent.jsx';
import NavigationBarComponent from './Components/NavigationBarComponent.jsx';
import MainContainerComponent from './Components/MainContainerComponent.jsx';

function App() {
    return (
        <div className="App" style={{height: "100%"}}>
            <HeaderComponent />
            <div className="main_container" style={{display: "flex", height: "100%", marginTop: "100px"}}>
                <NavigationBarComponent />
                <MainContainerComponent />
            </div>
        </div>

    );
}

export default App;
