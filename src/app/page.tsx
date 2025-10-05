import { Eventos } from '@/Sections/Events';
import { Header } from '@/Sections/Header';
import { Partners } from '@/Sections/Partners';
import Services from '@/Sections/Services';
import { Team } from '@/Sections/Team';
import type { NextPage } from 'next';

//import {Statistics} from '../components/statistics';

const Home: NextPage = () => {
  
  return (
    <>

      <main >

        <Header />

        <Services />

        <Eventos />

        <Team />

        <Partners />

        {/*<Statistics />*/}
      </main>
    </>
  );
};

export default Home;
