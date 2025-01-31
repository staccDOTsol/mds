# Key Questions & Answers About PumpDotFun's Issues

## What makes someone a "privileged actor" with early transaction access?

A privileged actor can:
- See transactions before they're broadcast to the network
- Can't modify other people's transactions, but can see exactly what they're doing
- Can create their own transactions to go before and after others
- If they're a lead validator or use Jito's bundle service, they can control:
  1. Whether all transactions happen or none do
  2. The exact order of transactions

## Who sees PumpDotFun transactions first?

The order of access is:
1. PumpDotFun's UI team (Baton Corp)
2. PumpDotFun's backend team (Baton Corp)
3. RPC providers (transaction relay services)
4. Lead Validators

Note: On Solana, there are two types of nodes:
- Validators: Vote on network consensus, can become leaders if they stake enough
- RPCs: Just relay transactions, don't participate in consensus

## What evidence shows volume manipulation?

1. Unusual User Patterns:
   - 30% are one-time users
   - Much bigger than competitors with better features
   - Outperforms earlier platforms like StrataProtocol

2. Company Behavior:
   - Executives claimed not to understand their own growth
   - Hired data scientists to explain user behavior
   - Platform success makes no market sense

3. Timing:
   - Platform struggled for months
   - Suddenly exploded after Jito's changes
   - Growth coincides with Jito needing new revenue

## Who gets paid from these sandwich attacks?

Every sandwich attack pays three parties:
1. PumpDotFun (platform fees)
2. Jito (tips for transaction ordering)
3. Solana (network fees + priority fees)

## How do Jito's changes relate to PumpDotFun's growth?

Clear timeline:
1. PumpDotFun struggles for months
2. March 2024: Jito closes public mempool
3. April 2024: PumpDotFun revenue jumps to >$10k/day
4. Growth continues to 1 billion+ SOL locked
5. Executives claim to be "confused and surprised"

## How could someone use PumpDotFun to hide money flows?

Simple three-step process:
1. Buy token with "dirty" funds from one wallet
2. Buy same token with clean funds from another wallet
3. Sell from first wallet, getting "clean" funds back

## How would you prove where the manipulation happens?

Scientific test setup:
1. Control: Direct trades through own validator
2. Test Groups:
   - Browser bot using PumpDotFun UI
   - Bot using PumpDotFun's RPCs
   - Bot using only blockchain program
3. Compare results when:
   - Your validator is leader
   - Others are leaders
4. If PumpDotFun bots lose more money, it proves platform-level manipulation

## Can platforms prevent these attacks?

Yes, solutions exist and are:
- Free (Ellipsis Labs' Plasma, Jupiter's Z-mode)
- Open source
- Audited
- Available since late 2024

PumpDotFun chooses not to implement these protections.
