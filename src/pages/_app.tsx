import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { DAppProvider, ChainId } from '@usedapp/core';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DAppProvider
    config={{
      readOnlyChainId: ChainId.Hardhat,
      readOnlyUrls: {
        [ChainId.Rinkeby]: `https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`,
        [ChainId.Hardhat]: 'http://localhost:8545',
      },
    }}
  >
    <Component {...pageProps} />
  </DAppProvider>
);

export default MyApp;
