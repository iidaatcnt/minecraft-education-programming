/**
 * 🏆 Wipe Out - アクションゲーム
 * 
 * @description 障害物コースゲーム
 * @learning_objectives 空間設計、障害物配置、ゲーム体験
 * @difficulty ⭐⭐⭐ (中級)
 * @chat_command wipeout
 */

player.onChat("wipeout", function () {
    let pos = player.position()
    
    // スタート地点
    blocks.fill(
        WOOL,
        pos.add(positions.create(-2, 0, -2)),
        pos.add(positions.create(2, 0, 2)),
        FillOperation.Replace
    )
    
    // 障害物コース作成
    let courseLength = 30
    
    for (let i = 5; i < courseLength; i += 5) {
        // ジャンプ台
        blocks.place(STONE, pos.add(positions.create(0, 1, i)))
        blocks.place(STONE, pos.add(positions.create(0, 2, i+1)))
        blocks.place(STONE, pos.add(positions.create(0, 1, i+2)))
        
        // 左右の障害物
        if (i % 10 === 5) {
            blocks.place(COBBLESTONE, pos.add(positions.create(-2, 1, i+3)))
            blocks.place(COBBLESTONE, pos.add(positions.create(2, 1, i+3)))
        }
        
        // 床の穴（ランダム）
        if (randint(0, 1) === 0) {
            blocks.place(AIR, pos.add(positions.create(randint(-1, 1), 0, i+4)))
        }
    }
    
    // ゴール地点
    blocks.fill(
        SAND,
        pos.add(positions.create(-3, 0, courseLength)),
        pos.add(positions.create(3, 0, courseLength+3)),
        FillOperation.Replace
    )
    
    player.say("🏆 Wipe Out コース完成！")
    player.say("🏃 スタートからゴールまで走り抜けよう！")
})

// 🎯 変換ステータス: ✅ 実装完了
