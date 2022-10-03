import './App.css';
// import Button from './components/Button'
// import InputSample from './components/InputSample'
import Hello from './components/Hello'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <>
      {/* <Button /> */}
      {/* <InputSample /> */}
      <Wrapper>
        <Hello name="react" color="red"/>
        <Hello color="pink"/>
      </Wrapper>
    </>
  );
}

export default App;
