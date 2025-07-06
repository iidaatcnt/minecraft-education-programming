
#!/bin/bash
# 🚀 一括 .mkcd → JavaScript 変換システム
# 27個のファイルを効率的にJavaScript化

echo "🚀 一括JavaScript変換を開始します..."

# 1. 基本準備
echo "📁 ディレクトリ構造を準備中..."
mkdir -p src/javascript/{basic,games,building,effects,advanced,themes}
mkdir -p temp/extraction

# 2. ファイルマッピング定義
echo "📋 ファイルマッピングを定義中..."

# 各ファイルの変換マッピングを配列で定義
declare -A FILE_MAPPING=(
    # 基本サンプル（basic/）
    ["minecraft-house-sample.mkcd"]="basic/house-builder.js|house|自動家建設|⭐"
    ["minecraft-rainbow-sample.mkcd"]="basic/rainbow-generator.js|rainbow|虹生成|⭐⭐"
    ["minecraft-stairs-sample.mkcd"]="basic/stairs-builder.js|stairs|階段建設|⭐"
    ["minecraft-positions.mkcd"]="basic/position-demo.js|pos|座標デモ|⭐"

    # ゲーム系（games/）
    ["minecraft-gladiator.mkcd"]="games/gladiator-arena.js|gladiator|対戦ゲーム|⭐⭐⭐"
    ["minecraft-marco-polo.mkcd"]="games/marco-polo.js|marco|位置探索ゲーム|⭐⭐"
    ["minecraft-tnt-spleef.mkcd"]="games/tnt-spleef.js|spleef|床破壊ゲーム|⭐⭐"
    ["minecraft-wipe-out.mkcd"]="games/wipe-out.js|wipeout|アクションゲーム|⭐⭐⭐"
    ["minecraft-game-over.mkcd"]="games/game-over.js|gameover|ゲーム終了処理|⭐"
    ["minecraft-pitfall.mkcd"]="games/pitfall-trap.js|pitfall|落とし穴トラップ|⭐⭐"

    # 建築・構造物（building/）
    ["minecraft-build-a-house.mkcd"]="building/advanced-house.js|bighouse|高度な家建設|⭐⭐⭐"
    ["minecraft-agent-pyramid.mkcd"]="building/agent-pyramid.js|pyramid|エージェント制御|⭐⭐⭐⭐"
    ["minecraft-compass.mkcd"]="building/compass-builder.js|compass|コンパス建設|⭐⭐"
    ["minecraft-hot-tub.mkcd"]="building/hot-tub.js|hottub|ホットタブ|⭐"

    # エフェクト・アクション（effects/）
    ["minecraft-earthquake.mkcd"]="effects/earthquake-sim.js|earthquake|地震シミュレーション|⭐⭐⭐"
    ["minecraft-1000-tnt.mkcd"]="effects/thousand-tnt.js|tnt1000|1000個TNT|⭐"
    ["minecraft-chicken-rain.mkcd"]="effects/chicken-rain.js|chickens|ニワトリの雨|⭐⭐"
    ["minecraft-tnt-cannon.mkcd"]="effects/tnt-cannon.js|cannon|TNTキャノン|⭐⭐"

    # 上級・数学（advanced/）
    ["minecraft-hilbert-fractals.mkcd"]="advanced/hilbert-fractal.js|hilbert|フラクタル数学|⭐⭐⭐⭐⭐"
    ["minecraft-lorenz-attractor.mkcd"]="advanced/lorenz-attractor.js|lorenz|数学的モデル|⭐⭐⭐⭐⭐"

    # テーマ・シナリオ（themes/）
    ["minecraft-bat-cave.mkcd"]="themes/bat-cave.js|batcave|バットケーブ|⭐⭐"
    ["minecraft-fishing-day.mkcd"]="themes/fishing-day.js|fishing|釣りイベント|⭐⭐"
    ["minecraft-ice-age.mkcd"]="themes/ice-age.js|iceage|アイスエイジ|⭐⭐⭐"
    ["minecraft-wanderer.mkcd"]="themes/wanderer.js|wander|ワンダラー|⭐⭐"
    ["minecraft-zombie-piglin.mkcd"]="themes/zombie-piglin.js|zombies|ゾンビピグリン|⭐⭐"
)

