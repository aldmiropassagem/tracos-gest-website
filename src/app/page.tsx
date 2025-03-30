import type {NextPage} from 'next';
import {Header} from '../components/header';
import {Trusted} from '../components/trusted';
import {Features2} from '../components/features2';
import {Features3} from '../components/features3';
import {Statistics} from '../components/statistics';

const Home: NextPage = () => {
   return (
      <>
       
        <main className=''>
          <Header />
          
          <Trusted />
          <Features2 />
          <Features3 />
          <Statistics />
      </main>
    </>
   );
};

export default Home;
