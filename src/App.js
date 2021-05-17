import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer></CounterContainer>
      <hr />
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
