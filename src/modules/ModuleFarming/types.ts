import { Address } from '@/core/kaikas'
import BigNumber from 'bignumber.js'
export * from '../ModuleFarmingStakingShared/types'

export interface Pool {
  id: Address
  name: string
  pairId: Address
  staked: BigNumber
  earned: BigNumber
  balance: BigNumber
  annualPercentageRate: BigNumber
  liquidity: BigNumber
  multiplier: BigNumber
  createdAtBlock: number
}

export const Sorting = {
  Default: 'default',
  Liquidity: 'liquidity',
  AnnualPercentageRate: 'annualPercentageRate',
  Multiplier: 'multiplier',
  Earned: 'earned',
  Latest: 'latest',
} as const

export type Sorting = typeof Sorting[keyof typeof Sorting]
