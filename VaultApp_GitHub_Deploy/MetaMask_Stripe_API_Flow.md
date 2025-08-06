# MetaMask × Stripe Integration Guide
## 目的
Vaultからトークンや仮想通貨を、Stripeを介してリアル通貨に交換・送金する構成

### 使用サービス:
- MetaMask (ブラウザウォレット)
- Stripe (決済処理)

### フロー概要:
1. MetaMaskからVaultにトークン送信（ERC-20想定）
2. Vault内で残高反映 + Stripe APIへ出金指示
3. 管理者はStripeダッシュボード or Vaultから出金可

### 参考コード:
```js
// MetaMaskトランザクション例
const tx = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [{
    from: accounts[0],
    to: '0xYourVaultWalletAddress',
    value: '0x29a2241af62c0000', // 0.1 ETH
  }]
});

// Stripe出金API
fetch('/api/payout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ amount: 10000 }) // 100 USD
});
```