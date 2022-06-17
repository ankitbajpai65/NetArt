import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="mainDiv pb-2">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
