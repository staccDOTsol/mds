# The PumpDotFun Problem: A Deep Dive into Insider Trading

## The Timeline

- Before March 2024: PumpDotFun operates normally, one of many Baton Corp projects
- March 2024: Jito closes public access to their transaction system
- April 2024: PumpDotFun's revenue suddenly jumps to over $10,000/day
- October 2024: 215,110 SOL locked in platform
- November 2024: 279,334 SOL locked in platform
- January 2025: Over 1 billion SOL claimed to be locked on platform

## Who Gets to See Your Trade First?

When you make a trade on PumpDotFun, your transaction follows this path:

```
Transaction Access Order:
1. PumpDotFun UI (Baton Corp) -----> First to see
2. PumpDotFun Backend (Baton Corp)
3. RPC Provider
4. Lead Validator
```

This means several parties can see and act on your trade before it happens:
- PumpDotFun's operators
- Their backend service providers
- The RPC (transaction relay) services
- Validator operators who process transactions

## The Suspicious Signs

1. **Unusual User Patterns**
   - 30% of users only make one transaction
   - Much larger userbase than competitors with better features:
     * Moonshot (better UI/UX)
     * GoFundMeme (better UI/UX, more altruistic)
     * StrataProtocol (first to market)

2. **Revenue Anomalies**
   - Months of low activity pre-March 2024
   - Sudden jump to >$10k/day in April 2024
   - Company executives reportedly surprised by growth
   - Posted jobs seeking data scientists to explain user behavior

3. **Triple Fee Structure**
   Every sandwich attack pays:
   - PumpDotFun fees
   - Jito "tips" for transaction ordering
   - Solana network fees

## How the Manipulation Works

```
Example Attack:
Wallet A: Buy token with small amount
Wallet B: Buy same token with large amount
Wallet A: Sell token -> Get more SOL back
```

This creates artificial volume while moving funds between wallets.

## Could This Be Prevented?

Yes, solutions exist:
- Ellipsis Labs' Plasma (November 2024)
- Jupiter's "Z" mode (December 2024)

These are:
- Free
- Open source
- Audited
- Available to implement

Yet PumpDotFun hasn't adopted any consumer protections.

## The Numbers Don't Lie

Our 16-minute analysis found:
- 48 sandwich attacks
- $26.10 profit in just one minute
- Projected annual profit: $22.5M (from visible attacks only)

```
Daily Profit Breakdown:
----------------------
PumpDotFun Fees:   ████
Jito Tips:         ███
Network Fees:      ██
Attacker Profit:   ████████████
```

## Why This Matters

1. **For Users**: You're paying more than necessary on trades
2. **For Markets**: Creates artificial volume and price movements
3. **For Trust**: Shows systematic exploitation by insiders
4. **For Fairness**: Demonstrates failure to protect users despite available solutions

The evidence suggests PumpDotFun's growth isn't organic - it's driven by insider trading and artificial volume, with users paying the price through higher fees and worse trade execution.

## How Can We Prove This?

A scientific test would involve:

```
Test Setup:
1. Control Group:
   - Run direct trades through own validator
   - No intermediaries, no tampering
   
2. Test Groups:
   A. Browser bot using PumpDotFun UI
   B. Bot using PumpDotFun's RPC providers
   C. Bot using only blockchain program
   
3. Methodology:
   - Same amounts
   - Same timing
   - Same frequency
   - Compare results when:
     * Our validator is leader
     * Other validators are leaders
```

If bots using PumpDotFun's systems consistently lose more money than direct trades, it proves sandwiching is happening at the platform level.

## The Jito Connection

The timing is crucial:
1. PumpDotFun operates for months with minimal activity
2. March 2024: Jito closes their public mempool (where anyone could see pending transactions)
3. April 2024: PumpDotFun's revenue suddenly explodes to >$10k/day
4. Company executives claim to be "confused and surprised" by the growth

This suggests:
- PumpDotFun's success coincides exactly with Jito's change
- The platform may be serving as a key revenue source for Jito post-mempool closure
- The sudden growth can't be explained by normal market factors

## The Bigger Question

Why does PumpDotFun, with:
- Over 1 billion SOL locked
- >$10k daily revenue
- Massive user growth

Still refuse to implement readily available solutions that would protect users from these attacks?

The answer might lie in who benefits from the current system.

## Beyond Trading: A Potential Money Laundering Vector

The platform's design could potentially be used to obscure the source of funds:

```
Fund Obfuscation Pattern:
------------------------
1. Wallet A: Buy token with "dirty" funds
2. Wallet B: Buy same token with clean funds
3. Wallet A: Sell token
   Result: "Cleaned" funds from legitimate trades
```

This pattern, combined with:
- High trading volume
- Multiple intermediaries
- Complex transaction paths
- Lack of user protections

Creates an environment where tracking fund sources becomes extremely difficult.

The refusal to implement available protections raises serious questions about whether these vulnerabilities are bugs or features of the platform.
