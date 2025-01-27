# Solana MEV Technical Glossary

## Core Components

### Participants
- **User**: End user initiating transactions on Solana
- **Leader**: Validator selected by stake-weighted rotation to produce blocks for a slot
  - Selection based on stake weight
  - Schedule known in advance
  - Responsible for block production in assigned slots

### Infrastructure Providers
- **Solana Labs**: Original core protocol developer
  - Created initial validator implementation
  - Maintains core protocol
  - Provides reference validator client

- **Jito Labs**: Specialized MEV infrastructure provider
  - Introduced MempoolStream (pre-March 2023)
  - Developed bundle processing system
  - Created specialized validator client

### Network Components
- **RPC (Remote Procedure Call)**: 
  - Network endpoint receiving transactions
  - Forwards transactions to validators
  - Public interface to Solana network

- **Network Layer**: 
  - Transaction propagation system
  - Validator communication layer
  - Block distribution mechanism

### Transaction Processing
- **Mempool**: 
  - Historical: Jito's global transaction pool (pre-March 2023)
  - Current: Per-validator transaction queues
  - Holds pending transactions

- **Bundles**: 
  - Atomic transaction groups
  - Sequential execution guaranteed
  - All-or-nothing execution
  - Used for MEV extraction

### User Interface
- **Dapp (Decentralized Application)**:
  - User-facing blockchain application
  - Generates transaction intents
  - First point of transaction visibility

- **Dapp Wrapper**:
  - Intermediary layer between dapp and network
  - Examples: Pump, BullX, PhotonX all have pre-knowledge of pump tx that occur thru their frontends
  - Can modify/bundle transactions before submission

### Extraction Framework
- **MEV Extraction Points**:
  1. UI Layer: Pre-RPC transaction capture
  2. Network Layer: Transaction queue inspection
  3. Leader Layer: Block ordering control

- **Consensus Compliance**:
  - Operating within protocol rules
  - Maintaining network stability
  - Following leader schedule protocol 