/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "../types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type Burn = ContractEventLog<{
  sender: string;
  amount0: string;
  amount1: string;
  to: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Mint = ContractEventLog<{
  sender: string;
  amount0: string;
  amount1: string;
  0: string;
  1: string;
  2: string;
}>;
export type Swap = ContractEventLog<{
  sender: string;
  amount0In: string;
  amount1In: string;
  amount0Out: string;
  amount1Out: string;
  to: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type Sync = ContractEventLog<{
  reserve0: string;
  reserve1: string;
  0: string;
  1: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;

export interface DexPair extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): DexPair;
  clone(): DexPair;
  methods: {
    DOMAIN_SEPARATOR(): NonPayableTransactionObject<string>;

    MINIMUM_LIQUIDITY(): NonPayableTransactionObject<string>;

    PERMIT_TYPEHASH(): NonPayableTransactionObject<string>;

    allowance(arg0: string, arg1: string): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    balanceOf(arg0: string): NonPayableTransactionObject<string>;

    burn(to: string): NonPayableTransactionObject<{
      amount0: string;
      amount1: string;
      0: string;
      1: string;
    }>;

    decimals(): NonPayableTransactionObject<string>;

    factory(): NonPayableTransactionObject<string>;

    getReserves(): NonPayableTransactionObject<{
      _reserve0: string;
      _reserve1: string;
      _blockTimestampLast: string;
      0: string;
      1: string;
      2: string;
    }>;

    initialize(
      _token0: string,
      _token1: string
    ): NonPayableTransactionObject<void>;

    kLast(): NonPayableTransactionObject<string>;

    mint(to: string): NonPayableTransactionObject<string>;

    name(): NonPayableTransactionObject<string>;

    nonces(arg0: string): NonPayableTransactionObject<string>;

    permit(
      owner: string,
      spender: string,
      value: number | string | BN,
      deadline: number | string | BN,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<void>;

    price0CumulativeLast(): NonPayableTransactionObject<string>;

    price1CumulativeLast(): NonPayableTransactionObject<string>;

    "safeTransfer(address,uint256)"(
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    "safeTransfer(address,uint256,bytes)"(
      recipient: string,
      amount: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    "safeTransferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      sender: string,
      recipient: string,
      amount: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    skim(to: string): NonPayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    swap(
      amount0Out: number | string | BN,
      amount1Out: number | string | BN,
      to: string,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    symbol(): NonPayableTransactionObject<string>;

    sync(): NonPayableTransactionObject<void>;

    token0(): NonPayableTransactionObject<string>;

    token1(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      to: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Burn(cb?: Callback<Burn>): EventEmitter;
    Burn(options?: EventOptions, cb?: Callback<Burn>): EventEmitter;

    Mint(cb?: Callback<Mint>): EventEmitter;
    Mint(options?: EventOptions, cb?: Callback<Mint>): EventEmitter;

    Swap(cb?: Callback<Swap>): EventEmitter;
    Swap(options?: EventOptions, cb?: Callback<Swap>): EventEmitter;

    Sync(cb?: Callback<Sync>): EventEmitter;
    Sync(options?: EventOptions, cb?: Callback<Sync>): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Burn", cb: Callback<Burn>): void;
  once(event: "Burn", options: EventOptions, cb: Callback<Burn>): void;

  once(event: "Mint", cb: Callback<Mint>): void;
  once(event: "Mint", options: EventOptions, cb: Callback<Mint>): void;

  once(event: "Swap", cb: Callback<Swap>): void;
  once(event: "Swap", options: EventOptions, cb: Callback<Swap>): void;

  once(event: "Sync", cb: Callback<Sync>): void;
  once(event: "Sync", options: EventOptions, cb: Callback<Sync>): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