# 3. JavaScript変換テンプレート生成関数
generate_js_template() {
    local original_file="$1"
    local js_file="$2"
    local command="$3"
    local description="$4"
    local difficulty="$5"
    local category="$6"

    cat > "src/javascript/$js_file" << EOF
/**
 * $(get_emoji "$category") $description
 *
 * @description Minecraft Education Edition プログラミング教材
 * @learning_objectives TODO: 学習目標を追加
 * @difficulty $difficulty
 * @category $category
 * @chat_command $command
 * @original_file $original_file
 * @minecraft_version MEE 1.20+ 対応
 * @author しろいプログラミング教室
 * @created $(date '+%Y-%m-%d')
 */

// 🚨 TODO: .mkcdファイルからコードを抽出してここに配置
// 手順:
// 1. Minecraft Education Edition を起動
// 2. Code Builder を開く
// 3. Import → dist/makecode/$original_file
// 4. JavaScript タブをクリック
// 5. コード全体をコピー
// 6. この部分に貼り付け

player.onChat("$command", function () {
    // TODO: 抽出したコードをここに配置
    player.say("⚠️ このファイルはまだ変換中です。dist/makecode/$original_file を使用してください。")
})

// 📚 使用方法:
// 1. 上記のTODOに従ってコードを抽出
// 2. Minecraft Education Edition → Code Builder
// 3. このファイルの内容をコピー&ペースト
// 4. チャットで "$command" を実行

// 📝 学習ポイント:
// TODO: このプログラムで学べる概念を記述

// 🔧 カスタマイズ例:
// TODO: パラメータ変更の例を記述

// ⚠️ 注意事項:
// ✅ 確実動作ブロック: STONE, COBBLESTONE, GLASS, DIRT, SAND, WOOL, AIR
// ❌ 使用禁止: OAK_PLANKS, RED_WOOL, STONE_STAIRS, FENCE

// 🎯 変換ステータス: 🔄 変換待ち
// 変換完了時は上記を: ✅ 変換完了 に変更
EOF
}

# 4. カテゴリ別絵文字取得
get_emoji() {
    case "$1" in
        "basic") echo "🏠" ;;
        "games") echo "🎮" ;;
        "building") echo "🏗️" ;;
        "effects") echo "💥" ;;
        "advanced") echo "🔬" ;;
        "themes") echo "🎭" ;;
        *) echo "⚙️" ;;
    esac
}

# 5. メイン変換処理
echo "🔄 JavaScript テンプレートを生成中..."

