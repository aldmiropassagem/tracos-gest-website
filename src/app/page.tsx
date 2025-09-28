import type { NextPage } from 'next';
import { Header } from '../components/header';
import { Partners } from '../components/partners';
import { Eventos } from '../components/events';
import Services from '@/components/services/Services';
//import {Statistics} from '../components/statistics';

const Home: NextPage = () => {
  
  return (
    <>

      <main >

        <Header />

        <Services />

        <Eventos />

        <Partners />

        {/*<Statistics />*/}
      </main>
    </>
  );
};

export default Home;
