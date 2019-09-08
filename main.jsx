function App() {
  return (
    <div>
      <Tweet content="Hello" />
      <Tweet content="React!" />
    </div>
  );
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);