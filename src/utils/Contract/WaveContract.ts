import { utils } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import manifest from 'tmp/contracts/manifest.json';

const { WavePortal } = manifest.contracts;

const AbiInterface = new utils.Interface(WavePortal.abi);
export const contractAddress = WavePortal.address;

export const contractCall = {
  abi: AbiInterface,
  address: contractAddress,
};

export const contract = new Contract(contractAddress, AbiInterface);
