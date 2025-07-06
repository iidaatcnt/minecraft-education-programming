/**
 * 🎪 Pitfall Trap - 落とし穴トラップ
 * 
 * @description 隠れた落とし穴の作成
 * @learning_objectives トラップ機構、隠蔽技術、ゲーム要素
 * @difficulty ⭐⭐ (初中級)
 * @chat_command pitfall
 */

player.onChat("pitfall", function () {
    let pos = player.position()
    
    // 通常の道を作成
    blocks.fill(
        STONE,
        pos.add(positions.create(-5, 0, 0)),
        pos.add(positions.create(15, 0, 3)),
        FillOperation.Replace
    )
    
    // 隠れた落とし穴を数カ所に設置
    let trapLocations = [
        {x: 2, z: 1},
        {x: 7, z: 2},
        {x: 12, z: 1}
    ]
    
    trapLocations.forEach(trap => {
        // 深い穴を掘る
        blocks.fill(
            AIR,
            pos.add(positions.create(trap.x, -1, trap.z)),
            pos.add(positions.create(trap.x, -5, trap.z)),
            FillOperation.Replace
        )
        
        // 底に柔らかい着地点
        blocks.place(WOOL, pos.add(positions.create(trap.x, -6, trap.z)))
        
        // 見た目は普通の道（薄いガラスで覆う）
        blocks.place(GLASS, pos.add(positions.create(trap.x, 0, trap.z)))
    })
    
    // 警告サイン（少し離れた場所）
    blocks.place(WOOL, pos.add(positions.create(-3, 1, 1)))
    blocks.place(WOOL, pos.add(positions.create(-3, 2, 1)))
    
    player.say("🎪 落とし穴トラップを設置しました！")
    player.say("⚠️ 注意: 透明な床に注意して歩いてください")
})

// 🎯 変換ステータス: ✅ 実装完了
