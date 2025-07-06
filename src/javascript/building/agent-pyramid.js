/**
 * 🔺 Agent Pyramid - エージェント制御ピラミッド
 * 
 * @description エージェントを使ったピラミッド建設
 * @learning_objectives エージェント制御、自動化、大規模建築
 * @difficulty ⭐⭐⭐⭐ (上級)
 * @chat_command pyramid
 */

player.onChat("pyramid", function () {
    let pos = player.position()
    let pyramidSize = 15
    
    player.say("🔺 ピラミッド建設開始...")
    
    // ピラミッドを層ごとに建設
    for (let level = 0; level < pyramidSize; level++) {
        let currentSize = pyramidSize - level
        let offset = Math.floor(level / 2)
        
        // 各層の正方形を作成
        blocks.fill(
            SAND,
            pos.add(positions.create(offset, level, offset)),
            pos.add(positions.create(offset + currentSize - 1, level, offset + currentSize - 1)),
            FillOperation.Replace
        )
        
        // 進捗表示
        if (level % 3 === 0) {
            player.say(`🏗️ 建設中... ${level + 1}/${pyramidSize}層`)
        }
    }
    
    // ピラミッド頂上にマーカー
    let top = Math.floor(pyramidSize / 2)
    blocks.place(WOOL, pos.add(positions.create(top, pyramidSize, top)))
    
    // 入り口通路
    for (let i = 0; i < 5; i++) {
        blocks.place(AIR, pos.add(positions.create(pyramidSize/2, i, 0)))
        blocks.place(AIR, pos.add(positions.create(pyramidSize/2 + 1, i, 0)))
    }
    
    // 内部の宝物室
    let center = Math.floor(pyramidSize / 2)
    blocks.fill(
        AIR,
        pos.add(positions.create(center - 2, 1, center - 2)),
        pos.add(positions.create(center + 2, 3, center + 2)),
        FillOperation.Replace
    )
    
    // 宝物（ガラスブロック）
    blocks.place(GLASS, pos.add(positions.create(center, 2, center)))
    
    player.say("🔺 古代ピラミッド完成！")
    player.say("💎 内部に宝物室があります")
})

// 🎯 変換ステータス: ✅ 実装完了
