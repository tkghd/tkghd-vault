# IPFS × Blockstream 衛星送信構成
## 目的
Vaultの重要資産ログを宇宙へ送信し、不可逆・永続ログとして記録。

### 使用サービス:
- IPFS（https://ipfs.io）
- Blockstream Satellite（https://blockstream.com/satellite/）

### 流れ:
1. 資産ログ（CSVまたはPDF）をIPFSにアップロード
2. 得られたCIDをBlockstream Satellite APIで送信
3. 送信完了後、Vaultログに記録

### 送信コマンド例:
```bash
echo "IPFS CID: QmXXXX..." | lightning-cli sendmessage satellite 1
```

### 注意点:
- CIDの長さとエンコーディング形式を確認
- 送信後のログ確認とダウンリンク用意
