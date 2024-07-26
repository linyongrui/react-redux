import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { inscrement, descrement, inscrementNum } from './store/modules/counterStore';
import { fetchChannelList } from './store/modules/channelStore';
import { useEffect } from 'react';

function App() {
  const { count } = useSelector(store => store.counterReduce2)
  const { channelList } = useSelector(store => store.channelReduce2)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (
    <div>
      <button onClick={() => dispatch(descrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
      <button onClick={() => dispatch(inscrementNum(10))}>+10</button>
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
