What does Pump.fun mean when they advertise themselves as fair launch platform? The idea generally and specific concepts they are alluding to. 

On solana, before pump.fun, people were sending SOL to addresses under the promise that the receiver would add liqudity and send the tokens to the contributors. In practice, sometimes they would 'rug pull' (or pull the rug out from under the users) and take the money. Pump automates this process hy dealing the tokens immediately to the users on a buy action, then depositing most of the solana to hte raydium amm upon a bonding curve 'graduation' and then burning the receipt tokens; meaning that solana is forever locked in the raydium amm.

What are all the ways that pump.fun is not a fair launch platform?

- anyone can create a token on pump.fun
- anyone can buy a token on pump.fun
- anyone can buy another token on pump.fun and it costs more money than the token they just bought
- anyone can sell for more money than they bought it for, if they exit after promoting the token to close friends and family
- anyone with the motive and intent can figure out ways to streamline this process, automate it, and make a lot of money - at the expense of people using the site as a retail trader
- for example, by May, Dylan CTO admitted 3/4 of the tx on the platform were NOT happening on the site - meaning they were automated by bots or a much lesser extend alternative uis
- there are other players in the ecosystem that allow the reodering of transactions, so that the pump.fun tx is now wedged betweenn someone elses buy first then sell after - ensuring that exploiter a sure-bet arbitrage profit

What do sniper bots do? both what is a sniper bot and how do they work on pump and adjacent memecoin trading infra?

- snipe bots are bots that buy a token at the first second of the token being created, just after the creator optionally buys in
- they are able to do this because they have superior infrastructure and tools devloepd by solana labs and solana-adjacent organizations like helius, triton one, jito
- they can act faster and more precicely than any human trader

What is bundling tokens?

- bundling tokens is the process of ensuring that your txs, and any others you may have privileged insider knowledge of before they are broadcast by their intended broadcaster, you elect are executed in the exact order you elect, and atomically - so that if one fails, they all fail
- jito had another supplemantary service that allowed for the public foreknowledge of txs to be broadcast to the network in a way that was not easily detectable by the average user
- others ahve since copied that service since jito shut their canonical one down
- other ways to get first-hand knowledge of txs include things like pump.fun's own ui, their backend servers, other alternative uis that have users signing to broadcast pump-related txs to the network, the rpc providers these tx are sent to, and finally the validator that actually processes the tx

I read there are professionals that  farm users on pump launches - each day with new tokens. Can you tell me that story?

- yes, with the prevelance of ai it's easy to generate real-looking user generated content and create tokens. there are hundreds of repositories on github that allow anyone to interact with pump's contrat programatically in the coding langauge of their choice.
- you create a token, you figure out a way to pretend it has actual traction, and make bank
- some bundlers are involved here by anonymizing many wallets across many txs and giving it the semblance of legitimacy, then exiting all at once in one fell swoop in one single bundle with many dozens sell instructions among 5 txs
- while everyone else thought it was a real opportunity, the bundler was able to sell at the top and walk away with a lot of money
- often


Are all the wallets buying and selling these coins real organic people? (how are holder counts and volume inflated through programmatically created wallets)

- see above

Do we have any numbers to estimate the scale of this at the platform level? XX% of tokens are bundled

- we don't have access to historical or non-jito data, we are building a realtime monitoring dashboard that is seeing fluctuations of ~1/3-2/3 all transactions on pump bundled to at least some extent - with the stats distro saying that about 5-6 are extremely bundled on hour per average, indicating a heavy sell-off by those nn the know

what percentage of tokens go to zero within x timeframe? 

- 99.97% of them go to 0 within minutes

how many tokens have been launched on pumpfun that are now worth less than some low dollar amount vs how many are successful? 

- there are news stories to pull that clearly demonstrate the publicly available data. for e.g. on spot check this research proves [7 million coins deployed at time of writing](https://dune.com/evelyn233/pump-data) while less than 100 000 have 'graduated' by hitting a minimum value at some point in time, of those most lost most value since.
