import Header from "./components/layout/Header";
import {Route, Routes } from 'react-router-dom';
import CreateTeam from './components/CreateTeam';


export default function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/create" element={<CreateTeam />} />
        </Routes>
    </div>
  );
}