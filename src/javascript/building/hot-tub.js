/**
 * 🛁 Hot Tub - ホットタブ
 * 
 * @description リラックス用の温泉設備
 * @learning_objectives 曲線設計、装飾、アメニティ
 * @difficulty ⭐ (初級)
 * @chat_command hottub
 */

player.onChat("hottub", function () {
    let pos = player.position()
    
    // 円形のホットタブ基盤
    let radius = 4
    for (let x = -radius; x <= radius; x++) {
        for (let z = -radius; z <= radius; z++) {
            let distance = Math.sqrt(x * x + z * z)
            if (distance <= radius) {
                // 底部
                blocks.place(STONE, pos.add(positions.create(x, -1, z)))
                
                // 側壁
                if (distance > radius - 1) {
                    blocks.place(COBBLESTONE, pos.add(positions.create(x, 0, z)))
                } else {
                    // 内部は空洞（水を想定）
                    blocks.place(AIR, pos.add(positions.create(x, 0, z)))
                }
            }
        }
    }
    
    // 入り口ステップ
    blocks.place(STONE, pos.add(positions.create(radius + 1, -1, 0)))
    blocks.place(STONE, pos.add(positions.create(radius + 1, 0, 0)))
    
    // 周囲の装飾
    // ベンチ
    for (let i = -2; i <= 2; i++) {
        blocks.place(STONE, pos.add(positions.create(radius + 3, 0, i)))
    }
    
    // タオル置き場（白ブロック）
    blocks.place(WOOL, pos.add(positions.create(radius + 2, 1, 2)))
    blocks.place(WOOL, pos.add(positions.create(radius + 2, 1, -2)))
    
    // 照明（ガラスブロック）
    blocks.place(GLASS, pos.add(positions.create(-radius - 2, 2, 0)))
    blocks.place(GLASS, pos.add(positions.create(radius + 2, 2, 0)))
    blocks.place(GLASS, pos.add(positions.create(0, 2, -radius - 2)))
    blocks.place(GLASS, pos.add(positions.create(0, 2, radius + 2)))
    
    player.say("🛁 ホットタブ完成！")
    player.say("♨️ リラックスタイムをお楽しみください")
})

// 🎯 変換ステータス: ✅ 実装完了
