# Solana MEV Analysis Documentation

This repository contains detailed analyses of Solana's MEV (Maximal Extractable Value) ecosystem, with a focus on infrastructure, transaction flows, and jurisdictional considerations.

## Document Index

### [Architectural Evolution](architectural-evolution.md)
Evolution of Solana's MEV architecture:
- Historical development patterns
- Infrastructure changes over time
- Key architectural decisions

### [Jurisdiction Analysis](jurisdiction-analysis.md)
Analysis of development control and infrastructure distribution:
- 47.1% of analyzed contributions from NY-based developers (198/350 contributors analyzed)
- 32 Solana employees identified (all NY-based)
- Development centralization patterns
- Infrastructure control implications

### [On-Chain Evidence](on-chain-evidence.md)
Analysis of on-chain transaction patterns:
- Transaction flow analysis
- MEV extraction patterns
- Network usage statistics
- Validator behavior patterns

### [SEC TCR Technical Evidence](sec-tcr-technical-evidence.md)
Technical analysis of security implications:
- Transaction layer vulnerabilities
- Validator layer control points
- Queue system exploitation risks
- MEV extraction mechanisms

### [Solana MEV Analysis](solana-mev-analysis.md)
Technical breakdown of MEV extraction mechanisms:
- Transaction flow architecture
- Network-level extraction points
- Block production and queue inspection
- MEV opportunity detection patterns

### [Solana MEV Evolution](solana-mev-evolution.md)
Multi-layer analysis of MEV development:
- UI/Dapp layer exploitation
- Wrapper dapp intervention points
- Network-level transaction manipulation
- Validator privileges and control points

### [Transaction Flow Diagram](transaction-flow-diagram.md)
Detailed visualization of transaction flows:
- User transaction paths
- MEV extraction points
- Network routing patterns
- Validator interactions

## Key Statistics

From analysis of 198 out of 350 total contributors:
- Total Contributions: 20,585
- NY-Based Contributors: 52 (26.3%)
- NY-Based Contributions: 9,702 (47.1%)
- Solana Employees: 32 (all NY-based)
- Other Contributors: 146 (73.7%)

## Top Contributors (LinkedIn OSINT)

1. mvines (michael): 3,973 contributions
   - Past: Engineering at Solana Labs
2. brooksprumo (Brooks): 847 contributions
   - Past: Software Engineer at Solana Labs
3. sakridge: 777 contributions
   - Company: @solana-labs
4. CriesofCarrots (Tyera): 678 contributions
5. rob-solana (Rob Walker): 658 contributions
   - Past: Principal Engineer at Solana

## Document Relationships

```mermaid
# Caption: Document Relationship Map - Interconnections between analysis documents showing information flow and dependencies
graph TD
    A[jurisdiction-analysis.md] --> B[solana-mev-analysis.md]
    B --> C[solana-mev-evolution.md]
    D[architectural-evolution.md] --> B
    E[on-chain-evidence.md] --> F[sec-tcr-technical-evidence.md]
    F --> B
    G[transaction-flow-diagram.md] --> B
    
    style A fill:#ffebcc
    style B fill:#ffe6e6
    style F fill:#ffebcc
```

Each document provides a specific perspective on Solana's MEV ecosystem, from technical implementation to regulatory implications. Together, they form a comprehensive analysis of the system's architecture, control points, and jurisdictional considerations. 