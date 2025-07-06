/**
 * 🐷 Zombie Piglin - ゾンビピグリン
 * 
 * @description ネザー風の建造物
 * @learning_objectives ダーク建築、テーマ設計、雰囲気作り
 * @difficulty ⭐⭐ (初中級)
 * @chat_command zombies
 */

player.onChat("zombies", function () {
    let pos = player.position()
    
    // ネザー風要塞の基盤
    let fortressSize = 15
    
    // 要塞の土台
    blocks.fill(
        COBBLESTONE,
        pos.add(positions.create(-fortressSize, 0, -fortressSize)),
        pos.add(positions.create(fortressSize, 0, fortressSize)),
        FillOperation.Replace
    )
    
    // 中央の塔
    blocks.fill(
        COBBLESTONE,
        pos.add(positions.create(-3, 1, -3)),
        pos.add(positions.create(3, 8, 3)),
        FillOperation.Replace
    )
    
    // 塔の内部を空洞化
    blocks.fill(
        AIR,
        pos.add(positions.create(-2, 1, -2)),
        pos.add(positions.create(2, 7, 2)),
        FillOperation.Replace
    )
    
    // 塔の窓
    blocks.place(AIR, pos.add(positions.create(3, 3, 0)))
    blocks.place(AIR, pos.add(positions.create(-3, 3, 0)))
    blocks.place(AIR, pos.add(positions.create(0, 3, 3)))
    blocks.place(AIR, pos.add(positions.create(0, 3, -3)))
    
    blocks.place(AIR, pos.add(positions.create(3, 6, 0)))
    blocks.place(AIR, pos.add(positions.create(-3, 6, 0)))
    blocks.place(AIR, pos.add(positions.create(0, 6, 3)))
    blocks.place(AIR, pos.add(positions.create(0, 6, -3)))
    
    // 4つの角塔
    let corners = [
        {x: -fortressSize + 2, z: -fortressSize + 2},
        {x: fortressSize - 2, z: -fortressSize + 2},
        {x: -fortressSize + 2, z: fortressSize - 2},
        {x: fortressSize - 2, z: fortressSize - 2}
    ]
    
    corners.forEach(corner => {
        blocks.fill(
            COBBLESTONE,
            pos.add(positions.create(corner.x - 1, 1, corner.z - 1)),
            pos.add(positions.create(corner.x + 1, 5, corner.z + 1)),
            FillOperation.Replace
        )
        
        // 各塔の頂上に火（ガラスで表現）
        blocks.place(GLASS, pos.add(positions.create(corner.x, 6, corner.z)))
    })
    
    // 要塞間を結ぶ橋
    // 東西の橋
    blocks.fill(
        COBBLESTONE,
        pos.add(positions.create(-fortressSize + 2, 3, -1)),
        pos.add(positions.create(fortressSize - 2, 3, 1)),
        FillOperation.Replace
    )
    
    // 南北の橋
    blocks.fill(
        COBBLESTONE,
        pos.add(positions.create(-1, 3, -fortressSize + 2)),
        pos.add(positions.create(1, 3, fortressSize - 2)),
        FillOperation.Replace
    )
    
    // ゾンビピグリンの像（簡易版）
    let statueX = 6
    let statueZ = 6
    
    // 胴体
    blocks.fill(
        COBBLESTONE,
        pos.add(positions.create(statueX - 1, 1, statueZ - 1)),
        pos.add(positions.create(statueX + 1, 3, statueZ + 1)),
        FillOperation.Replace
    )
    
    // 頭
    blocks.place(COBBLESTONE, pos.add(positions.create(statueX, 4, statueZ)))
    
    // 腕
    blocks.place(COBBLESTONE, pos.add(positions.create(statueX - 2, 2, statueZ)))
    blocks.place(COBBLESTONE, pos.add(positions.create(statueX + 2, 2, statueZ)))
    
    // 足
    blocks.place(COBBLESTONE, pos.add(positions.create(statueX - 1, 0, statueZ + 2)))
    blocks.place(COBBLESTONE, pos.add(positions.create(statueX + 1, 0, statueZ + 2)))
    
    // 警告サイン
    blocks.place(WOOL, pos.add(positions.create(-6, 1, -6)))
    blocks.place(WOOL, pos.add(positions.create(-6, 2, -6)))
    blocks.place(WOOL, pos.add(positions.create(-6, 3, -6)))
    
    player.say("🐷 ゾンビピグリン要塞完成！")
    player.say("🏰 ネザー風の不気味な要塞です")
    player.say("⚠️ 危険な雰囲気を演出")
})

// 🎯 変換ステータス: ✅ 実装完了
