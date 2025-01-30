import fetch from 'node-fetch';
import fs from 'fs';

async function analyzeSandwichAttacks() {
    console.log('Fetching bundles data...');
    
    try {
        const response = await fetch('https://bundles.jito.wtf/api/v1/bundles/recent?limit=100000&sort=Time&asc=false&timeframe=Month', {
            timeout: 30000
        });
        const bundles = await response.json();
        
        console.log(`Received ${bundles.length} bundles`);
        
        // Track accounts and their activities
        const accountActivity = new Map();
        const dexInteractions = new Map();
        
        // Process bundles
        bundles.forEach(bundle => {
            if (!bundle.transactions || bundle.transactions.length < 3) return;
            
            // Look for patterns of transactions from the same account
            const accounts = new Set();
            bundle.transactions.forEach(tx => {
                if (tx.length > 88) { // Valid transaction signature length
                    accounts.add(tx.substring(0, 32)); // First 32 chars as account identifier
                }
            });
            
            accounts.forEach(account => {
                const activity = accountActivity.get(account) || {
                    transactionCount: 0,
                    bundleCount: 0,
                    firstSeen: bundle.timestamp,
                    lastSeen: bundle.timestamp
                };
                
                activity.transactionCount += bundle.transactions.length;
                activity.bundleCount += 1;
                activity.lastSeen = bundle.timestamp;
                
                accountActivity.set(account, activity);
            });
        });
        
        // Sort accounts by activity
        const sortedAccounts = Array.from(accountActivity.entries())
            .sort((a, b) => b[1].transactionCount - a[1].transactionCount)
            .slice(0, 10); // Top 10 most active accounts
        
        // Generate visualization HTML
        const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Jito Bundle Analysis</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            background: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .graph-container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        h1, h2 {
            color: #333;
        }
        .graph-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }
        @media (min-width: 1200px) {
            .graph-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        .stats {
            margin-top: 20px;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Jito Bundle Analysis</h1>
        
        <div class="graph-container">
            <h2>Most Active Accounts</h2>
            <div class="graph-grid">
                ${sortedAccounts.map(([account, activity], index) => `
                    <div class="graph-item">
                        <h3>Account ${index + 1}</h3>
                        <iframe
                            src="https://widget.vybenetwork.com/network-graph?address=${account}&entity=wallet&connectionNode=program&api-key=9c9e5a28-f0e6-441e-95d4-5c7bf4fe984e"
                            width="100%"
                            height="400"
                            frameborder="0"
                            allow="clipboard-write"
                            title="Account Activity"
                        ></iframe>
                        <div class="stats">
                            <p>Transactions: ${activity.transactionCount}</p>
                            <p>Bundles: ${activity.bundleCount}</p>
                            <p>First seen: ${new Date(activity.firstSeen).toLocaleString()}</p>
                            <p>Last seen: ${new Date(activity.lastSeen).toLocaleString()}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
</body>
</html>`;

        fs.writeFileSync('sandwich-visualization.html', html);
        console.log('Generated visualization');
        
    } catch (error) {
        console.error('Error:', error);
    }
}

analyzeSandwichAttacks();
