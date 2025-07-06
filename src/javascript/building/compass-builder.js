/**
 * 🧭 Compass Builder - コンパス建設
 * 
 * @description 方角を示すコンパス構造物
 * @learning_objectives 方向感覚、円形構造、座標計算
 * @difficulty ⭐⭐ (初中級)
 * @chat_command compass
 */

player.onChat("compass", function () {
    let pos = player.position()
    let radius = 10
    
    // 中央の台座
    blocks.fill(
        STONE,
        pos.add(positions.create(-2, 0, -2)),
        pos.add(positions.create(2, 1, 2)),
        FillOperation.Replace
    )
    
    // 北南東西の方向線
    // 北 (Z-)
    for (let i = 1; i <= radius; i++) {
        blocks.place(COBBLESTONE, pos.add(positions.create(0, 0, -i)))
        if (i === radius) {
            blocks.place(WOOL, pos.add(positions.create(0, 1, -i)))  // 北マーカー
            blocks.place(WOOL, pos.add(positions.create(-1, 1, -i)))
            blocks.place(WOOL, pos.add(positions.create(1, 1, -i)))
        }
    }
    
    // 南 (Z+)
    for (let i = 1; i <= radius; i++) {
        blocks.place(COBBLESTONE, pos.add(positions.create(0, 0, i)))
        if (i === radius) {
            blocks.place(SAND, pos.add(positions.create(0, 1, i)))  // 南マーカー
        }
    }
    
    // 東 (X+)
    for (let i = 1; i <= radius; i++) {
        blocks.place(COBBLESTONE, pos.add(positions.create(i, 0, 0)))
        if (i === radius) {
            blocks.place(DIRT, pos.add(positions.create(i, 1, 0)))  // 東マーカー
        }
    }
    
    // 西 (X-)
    for (let i = 1; i <= radius; i++) {
        blocks.place(COBBLESTONE, pos.add(positions.create(-i, 0, 0)))
        if (i === radius) {
            blocks.place(GLASS, pos.add(positions.create(-i, 1, 0)))  // 西マーカー
        }
    }
    
    // 円形の外枠
    for (let angle = 0; angle < 360; angle += 15) {
        let x = Math.round(radius * Math.cos(angle * Math.PI / 180))
        let z = Math.round(radius * Math.sin(angle * Math.PI / 180))
        blocks.place(STONE, pos.add(positions.create(x, 0, z)))
    }
    
    // 中央にコンパス針
    blocks.place(WOOL, pos.add(positions.create(0, 2, 0)))
    
    player.say("🧭 コンパス完成！")
    player.say("🧭 北:白, 南:黄, 東:茶, 西:透明")
})

// 🎯 変換ステータス: ✅ 実装完了
