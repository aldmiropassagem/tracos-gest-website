import type {NextPage} from 'next';
import {Header} from '../components/header';
import {Partners} from '../components/partners';
import {Services} from '../components/services';
import {Features3} from '../components/features3';
import {Statistics} from '../components/statistics';

const Home: NextPage = () => {
   return (
      <>
       
        <main className=''>
          <Header />
          
          <Services />
          <Partners />
        
          <Features3 />
          <Statistics />
      </main>
    </>
   );
};

export default Home;
