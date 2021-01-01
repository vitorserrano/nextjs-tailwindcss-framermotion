import Head from 'next/head';

import RocketseatLogo from '../assets/rocketseat.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ReactSetup</title>
      </Head>

      <main>
        <RocketseatLogo />
        <h1>Hello World</h1>
      </main>
    </div>
  );
};

export default Home;
