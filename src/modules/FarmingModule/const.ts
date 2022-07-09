import BigNumber from 'bignumber.js'
import gql from 'graphql-tag'

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1)

export const formattedBigIntDecimals = 6

// Defines the update interval of the pool list in seconds
export const refetchFarmingInterval = 10
// Defines the update interval of the current block in seconds
export const refetchCurrentBlockInterval = 60
// Defines the update interval of the earned list in seconds
export const refetchRewardsInterval = 10

export const farmingContractAddress = '0x32bE07FB9dBf294c2e92715F562f7aBA02b7443A'

export const farmingQuery = gql`query FarmingQuery($first: Int! $skip: Int! $userId: String!) {
  farming(id: "${farmingContractAddress}") {
    id
    poolCount
    totalAllocPoint
    pools(first: $first skip: $skip) {
      id
      pair
      bonusMultiplier
      totalTokensStaked
      allocPoint
      bonusEndBlock
      users(where: {address: $userId}) {
        amount
      }
    }
  }
}`

export const pairsQuery = gql`query PairsQuery($pairIds: [String]!) {
  pairs(
    where: { id_in: $pairIds }
  ) {
    id
    name
    reserveUSD
    totalSupply
  }
}`

export const liquidityPositionsQuery = gql`query LiquidityPositionsQuery($userId: String!) {
  user(id: $userId) {
    liquidityPositions {
      liquidityTokenBalance
      pair {
        id
      }
    }
  }
}`