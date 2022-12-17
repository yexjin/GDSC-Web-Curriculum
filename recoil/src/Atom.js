import { atom } from 'recoil';

let countState = atom({
  key: 'counter', // counter라는 key를 통해 atom 구분
  default: 0,   // 초기 state
});

export default countState;

