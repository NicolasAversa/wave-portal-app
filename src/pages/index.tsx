import type { NextPage } from 'next';
import { useContractFunction, useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { contract } from 'utils/Contract';
import { useWaves, Wave } from 'hooks/useWaves';

const Home: NextPage = () => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const { send } = useContractFunction(contract, 'wave');
  const waves = useWaves();

  return (
    <div className="flex justify-center w-full mt-16">
      <div className="flex flex-col justify-center max-w-screen-sm">
        <h1 className="text-center text-3xl font-semibold mb-4">
          👋 Hey there!
        </h1>
        <div className="text-center">
          Say hello to the world and send your message. This app will
          intelligently select a gif for you and save it to the blockchain.
          Let&apos;s play a little!
        </div>
        {waves.map(({ message, gifId, id }:Wave) => (
          <ul key={id}>
            <li>{message}</li>
            <li>{gifId}</li>
            <br />
          </ul>
        ))}
        {!account && (
        <button type="button" onClick={() => activateBrowserWallet()}>
          Connect Wallet
        </button>
        )}
        {' '}
        {account && (
        <>
          <p>
            Account:
            {' '}
            {account}
          </p>
          <br />
          <button
            type="button"
            onClick={() => send('Hello my friend', 'gif_url test')}
          >
            Wave to the world!
          </button>
        </>
        )}
        {etherBalance && (
        <p>
          Balance:
            {formatEther(etherBalance)}
        </p>
        )}
        <h3>Currently we have: 0 friendly waves!</h3>
      </div>
    </div>
  );
};

export default Home;