converted_count=0
total_files=${#FILE_MAPPING[@]}

for mkcd_file in "${!FILE_MAPPING[@]}"; do
    # マッピング情報を分解
    IFS='|' read -r js_path command description difficulty <<< "${FILE_MAPPING[$mkcd_file]}"
    category=$(dirname "$js_path")

    # ファイル存在確認
    if [ -f "dist/makecode/$mkcd_file" ]; then
        echo "✅ 処理中: $mkcd_file → $js_path"
        generate_js_template "$mkcd_file" "$js_path" "$command" "$description" "$difficulty" "$category"
        ((converted_count++))
    else
        echo "⚠️  見つかりません: $mkcd_file"
    fi
done

# 6. 変換作業ガイド生成
echo "📋 変換作業ガイドを生成中..."

cat > conversion-guide.md << 'EOF'
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
EOF

# 7. 簡易抽出ヘルパースクリプト生成
cat > tools/quick-extract.py << 'EOF'
#!/usr/bin/env python3
"""
.mkcdファイルからJavaScriptコードを抽出するヘルパーツール
完全自動ではないが、手動作業を支援
"""
import zipfile
import os
import sys
import json

def extract_from_mkcd(mkcd_path):
    """mkcdファイルからTypeScript/JavaScriptコードを抽出"""
    try:
        with zipfile.ZipFile(mkcd_path, 'r') as zip_ref:
            files = zip_ref.namelist()

            # main.ts または main.js を探す
            target_file = None
            if 'main.ts' in files:
                target_file = 'main.ts'
            elif 'main.js' in files:
                target_file = 'main.js'

            if target_file:
                content = zip_ref.read(target_file).decode('utf-8')
                return content
            else:
                print(f"⚠️ {mkcd_path}: TypeScript/JavaScriptファイルが見つかりません")
                return None

    except Exception as e:
        print(f"❌ {mkcd_path}: 抽出エラー - {e}")
        return None

def main():
    if len(sys.argv) != 2:
        print("使用方法: python quick-extract.py <mkcd_file>")
        return

    mkcd_file = sys.argv[1]
    if not os.path.exists(mkcd_file):
        print(f"❌ ファイルが見つかりません: {mkcd_file}")
        return

    print(f"🔍 抽出中: {mkcd_file}")
    content = extract_from_mkcd(mkcd_file)

    if content:
        print("✅ 抽出成功:")
        print("-" * 50)
        print(content)
        print("-" * 50)
        print("👆 このコードをJSファイルにコピーしてください")
    else:
        print("❌ 抽出失敗")

if __name__ == "__main__":
    main()
EOF

chmod +x tools/quick-extract.py

# 8. 進捗確認スクリプト
cat > check-progress.sh << 'EOF'
#!/bin/bash
echo "📊 JavaScript変換進捗レポート"
echo "================================"

total_js=$(find src/javascript -name "*.js" | wc -l)
completed=$(grep -l "✅ 変換完了" src/javascript/**/*.js 2>/dev/null | wc -l)
pending=$((total_js - completed))

echo "📁 生成済みJSファイル: $total_js 個"
echo "✅ 変換完了: $completed 個"
echo "🔄 変換待ち: $pending 個"
echo ""

if [ $pending -gt 0 ]; then
    echo "🔄 変換待ちファイル:"
    grep -L "✅ 変換完了" src/javascript/**/*.js 2>/dev/null | sed 's/^/  - /'
fi

echo ""
echo "📈 進捗率: $((completed * 100 / total_js))%"
EOF

chmod +x check-progress.sh

# 9. 最終確認と次のステップ
echo ""
echo "🎉 一括変換システム構築完了！"
echo "================================"
echo ""
echo "📊 実行結果:"
echo "✅ JSテンプレート生成: $converted_count/$total_files 個"
echo "✅ 変換ガイド作成: conversion-guide.md"
echo "✅ 抽出ヘルパー作成: tools/quick-extract.py"
echo "✅ 進捗確認スクリプト: check-progress.sh"
echo ""
echo "📁 生成されたファイル構造:"
find src/javascript -name "*.js" | head -10
echo "（... 他 $((converted_count - 10)) 個）"
echo ""
echo "🚀 次のステップ:"
echo "1. conversion-guide.md を確認"
echo "2. 基本サンプル4個から変換開始"
echo "3. ./check-progress.sh で進捗確認"
echo ""
echo "💡 効率的な変換方法:"
echo "📖 conversion-guide.md を参照"
echo "🔧 python tools/quick-extract.py <mkcd_file> でコード確認"
echo "📊 ./check-progress.sh で進捗追跡"
echo ""
echo "🎯 最優先変換対象:"
echo "  - src/javascript/basic/house-builder.js"
echo "  - src/javascript/basic/stairs-builder.js"
echo "  - src/javascript/basic/rainbow-generator.js"
echo "  - src/javascript/basic/position-demo.js"
