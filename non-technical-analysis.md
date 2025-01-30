# Understanding PumpDotFun Frontrunning: A Non-Technical Explanation

## What's Happening?

PumpDotFun, a trading platform on Solana, is experiencing systematic frontrunning - but with a crucial twist. Since March 2024, when Jito turned off public access to their transaction system, these attacks can only be executed by insiders with special access to transaction information. Notably, PumpDotFun's revenues have skyrocketed since April 2024, reaching as high as $15.5 million per day.

## How Does It Work?

```
[Regular Trader] ----Places Order----> [Trading Platform]
                                           |
                                           | 1. Sees Order
                                           v
[Insider] ----2. Buys First----> [Market]
                                    ^
                                    | 3. Pays Higher Price
                                    |
[Regular Trader] ------------------/
                                    |
                                    | 4. Sells for Profit
[Insider] <----------------------/
```

To understand it simply, imagine you're in line at a coffee shop:

1. You want to buy coffee at $5
2. Someone sees you about to buy coffee
3. They:
   - Quickly buy coffee before you (raising the price to $6)
   - Let you buy at the higher price
   - Immediately sell their coffee (at the higher price)
4. They profit from the price difference, while you pay more than you should

This is essentially what's happening on PumpDotFun, but with a critical detail:

- Only certain insiders can see your transaction before it happens:
  - PumpDotFun's UI operators, and those running alternative UI services
  - Jito's validator operators
  - Solana Labs validator operators
  - Certain validator operators with the largest stakeweight
- These insiders can ensure their transactions happen before and after yours
- This guarantees them a profit while making your trade more expensive

## The Numbers: A Real Example

Looking at just one minute (2025-01-30, 02:27Z), we caught a sequence of more than five sandwich attacks. Here's an example sequence:

1. First attack: $2.03 profit
2. Second attack: $16.22 profit
3. Third attack: $4.83 profit
4. Fourth attack: $1.71 profit
5. Fifth attack: $1.31 profit

Total profit shown in example sequence: $26.10

Important Context:
- These examples only show attacks from traders using Jito's bundle service
- There are likely many more attacks happening through:
  * Private groups of validators sharing transaction information
  * Large validators who sometimes get to create blocks
  * Other private ways of seeing transactions before they happen
- The total scale of frontrunning is likely much larger than what we can see

## Why This Matters

1. **Fairness Issues**: Regular traders are paying more than they should because their transactions are being intercepted and exploited.

2. **Market Impact**: This activity:
   - Increases costs for normal traders
   - Creates artificial price movements
   - Extracts value that could otherwise stay with regular users

3. **Insider Nature**: This isn't random - it's a systematic exploitation enabled by:
   - PumpDotFun's predictable trading mechanics
   - Special access to transaction information
   - Privileged insiders who can see transactions before they happen
   - Timing correlation with Jito's public mempool shutdown in March 2024

## Key Takeaways

1. The frontrunning is happening at a significant scale
2. It's being done by multiple sophisticated actors
3. Regular traders are likely unaware they're being frontrun
4. The profits being extracted are substantial
5. This appears to be a structural issue rather than isolated incidents

## Implications

This activity raises serious concerns about:

1. Market fairness and insider advantages
2. Concentration of profit opportunities among privileged actors
3. The relationship between platform revenues and insider activity
4. The shift from public to private transaction visibility
5. The need for transparency about who can see user transactions

The data suggests this is not just about market efficiency - it's about privileged insiders having exclusive access to profit from regular users' trades. The dramatic increase in PumpDotFun's revenues since April 2024 (after Jito's mempool shutdown) raises questions about the relationship between platform success and insider activity.

## Scale of Impact

```
Projected Annual MEV Extraction:

Daily: $61,795
    |
    | x7
    v
Weekly: $432,563
    |
    | x4.3
    v
Monthly: $1.85M
    |
    | x12
    v
Yearly: $22.55M
```

Even from a brief 16-minute snapshot of activity, the potential scale of this insider trading is staggering. Looking at just the trades we can see through Jito's bundle service:

```
Sandwich Attack Profits:
-----------------------
Main Attacker:    65.1%  ████████████████████████████
Second Attacker:  16.8%  ███████
Third Attacker:    7.2%  ███
Others:           10.9%  ████
```

Estimated Profits:
- Every Day: $61,795 (261.49 SOL)
- Every Week: $432,563 (1,830.41 SOL)
- Every Month: $1,853,841 (7,844.62 SOL)
- Every Year: $22,555,070 (95,442.92 SOL)


## References

https://explorer.jito.wtf/bundle/d8133fd19cf0fc87e1ddf4eb0f922ed7f9fa9870d2fa4eeb9b267ab1fd6a6384

https://explorer.jito.wtf/bundle/042901f6ce7e4488375bd18a35427cfaa4feb6f0e7f43be998f7a592c01cf497

https://explorer.jito.wtf/bundle/00b0f90fb7d17a688ba8190f51c14568bb7f0efc6c27fe40946a1c8742176f87

https://explorer.jito.wtf/bundle/2f3785e2632ae7057725b25b72b65cff2ab3a8fc5ba8bd69abd1ea79590eef37

https://explorer.jito.wtf/bundle/79de55af8b53b797b3c64ab9de126aa93430c7c221ad8a0a339962e380f29ba0
