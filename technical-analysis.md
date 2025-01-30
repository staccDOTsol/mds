# Technical Analysis of Jito-Enabled Sandwich Attacks on PumpDotFun

## Overview

This analysis examines sandwich attacks being executed on PumpDotFun (program ID: 6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P) in January 2025. A critical context: Jito's public mempool has been turned OFF since March 2024, which means these sandwich attacks are not coming from public MEV searchers, but rather from privileged actors with special access to transaction information.

Since April 2024, PumpDotFun's revenues have increased dramatically from sub-$10k/day, now reaching record-breaking days of 15.5M in revenues per day. This timing correlates with the shift in how sandwich attacks are being executed.

## Evidence from 2025-01-30T02:27Z

### Profit Sequence Analysis (2025-01-30T02:27Z)
Within a less-than-60-second window, we observed systematic profit extraction in sequential bundles. Looking at just one minute, we caught a sequence of more than five sandwich attacks, for example:

1. Bundle d8133f...6a6384: $2.03 profit
2. Bundle 042901...1cf497: $16.22 profit
3. Bundle 00b0f9...176f87: $4.83 profit
4. Bundle 2f3785...0eef37: $1.71 profit
5. Bundle 79de55...f29ba0: $1.31 profit

Total profit shown in example sequence: $26.10

Note: This analysis only captures sandwich attacks from traders using Jito's bundle service. Additional MEV extraction may occur through:
- Private validator networks running pre-March 2024 Jito mempool forks
- Validators with sufficient stake weight to occasionally lead block production
- Other private transaction routing mechanisms

### Detection Methodology
The system identifies sandwich attacks by:
- Monitoring Jito bundles with 3+ transactions
- Tracking SOL balance changes for accounts
- Identifying patterns where an account:
  1. Attacker spends SOL (buy, price impact)
  2. Target spends SOL (buy, exploited)
  3. Attacker gains SOL (sell)
- Calculating profit by comparing initial and final balances
- Check [analyze-sandwiches.js](analyze-sandwiches.js) for the code that generated the results

### Key Findings

The sequence demonstrates systematic sandwich attacks:

1. Account Activity:
- Primary account GzhY5g...Ufz5Es executing multiple sandwiches
- Total SOL movement: ~11 SOL in under a minute
- Consistent profit extraction pattern across bundles

2. Bundle Structure:
- Each bundle contains exactly 3 transactions
- Consistent pattern: buy → target → sell
- Validator tips optimized for inclusion (~0.002-0.025 SOL)

3. Profitability:
- Average profit per sandwich: ~0.07 SOL
- Projected annual profit: ~95,000 SOL ($22.5M at current prices)
- Most profitable single sandwich: 1.48 SOL by EYxDYeB3mWtiaybpiZKMqGGFZrUpPin6WmcAUD9HdkXR

### 4. Attack Flow

```
Attack Flow:
-----------
[User Transaction] ----1. Submitted----> [Transaction Pool]
                                              |
                                              | 2. Seen by
                                              v
                                     [Privileged Actor]
                                              |
                    /-------------------/-----/
                    |                   |     |
                    v                   v     v
             [Buy Transaction]  [User Tx]  [Sell Tx]
                    |                |        |
                    v                v        v
                    \------->[Jito Bundle]<---/
                                    |
                                    v
                              [Blockchain]
```

### 5. Profit Distribution

```
Profit Distribution (SOL):
------------------------
EYxDYeB3...dkXR: 2.2252  ████████████████████████████
59fqwo...AB7X2:  0.5754  ███████
AtTjQK...aa1oy:  0.2470  ███
7tMoEa...zaz8i:  0.2455  ███
BUNsy7...abRr:   0.0883  █
4mbZVu...in7Ti:  0.0355  █
```

### 6. Technical Implementation

The frontrunning is enabled by several key mechanisms:

1. Jito Bundle Submission:
```javascript
// Attackers submit bundles with structured transaction ordering
const bundle = {
  transactions: [buyTx, targetTx, sellTx],
  ...
}
```

2. Balance Tracking:
```javascript
// Monitor SOL balance changes
const preBalance = tx.meta.preBalances[accountIdx];
const postBalance = tx.meta.postBalances[accountIdx];
const balanceChange = postBalance - preBalance;
```

3. Profit Calculation:
```javascript
// Calculate total profit from sandwich
const totalProfit = (postBalance - spenderData.initialBalance) / 1e9;
```

### 5. Privileged Frontrunning Mechanism

The attack requires privileged access to transaction information that is only available to specific entities:

1. Transaction Requirements for Sandwich:
   - Signature
   - Blockhash
   - Message composition

2. Entities with Access:
   - PumpDotFun's UI operators, and those running alternative UI services
   - Jito's validator operators
   - Solana Labs validator operators
   - Certain validator operators with the largest stakeweight

3. Attack Execution:
   - Privileged actor sees incoming transaction details
   - Crafts sandwich transactions with exact knowledge of target
   - Ensures execution order through Jito bundle service
   - Extracts profit from price impact

This is notably different from public MEV searching, as it requires insider access to transaction information that has been private since Jito's mempool shutdown in March 2024.

## Impact

This analysis demonstrates a concerning reality:

1. PumpDotFun's design enables predictable price impacts
2. Only privileged actors can execute these attacks since March 2024
3. These actors have insider access to transaction information
4. Multiple accounts are actively exploiting this privileged position
5. Significant profits are being extracted (~$22.5M annually)
6. PumpDotFun's revenues have increased dramatically (from sub-$10k/day to $15.5M/day) since April 2024

This represents a significant shift from public MEV to privileged insider activity. The correlation between Jito's mempool shutdown, PumpDotFun's revenue surge, and continued sandwich attacks suggests a concentration of MEV extraction among privileged actors rather than public searchers.

### Extrapolated Impact (16-minute Sample)

Based on a brief 16-minute analysis window, the potential scale of MEV extraction through Jito bundles alone is staggering:

Projected Profits (Jito Bundles Only):
- Daily: 261.49 SOL ($61,795)
- Weekly: 1,830.41 SOL ($432,563)
- Monthly: 7,844.62 SOL ($1,853,841)
- Yearly: 95,442.92 SOL ($22,555,070)

Note: These projections are based on a very small sample size and only capture MEV extracted through Jito bundles. The total MEV extraction across all vectors (private validator networks, stake-weighted validators, etc.) is likely magntitudes higher.

## References

https://explorer.jito.wtf/bundle/d8133fd19cf0fc87e1ddf4eb0f922ed7f9fa9870d2fa4eeb9b267ab1fd6a6384

https://explorer.jito.wtf/bundle/042901f6ce7e4488375bd18a35427cfaa4feb6f0e7f43be998f7a592c01cf497

https://explorer.jito.wtf/bundle/00b0f90fb7d17a688ba8190f51c14568bb7f0efc6c27fe40946a1c8742176f87

https://explorer.jito.wtf/bundle/2f3785e2632ae7057725b25b72b65cff2ab3a8fc5ba8bd69abd1ea79590eef37

https://explorer.jito.wtf/bundle/79de55af8b53b797b3c64ab9de126aa93430c7c221ad8a0a339962e380f29ba0
