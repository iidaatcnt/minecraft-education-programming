#!/bin/bash
# Python修正と.mkcd抽出の実行

echo "🔧 Python環境を修正中..."

# 1. Python3でquick-extract.pyを修正
echo "📝 quick-extract.py をpython3対応に修正中..."

cat > tools/quick-extract.py << 'EOF'
#!/usr/bin/env python3
"""
.mkcdファイルからJavaScriptコードを抽出するヘルパーツール
Ubuntu/Linux環境でpython3を使用
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
            
            print(f"📁 ファイル内容: {files}")
            
            # main.ts または main.js を探す
            target_file = None
            if 'main.ts' in files:
                target_file = 'main.ts'
            elif 'main.js' in files:
                target_file = 'main.js'
            
            if target_file:
                content = zip_ref.read(target_file).decode('utf-8')
                return content, target_file
            else:
                # pxt.json から情報を取得してみる
                if 'pxt.json' in files:
                    pxt_content = zip_ref.read('pxt.json').decode('utf-8')
                    pxt_data = json.loads(pxt_content)
                    print(f"📋 プロジェクト情報: {pxt_data.get('name', 'Unknown')}")
                
                print(f"⚠️ TypeScript/JavaScriptファイルが見つかりません")
                print(f"📂 利用可能ファイル: {files}")
                return None, None
                
    except Exception as e:
        print(f"❌ 抽出エラー: {e}")
        return None, None

def main():
    if len(sys.argv) != 2:
        print("使用方法: python3 quick-extract.py <mkcd_file>")
        print("例: python3 tools/quick-extract.py dist/makecode/minecraft-house-sample.mkcd")
        return
    
    mkcd_file = sys.argv[1]
    if not os.path.exists(mkcd_file):
        print(f"❌ ファイルが見つかりません: {mkcd_file}")
        return
    
    print(f"🔍 抽出中: {mkcd_file}")
    content, target_file = extract_from_mkcd(mkcd_file)
    
    if content:
        print(f"✅ 抽出成功 ({target_file}):")
        print("=" * 60)
        print(content)
        print("=" * 60)
        print("👆 このコードをJSファイルにコピーしてください")
        
        # ファイル保存の提案
        base_name = os.path.basename(mkcd_file).replace('.mkcd', '')
        suggested_file = f"extracted_{base_name}.js"
        print(f"💡 抽出結果を保存: {suggested_file}")
        
        save_choice = input("ファイルに保存しますか？ (y/n): ")
        if save_choice.lower() == 'y':
            with open(suggested_file, 'w', encoding='utf-8') as f:
                f.write(f"// 抽出元: {mkcd_file}\n")
                f.write(f"// 抽出日時: {os.popen('date').read().strip()}\n\n")
                f.write(content)
            print(f"✅ 保存完了: {suggested_file}")
    else:
        print("❌ 抽出失敗")

if __name__ == "__main__":
    main()
EOF

chmod +x tools/quick-extract.py

echo "✅ Python修正完了"

# 2. Python3の確認
echo "🐍 Python3環境を確認中..."
python3 --version

# 3. 必要なPythonモジュールの確認
echo "📦 必要なモジュールを確認中..."
python3 -c "import zipfile, json, os, sys; print('✅ 必要なモジュールはすべて利用可能')"

# 4. 実際にhouse-sampleを抽出
echo "🏠 minecraft-house-sample.mkcd を抽出中..."

if [ -f "dist/makecode/minecraft-house-sample.mkcd" ]; then
    echo "📁 ファイル確認: ✅"
    python3 tools/quick-extract.py dist/makecode/minecraft-house-sample.mkcd
else
    echo "❌ minecraft-house-sample.mkcd が見つかりません"
    echo "📁 利用可能な.mkcdファイル:"
    ls dist/makecode/*.mkcd | head -5
fi

# 5. 他の主要ファイルも試す
echo ""
echo "🔄 他の基本ファイルも確認してみましょう..."

for file in "minecraft-stairs-sample.mkcd" "minecraft-rainbow-sample.mkcd" "minecraft-positions.mkcd"
do
    if [ -f "dist/makecode/$file" ]; then
        echo ""
        echo "📋 $file の内容確認:"
        python3 tools/quick-extract.py "dist/makecode/$file" | head -20
        echo "（続きは個別実行で確認）"
    fi
done

# 6. 簡単な使用方法ガイド
echo ""
echo "📚 quick-extract.py 使用方法:"
echo "================================"
echo "✅ 基本使用法:"
echo "   python3 tools/quick-extract.py dist/makecode/[ファイル名].mkcd"
echo ""
echo "🎯 主要ファイルの抽出コマンド:"
echo "   python3 tools/quick-extract.py dist/makecode/minecraft-house-sample.mkcd"
echo "   python3 tools/quick-extract.py dist/makecode/minecraft-stairs-sample.mkcd"
echo "   python3 tools/quick-extract.py dist/makecode/minecraft-rainbow-sample.mkcd"
echo ""
echo "💡 抽出後の作業:"
echo "1. 表示されたコードをコピー"
echo "2. 対応するsrc/javascript/フォルダのJSファイルを開く"
echo "3. TODOコメント部分を削除してコードを貼り付け"
echo "4. 学習ポイントやコメントを追加"
echo ""

# 7. 手動抽出の代替方法も提案
echo "🔧 Python以外の抽出方法:"
echo "================================"
echo "方法1: MakeCode直接抽出（推奨）"
echo "1. Minecraft Education Edition 起動"
echo "2. Code Builder (Cキー) 開く" 
echo "3. Import → .mkcdファイル選択"
echo "4. JavaScript タブクリック"
echo "5. コード全体をコピー"
echo ""
echo "方法2: ZIP展開（上級者向け）"
echo "1. .mkcdファイルの拡張子を.zipに変更"
echo "2. 展開してmain.tsまたはmain.jsを確認"
echo ""

# 8. 進捗確認スクリプトも修正
cat > check-progress.sh << 'EOF'
#!/bin/bash
echo "📊 JavaScript変換進捗レポート"
echo "================================"

# JSファイル数をカウント
total_js=$(find src/javascript -name "*.js" 2>/dev/null | wc -l)

# 変換完了ファイルをカウント
completed=0
if [ $total_js -gt 0 ]; then
    completed=$(grep -l "✅ 変換完了" src/javascript/**/*.js 2>/dev/null | wc -l)
fi

pending=$((total_js - completed))

echo "📁 生成済みJSファイル: $total_js 個"
echo "✅ 変換完了: $completed 個"
echo "🔄 変換待ち: $pending 個"
echo ""

if [ $pending -gt 0 ] && [ $total_js -gt 0 ]; then
    echo "🔄 変換待ちファイル:"
    find src/javascript -name "*.js" -exec grep -L "✅ 変換完了" {} \; 2>/dev/null | head -10 | sed 's/^/  - /'
    if [ $pending -gt 10 ]; then
        echo "  ... (他 $((pending - 10)) 個)"
    fi
fi

if [ $total_js -gt 0 ]; then
    echo ""
    echo "📈 進捗率: $((completed * 100 / total_js))%"
else
    echo "⚠️ JSファイルが見つかりません。まず bulk-convert.sh を実行してください。"
fi

echo ""
echo "🚀 次のアクション:"
if [ $total_js -eq 0 ]; then
    echo "1. ./bulk-convert.sh を実行してJSテンプレートを生成"
elif [ $pending -gt 0 ]; then
    echo "1. python3 tools/quick-extract.py で.mkcdファイルからコード抽出"
    echo "2. 最優先: src/javascript/basic/ の4ファイルから開始"
    echo "3. conversion-guide.md を参照して効率的に作業"
else
    echo "🎉 すべての変換が完了しています！"
fi
EOF

chmod +x check-progress.sh

echo ""
echo "🎉 修正完了！"
echo "================================"
echo "✅ Python3対応済み"
echo "✅ 抽出ツール準備完了"
echo "✅ 進捗確認ツール修正済み"
echo ""
echo "🚀 今すぐ試してください:"
echo "   python3 tools/quick-extract.py dist/makecode/minecraft-house-sample.mkcd"