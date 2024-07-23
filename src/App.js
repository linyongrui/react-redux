import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { inscrement, descrement, inscrementNum } from './store/modules/counterStore';

function App() {
  const { count } = useSelector(store => store.counterReduce)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(descrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
      <button onClick={() => dispatch(inscrementNum(10))}>+10</button>
    </div>
  );
}

export default App;
