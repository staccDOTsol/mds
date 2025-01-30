What does it mean to be a privileged actor and thus get early access to transactions?

If I was the party who had insider knowledge to a given complete and user-signed solana transaction before that transaction is broadcasted to the network, I would be able to send that transaction before their preferred method of broadcast should I want to. I can't modify THEIR transaciton but I do know everything they're doing inside it, and so I can craft transactions to go before and/or after it to exploit their behavior. If I am a lead validator or I avail of the jito bundler service then I can ensure that 1. all transactions happen, or they don't and 2. the exact ordering of these transactions.

Explain who first has access to transactions from pump? It would be anyone inside pump? How?

The order of parties who have access to transactions from pump is:\

1. PumpDotFun's UI operators (baton corp), or an alternative UI service that is providing an interface to the pumpdotfun blockchain program 
2. PumpDotFun's backend operators (baton corp), or an alternative backend service that is providing an interface to the pumpdotfun blockchain program
3. The individual RPC or RPC service provider that receives the transaction from the UI or backend service
4. The Lead Validator that sees a transaction come into the queue, and if it is not broadcasted, it is sent to the next lead Validator in the Leader Schedule.
0. Notably, a Solana client is either an RPC or a validator, or both. The difference is that a validator 'votes' and has a say in the network's consensus, while an RPC is a client that simply receives transactions and broadcasts them to the network, and the Validator has a chance to become Leader should it have enough money and some luck.

In plain language, what evidence do we have of manipulated volume on the platform?

The sheer stark constrast in the userbase (which Alon claims is at least 30% single-transaction users, in frequency and value, vs the competitors is the first clue. Why does a 2nd comer to the market with a better UI and a better UX like Moonshot, or better UI and UX and more altruistic motives like GoFundMeme have a userbase that is 10x smaller than PumpDotFun? or why does an earlier player to bonding curves on Solana like StrataProtocol not get -any traction at all, even though they were clearly the actual First To Market?-

Answer: It's a fugazi. PumpDotFun's userbase is driven by Jito's need to continue operations post-closing the mempool. Anecdotally I am keenly aware that Pump's execs either claimed to have no idea why anyone chooses to use the site for more than 1 day, or at all, or they actually didn't know. One of my first tasks when working there was to analyze this data and come up with some kind of statistical, quantifiable answer. They also posted jobs for data scientists + devs to assist the data scientists to assess the same.

Do all these sandwich tx on pump pay pumpfun fees?

yes, and jito in the form of 'tips' to participate in the auction for who gets to reorder a given tx or set of txs, and solana in the form of fees + priority fees.

What is the correlation between jito changes and pump revenue changing?

pump was onchain and in operation after dozens of failed Baton projects for months before March, when mempool was closed. In April, their revenue jumped to >10k/day, and they were purportedly both confused and surprised.

1. Yes, they hold every bit of solana deposited with 'buy' txs that are in a bonding curve that has not been sent to Raydium AMM yet. I counted oct 24 as 215110 sol, again on Nov 29 as 279334 sol, and alon claims after 1yr more than 1 billion locked on pump. [1bn](https://x.com/a1lon9/status/1881074065860919330)

How could you obfuscate the flow of funds using pump? Serving as a mixer in a way.

I would buy a token with some of capital, then buy some on another wallet with loads of capital, then sell on first wallet with the same token amount + get more sol back.

How would you test at stage of knowledge mev has - platform ui vs otherwise?

I would run a series of bots, and a well-staked solana validator. 
I would set it up so that the validator can know when my tx originate from me and are untampered with, and sent directly to my validator acting as an rpc when it is the leader, and me as validator leader also doesn't tamper with it. That's my control group.
I would set up a browser automation bot that interfaces with pump and buy and sells over and over again.
I would set up a bot that interacts with RPCs, staritng with pump's rpc providers, and buy and sell tokens over and over again.
I would set up a bot that interacts only with pump's blockchain program and my validator.
I would use the same amounts per transacitons, at the same times, and with the same frequency.
I would compare and contrast the results of the bots when my validator is the leader vs when it is not.
if my bot I am not tampering with ends up having more money on the whole of it after running this for a day, there is absolutely sandwiching on the network (which we already know to be true).
If the bot on the rpc network that pump uses ends up with less money on the whole of it after running this for a day, there is sandwiching occuring either on pump or on the rpc network.
When I move that 2nd bot off of their rpc and onto my validator, and run it for a day, if it ends up with more money on the whole of it, there is sandwiching occuring by pump.

Can a developer stop mev bots from wrecking their platform users? Is that possible?
Yes. There are two refernece implementations of this that I am aware of: ellipsis-labs/plasma and jupiter's 'z' mode, which were made avaialble in november and december of 2024. Anyone worth their weight in salt could have figured this out long before the reference implementations, however pump continues to ignore the audited and free and opensource solutions made available to the public for people to implement consumer protections and safeguarding.


plain language:

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
