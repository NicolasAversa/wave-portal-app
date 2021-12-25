import { useContractCall } from '@usedapp/core';
import { contractCall } from '../utils/Contract';

type Data = {
  message: string;
  gifId: string;
  timestamp: {
    _hex: string;
  }
};

export type Wave = {
  message: string;
  gifId: string;
  id: string;
};

export const useWaves = () => {
  const data = useContractCall({
    ...contractCall,
    method: 'getAllWaves',
    args: [],
  });

  const waves = data
    ? data[0].map(({ message, gifId, timestamp: { _hex } }: Data) => ({
      message,
      gifId,
      id: _hex,
    }))
    : [];

  return waves;
};
