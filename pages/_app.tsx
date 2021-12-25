import 'styles/globals.css';
import type { AppProps } from 'next/app';
import {
  DAppProvider, ChainId, Localhost, Rinkeby,
} from '@usedapp/core';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DAppProvider
    config={{
      readOnlyChainId: ChainId.Rinkeby,
      readOnlyUrls: {
        [ChainId.Rinkeby]: `https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`,
      },
      networks: [Localhost, Rinkeby],
    }}
  >
    <Component {...pageProps} />
  </DAppProvider>
);

export default MyApp;
