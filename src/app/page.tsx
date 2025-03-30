import type {NextPage} from 'next';
import {Hero} from '../components/hero';
import {Trusted} from '../components/trusted';
import {Features1} from '../components/features1';
import {Features2} from '../components/features2';
import {Features3} from '../components/features3';
import {Statistics} from '../components/statistics';
import {Footer} from '../components/footer';

const Home: NextPage = () => {
   return (
      <>
       
        <main className=''>
          <Hero />
          <Trusted />
          <Features1 />
          <Features2 />
          <Features3 />
          <Statistics />
          <Footer />
      </main>
    </>
   );
};

export default Home;
