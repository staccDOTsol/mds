# Introduction

This document provides detailed visualizations and analysis of Solana's transaction flows, focusing on MEV extraction points and control mechanisms. The diagrams illustrate how transactions move through the system and where MEV extraction occurs.

# Solana Transaction Flow & MEV Extraction Points

This diagram shows how transactions are intercepted at the UI layer, reconstructed for MEV extraction, and processed through multiple validators before final block inclusion.

```mermaid
%% Caption: MEV Extraction Layer Architecture - Transaction flow from creation through extraction to block production
graph TD
    A[Transaction Creation] --> B[MEV Extraction Points]
    
    subgraph "MEV Extraction Layer"
        B --> C[UI Interception]
        C --> D1[Reconstructed TX]
        C --> D2[Reconstructed TX]
        C --> D3[Reconstructed TX]
    end
    
    subgraph "Network Layer"
        D1 --> E1[Validator 1]
        D2 --> E1
        D3 --> E1
        E1 --> F1[Bundle]
        
        D1 --> E2[Validator 2]
        D2 --> E2
        D3 --> E2
        E2 --> F2[Bundle]
        
        F1 --> G[Block Production]
        F2 --> G
    end
```

## Key Components

1. Transaction Creation
   - User initiates transaction
   - Transaction parameters set
   - Signature created

2. MEV Extraction Points
   - UI level interception
   - Network level monitoring
   - Validator queue inspection

3. Transaction Reconstruction
   - Transaction parameters extracted
   - New transactions created with modified parameters
   - MEV capture logic implemented

4. Network Layer Processing
   - Validators receive transactions
   - Bundle creation and ordering
   - Block production with MEV-optimized ordering

# Conclusion

The transaction flow analysis reveals multiple MEV extraction opportunities throughout the transaction lifecycle. The diagrams demonstrate how the current architecture enables systematic MEV capture through strategic positioning of control points and extraction mechanisms.
