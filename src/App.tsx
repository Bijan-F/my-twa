import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { useCounterContract } from './hooks/useCounterContract';
import { useTonConnect } from './hooks/useTonConnect';

function App() {
  const { value, address, sendIncrement } = useCounterContract();
  const { connected } = useTonConnect();
  
  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />

        <div className='Card'>
          <b>Counter Address:</b>
          <div className='Hint'>{address?.slice(0, 30) + "..."}</div>
        </div>

        <div className='Card'>
          <b>Counter Value:</b>
          <div>{value ?? 'Loading...'}</div>
        </div>

        <a
          className={`Button ${connected ? "Activated" : "Disabled"}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </a>

      </div>
    </div>
  );
}

export default App