import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Education from './components/Education';
import SoftSkills from './components/SoftSkills';
import HardSkills from './components/HardSkills';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{
      backgroundColor: '#242424',
      minHeight: '100vh',
      padding: '40px 20px',
      color: 'white'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Header />
        <hr style={{ border: 'none', borderTop: '1px solid #aaa', margin: '30px 0' }} />
        <Contact />
        <About />
        <Education />
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '20px' }}>
          <SoftSkills />
          <HardSkills />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;