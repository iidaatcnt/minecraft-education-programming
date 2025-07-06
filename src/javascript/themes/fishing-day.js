/**
 * 🎣 Fishing Day - 釣りイベント
 * 
 * @description 釣り場と釣りイベントの設定
 * @learning_objectives 水辺設計、イベント管理、レクリエーション
 * @difficulty ⭐⭐ (初中級)
 * @chat_command fishing
 */

player.onChat("fishing", function () {
    let pos = player.position()
    
    // 釣り池の作成
    let pondSize = 12
    
    // 池の掘削
    for (let x = -pondSize/2; x <= pondSize/2; x++) {
        for (let z = -pondSize/2; z <= pondSize/2; z++) {
            let distance = Math.sqrt(x * x + z * z)
            if (distance <= pondSize/2) {
                // 池の深さ
                blocks.place(AIR, pos.add(positions.create(x, 0, z)))
                blocks.place(AIR, pos.add(positions.create(x, -1, z)))
                blocks.place(STONE, pos.add(positions.create(x, -2, z)))
            }
        }
    }
    
    // 釣り桟橋
    for (let i = 0; i < 6; i++) {
        blocks.place(WOOD, pos.add(positions.create(pondSize/2 + 1 + i, 0, 0)))
        blocks.place(WOOD, pos.add(positions.create(pondSize/2 + 1 + i, 0, 1)))
    }
    
    // 桟橋の手すり
    for (let i = 1; i < 6; i++) {
        blocks.place(WOOD, pos.add(positions.create(pondSize/2 + 1 + i, 1, -1)))
        blocks.place(WOOD, pos.add(positions.create(pondSize/2 + 1 + i, 1, 2)))
    }
    
    // 釣り道具置き場
    blocks.place(COBBLESTONE, pos.add(positions.create(pondSize/2 + 6, 1, 0)))
    blocks.place(COBBLESTONE, pos.add(positions.create(pondSize/2 + 6, 1, 1)))
    
    // 魚のマーカー（池の中）
    for (let i = 0; i < 8; i++) {
        let angle = i * 45
        let fishRadius = 3
        let fishX = Math.round(fishRadius * Math.cos(angle * Math.PI / 180))
        let fishZ = Math.round(fishRadius * Math.sin(angle * Math.PI / 180))
        
        blocks.place(SAND, pos.add(positions.create(fishX, -1, fishZ)))  // 魚の代用
    }
    
    // 休憩エリア
    blocks.fill(
        STONE,
        pos.add(positions.create(-pondSize - 3, 0, -3)),
        pos.add(positions.create(-pondSize - 1, 0, 3)),
        FillOperation.Replace
    )
    
    // ベンチ
    blocks.place(STONE, pos.add(positions.create(-pondSize - 2, 1, -2)))
    blocks.place(STONE, pos.add(positions.create(-pondSize - 2, 1, 0)))
    blocks.place(STONE, pos.add(positions.create(-pondSize - 2, 1, 2)))
    
    player.say("🎣 釣り場完成！")
    player.say("🐟 池に魚（黄色ブロック）がいます")
    player.say("🪑 休憩エリアもあります")
})

// 🎯 変換ステータス: ✅ 実装完了
