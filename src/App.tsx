import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Redux from './redux/Redux';
import { CounterProvider } from './context/CounterContext';
import Context from './context/Context';
import { useState } from 'react';

export default function App() {
  const [renderContext, setRenderContext] = useState(false);
  const [renderRedux, setRenderRedux] = useState(false);

  return (
    <main>
      <button
        onClick={() => {
          setRenderRedux(!renderRedux);
          setRenderContext(!renderContext);
        }}
      >
        Toggle render both
      </button>
      <div className="round">
        <section>
          <h1>React Context API</h1>
          <button onClick={() => setRenderContext(!renderContext)}>
            Toggle Render Context
          </button>
          <CounterProvider>
            {renderContext
              ? Array.from({ length: 10000 }, () => <Context />)
              : null}
          </CounterProvider>
        </section>
        <section>
          <h1>Redux</h1>
          <button onClick={() => setRenderRedux(!renderRedux)}>
            Toggle Render Redux
          </button>
          <Provider store={store}>
            {renderRedux
              ? Array.from({ length: 10000 }, () => <Redux />)
              : null}
          </Provider>
        </section>
      </div>
    </main>
  );
}
