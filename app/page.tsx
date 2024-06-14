import Layout from './layout';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <main>
        <HeroSection />
        {/* Aqui você pode adicionar o grid de imagens dos jogos populares */}
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
