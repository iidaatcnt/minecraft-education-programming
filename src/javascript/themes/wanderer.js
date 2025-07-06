/**
 * 🚶 Wanderer - ワンダラー
 * 
 * @description 冒険者のキャンプと道具
 * @learning_objectives 冒険設定、サバイバル要素、ストーリー
 * @difficulty ⭐⭐ (初中級)
 * @chat_command wander
 */

player.onChat("wander", function () {
    let pos = player.position()
    
    // 冒険者のキャンプファイヤー
    blocks.place(STONE, pos.add(positions.create(0, 0, 0)))
    blocks.place(STONE, pos.add(positions.create(1, 0, 0)))
    blocks.place(STONE, pos.add(positions.create(-1, 0, 0)))
    blocks.place(STONE, pos.add(positions.create(0, 0, 1)))
    blocks.place(STONE, pos.add(positions.create(0, 0, -1)))
    
    // 中央に火（ガラスブロックで表現）
    blocks.place(GLASS, pos.add(positions.create(0, 1, 0)))
    
    // テント
    // テントの骨組み
    blocks.place(WOOD, pos.add(positions.create(4, 0, -3)))
    blocks.place(WOOD, pos.add(positions.create(4, 3, -3)))
    blocks.place(WOOD, pos.add(positions.create(4, 0, 3)))
    blocks.place(WOOD, pos.add(positions.create(4, 3, 3)))
    blocks.place(WOOD, pos.add(positions.create(8, 0, 0)))
    blocks.place(WOOD, pos.add(positions.create(8, 2, 0)))
    
    // テント布（羊毛で表現）
    for (let x = 4; x <= 8; x++) {
        for (let z = -3; z <= 3; z++) {
            let height = 3 - Math.abs(z)  // 三角形の形
            if (x === 4 || x === 8 || Math.abs(z) === 3) {
                for (let y = 1; y <= height; y++) {
                    blocks.place(WOOL, pos.add(positions.create(x, y, z)))
                }
            }
        }
    }
    
    // 睡眠エリア（テント内）
    blocks.fill(
        WOOL,
        pos.add(positions.create(5, 0, -2)),
        pos.add(positions.create(7, 0, 2)),
        FillOperation.Replace
    )
    
    // 冒険用品の配置
    // バックパック（荷物）
    blocks.place(COBBLESTONE, pos.add(positions.create(2, 0, 2)))
    blocks.place(COBBLESTONE, pos.add(positions.create(2, 1, 2)))
    
    // 水筒
    blocks.place(GLASS, pos.add(positions.create(1, 0, 3)))
    
    // 地図テーブル
    blocks.fill(
        WOOD,
        pos.add(positions.create(-3, 0, -2)),
        pos.add(positions.create(-1, 0, 0)),
        FillOperation.Replace
    )
    
    // 地図（紙の代用）
    blocks.place(WOOL, pos.add(positions.create(-2, 1, -1)))
    
    // 道標
    blocks.place(WOOD, pos.add(positions.create(-5, 0, 0)))
    blocks.place(WOOD, pos.add(positions.create(-5, 1, 0)))
    blocks.place(WOOD, pos.add(positions.create(-5, 2, 0)))
    
    // 方向表示
    blocks.place(WOOD, pos.add(positions.create(-6, 2, 0)))  // 西
    blocks.place(WOOD, pos.add(positions.create(-4, 2, 0)))  // 東
    blocks.place(WOOD, pos.add(positions.create(-5, 2, -1))) // 北
    blocks.place(WOOD, pos.add(positions.create(-5, 2, 1)))  // 南
    
    // 小道
    for (let i = -10; i <= 15; i++) {
        if (randint(0, 2) !== 0) {  // ランダムに配置
            blocks.place(DIRT, pos.add(positions.create(i, 0, -5)))
        }
    }
    
    player.say("🚶 冒険者のキャンプが完成！")
    player.say("🏕️ テント、キャンプファイヤー、道具一式")
    player.say("🗺️ 地図テーブルと道標もあります")
})

// 🎯 変換ステータス: ✅ 実装完了
