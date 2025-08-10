import type { NextPage } from 'next';
import { Header } from '../components/header';
import { Partners } from '../components/partners';
import { Services } from '../components/services';
import { Eventos } from '../components/events';
//import {Statistics} from '../components/statistics';

const Home: NextPage = () => {
  
  return (
    <>

      <main className=''>

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
