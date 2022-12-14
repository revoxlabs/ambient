import type { Component } from 'solid-js';
import { Routes, Route } from "@solidjs/router"
import NavBar from "./components/layouts/navBar";
import ColorTablePage from './pages/colorTablePage';
import ComingSoonPage from './pages/comingSoonPage';
import Footer from './components/layouts/footer';

const App: Component = () => {
  return (
   <>
     <div class='flex flex-col h-screen justify-between'>
      <NavBar/>
      <main class='my-auto'>
        <div class="h-20">
        </div>
        <Routes>
            <Route path={"/"} component={ColorTablePage}/>
            <Route path={"/coming-soon"} component={ComingSoonPage}/>
            <Route path={"/*"} component={ComingSoonPage}/>
        </Routes>
        <div class="h-20">
        </div>
      </main>
      <Footer/>
     </div>
   </>
  );
};

export default App;
