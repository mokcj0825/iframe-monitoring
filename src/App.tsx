import {useEffect} from 'react'
import './App.css'

function App() {
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      console.log('[React] Received message:', e);
      if (e.data?.type === 'MEMORY_REPORT') {
        console.log(
          `[React] JS Heap: ${(e.data.jsHeap / 1024 / 1024).toFixed(2)} MB`
        );
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      <iframe
        src="/gcs/heap-monitoring/monitoring-app-002/index.html"
        width="800"
        height="600"
        style={{ border: 'none' }}
        title="Cocos Game"
      />
      {/*<iframe
        src="/gcs/heap-monitoring/test.html"
        width="800"
        height="600"
        style={{ border: 'none' }}
        title="Cocos Game"
      />*/}
    </>
  );
}

export default App
