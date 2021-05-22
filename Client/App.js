import * as React from 'react';
import Navigation from './src/navigation';
import redux from './src/store/store'
import * as ScreenOrientation from 'expo-screen-orientation';
import { Provider } from 'react-redux'
<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/store/Reducers/index'
import rootSaga from './src/store/Sagas/index'
=======
>>>>>>> db3013ca565cca50d22f2fcbec6266413ec423d4

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
<<<<<<< HEAD
    <Provider store={store}>
      <Navigation />
=======
    <Provider store={redux.store}>
        <Navigation />
>>>>>>> db3013ca565cca50d22f2fcbec6266413ec423d4
    </Provider>
  );
}


