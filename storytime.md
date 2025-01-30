What does it mean to be a privileged actor and thus get early access to transactions?

If I was the party who had insider knowledge to a given complete and user-signed solana transaction before that transaction is broadcast to the network, I would be able to send that transaction before their preferred method of broadcast should I want to. I can't modify THEIR transaciton but I do know everything they're doing inside it, and so I can craft transactions to go before and/or after it to exploit their behavior. If I am a lead validator or I avail of the jito bundler service then I can ensure that 1. all transactions happen, or they don't (meaning if any fail, they all fail, so I can ensure my own profitability should I need/want) and 2. the exact ordering of these transactions.

Explain who first has access to transactions from pump? It would be anyone inside pump? How?

The order of parties who have access to transactions from pump is:\

1. PumpDotFun's UI operators (baton corp), or an alternative UI service that is providing an interface to the pumpdotfun blockchain program 
2. PumpDotFun's backend operators (baton corp), or an alternative backend service that is providing an interface to the pumpdotfun blockchain program
3. The individual RPC or RPC service provider that receives the transaction from the UI or backend service
4. The Lead Validator that sees a transaction come into the queue, and if it is not broadcasted, it is sent to the next lead Validator in the Leader Schedule.
0. Notably, a Solana client is either an RPC or a validator, or both. The difference is that a validator 'votes' and has a say in the network's consensus, while an RPC is a client that simply receives transactions and broadcasts them to the network, and the Validator has a chance to become Leader should it have enough money and some luck.

In plain language, what evidence do we have of manipulated volume on the platform?

The sheer stark constrast in the userbase (which Alon claims a/o mid-Jan is at least 30% single-transaction users), in frequency and value, vs the competitors is the first clue. Why does a 2nd comer to the market with a better UI and a better UX like Moonshot, or better UI and UX and more altruistic motives like GoFundMeme have a userbase that is 10x smaller than PumpDotFun? or why does an earlier player to bonding curves on Solana like StrataProtocol not get -any traction at all, even though they were clearly the actual First To Market?-

Answer: It's a fugazi. PumpDotFun's userbase is driven by Jito's need to continue operations post-closing the mempool. Anecdotally I am keenly aware that Pump's execs either claimed to have no idea why anyone chooses to use the site for more than 1 day, or at all, or they actually didn't know. One of my first tasks when working there was to analyze this data and come up with some kind of statistical, quantifiable answer. They also posted jobs for data scientists + devs to assist the data scientists to assess the same.

Do all these sandwich tx on pump pay pumpfun fees?

1. yes, and jito in the form of 'tips' to participate in the auction for who gets to reorder a given tx or set of txs, and solana in the form of fees + priority fees.

What is the correlation between jito changes and pump revenue changing?

1. pump was onchain and in operation after dozens of failed Baton projects for months before March, when mempool was closed. In April, their revenue jumped to >10k/day, and they were purportedly both confused and surprised.
