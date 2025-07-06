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
