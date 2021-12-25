import { utils } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { abi } from './abi';

const AbiInterface = new utils.Interface(abi);
export const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

export const contractCall = {
  abi: AbiInterface,
  address: contractAddress,
};

export const contract = new Contract(contractAddress, AbiInterface);
