import * as React from 'react';
import Navigation from './src/navigation';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  React.useEffect(() => {
    lockOrientation()
  }, [])
  const lockOrientation = async () => {
   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
  }
  return (
    <Navigation />
  );
}


