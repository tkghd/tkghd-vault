# Vault AI × LangChain Integration
## 概要
この構成ファイルは、Vault内の資産・操作履歴・ユーザー入力に基づき、LangChainを用いてChatGPTがインテリジェントに応答するよう構築されています。

### 必須:
- OpenAI APIキー
- LangChainインストール (`pip install langchain openai`)

### 主要機能:
- 資産ログのナレッジベース化（VectorStore使用）
- チャットUIとの接続
- PDFやCSVからの知識抽出対応

### サンプルコード:
```python
from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain
from langchain.vectorstores import FAISS
from langchain.document_loaders import CSVLoader

llm = OpenAI(temperature=0.2)
loader = CSVLoader(file_path="Vault_Assets_Full.csv")
docs = loader.load()

chain = load_qa_chain(llm, chain_type="stuff")
response = chain.run(input_documents=docs, question="現金化できる資産は？")
print(response)
```