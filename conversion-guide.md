# 🚀 .mkcd → JavaScript 変換作業ガイド

## 📊 変換進捗

### 📁 生成されたJavaScriptファイル
```bash
find src/javascript -name "*.js" | sort
```

## 🔧 変換手順（各ファイルごと）

### ステップ1: MakeCodeで開く
1. Minecraft Education Edition を起動
2. Code Builder (Cキー) を開く
3. 「Import」をクリック
4. 対象の.mkcdファイルを選択

### ステップ2: コード抽出
1. 「JavaScript」タブをクリック
2. コード全体を選択してコピー (Ctrl+A → Ctrl+C)

### ステップ3: JSファイルに貼り付け
1. 対応するJSファイルを開く
2. `// TODO: 抽出したコードをここに配置` の部分を削除
3. 抽出したコードを貼り付け
4. `player.say("⚠️ このファイルは...")` の行を削除

### ステップ4: 仕上げ
1. 学習ポイント、カスタマイズ例を記入
2. `🎯 変換ステータス: 🔄 変換待ち` を `✅ 変換完了` に変更
3. ファイル保存

## 📋 優先順序（推奨）

### Phase 1: 基本サンプル（最優先）
- [ ] house-builder.js
- [ ] stairs-builder.js
- [ ] rainbow-generator.js
- [ ] position-demo.js

### Phase 2: ゲーム系
- [ ] gladiator-arena.js
- [ ] marco-polo.js
- [ ] tnt-spleef.js

### Phase 3: その他
- [ ] 残り20個のファイル

## 🧪 動作テスト方法

各変換後：
1. MEE Code Builder にコードをコピー
2. チャットコマンドでテスト実行
3. 期待通りに動作することを確認
4. エラーがあれば修正

## 🔍 品質チェックポイント

- [ ] コードが正常に動作する
- [ ] チャットコマンドが機能する
- [ ] コメントが充実している
- [ ] 学習ポイントが記載されている
- [ ] 変換ステータスが更新されている
