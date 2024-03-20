import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage'
import SolanaWalletProvider from './contexts/WalletProvider'

function App() {
  return (
    <SolanaWalletProvider >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </SolanaWalletProvider>
  );
}

export default App;
