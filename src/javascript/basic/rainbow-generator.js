/**
 * 🌈 Rainbow Generator - 虹生成プログラム
 * 
 * @description 数学的計算とループを使った虹の描画
 * @learning_objectives ループ、配列、数学関数
 * @difficulty ⭐⭐ (初中級)
 * @chat_command rainbow
 * @original_file minecraft-rainbow-sample.mkcd
 */

player.onChat("rainbow", function () {
    // 基本ブロックで虹の色を表現
    let colors = [
        STONE,          // グレー層
        COBBLESTONE,    // 灰色層
        SAND,           // 黄色層
        DIRT,           // 茶色層
        GLASS,          // 透明層
        WOOL,           // 白色層
        BRICK           // 赤系層（環境依存）
    ]
    
    let pos = player.position()
    
    // 各色で虹の層を作る
    for (let i = 0; i < colors.length; i++) {
        // 半円を描く数学的計算
        for (let x = -8; x <= 8; x++) {
            let y = Math.round(Math.sqrt(64 - x * x)) - i
            if (y >= 0) {
                blocks.place(colors[i], pos.add(positions.create(x, y + 8, 3)))
            }
        }
    }
    
    player.say("🌈 美しい虹ができました！")
})

// 🎯 変換ステータス: ✅ 基本実装完了
