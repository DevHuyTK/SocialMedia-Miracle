import * as React from 'react';
import Navigation from './src/navigation';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/store/Reducers/index'
import rootSaga from './src/store/Sagas/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

   
export default function App() {
  React.useEffect(() => {
    lockOrientation()
  }, [])
  const lockOrientation = async () => {
   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
  }
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


