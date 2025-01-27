# Solana MEV Technical Glossary

## Core Components

### Participants
- **User**: End user initiating transactions on Solana
- **Leader**: Validator selected by stake-weighted rotation to produce blocks for a slot
  - Selection based on stake weight
  - Schedule known in advance
  - Responsible for block production in assigned slots

### Infrastructure Providers
- **Protocol Developer**: Original core protocol developer
  - Created initial validator implementation
  - Maintains core protocol
  - Provides reference validator client

- **MEV Infrastructure**: Specialized MEV infrastructure providers
  - Introduced transaction streaming
  - Developed bundle processing systems
  - Created specialized validator clients

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
  - Historical: Global transaction pool (pre-March 2023)
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
  - Multiple implementations exist
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