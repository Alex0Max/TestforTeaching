import GameStat from "./components/gameStat/GameStat";
import PlayersStat from "./components/playersStat/PlayersStat";

function App() {
  return (
    <>
      Hello project
      <div style={{
        display:'flex',
        flexDirection:'row'
      }}>
      <PlayersStat/>
      <GameStat/>
      </div>
    </>
  );
}

export default App;
