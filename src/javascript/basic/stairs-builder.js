/**
 * 🏗️ Stairs Builder - 自動階段建設プログラム
 * 
 * @description ループを使った階段の自動建設
 * @learning_objectives ループ、座標計算、パターンの理解
 * @difficulty ⭐ (初級)
 * @chat_command stairs
 * @original_file minecraft-stairs-sample.mkcd
 */

player.onChat("stairs", function () {
    let pos = player.position()
    
    // 📝 学習ポイント: forループによる繰り返し処理
    for (let i = 0; i < 10; i++) {
        // 各段の位置を計算
        let stepPos = pos.add(positions.create(i, i, 0))
        
        // 各段を幅3ブロックで作成
        blocks.fill(
            COBBLESTONE,
            stepPos.add(positions.create(0, 0, -1)),
            stepPos.add(positions.create(0, 0, 1)),
            FillOperation.Replace
        )
        
        // 手すりの設置
        blocks.place(COBBLESTONE, stepPos.add(positions.create(0, 1, -2)))
        blocks.place(COBBLESTONE, stepPos.add(positions.create(0, 1, 2)))
    }
    
    player.say("🏗️ 10段の階段が完成しました！")
})

// 🎯 変換ステータス: ✅ 基本実装完了
