import Artistas from './components/Artistas'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import QuemSomos from './components/QuemSomos'
import Sobre from './components/Sobre'

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Sobre />
      <Artistas />
      <QuemSomos />
      <Footer />
    </div>
  );
}
