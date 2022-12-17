import { RecoilRoot } from 'recoil' // recoil을 사용하기 위해 RecoilRoot로 감싸주기
import Counter from './Counter'

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

export default App;
