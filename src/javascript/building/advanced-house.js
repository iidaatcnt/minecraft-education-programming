/**
 * 🏘️ Advanced House - 高度な家建設
 * 
 * @description 複数部屋付きの大型住宅
 * @learning_objectives 複雑な建築、モジュール設計、空間計画
 * @difficulty ⭐⭐⭐ (中級)
 * @chat_command bighouse
 */

player.onChat("bighouse", function () {
    let startPos = player.position()
    
    // 大型土台 (20x15)
    blocks.fill(
        STONE,
        startPos,
        startPos.add(positions.create(19, 0, 14)),
        FillOperation.Replace
    )
    
    // 外壁 (高さ6)
    blocks.fill(
        COBBLESTONE,
        startPos.add(positions.create(0, 1, 0)),
        startPos.add(positions.create(19, 6, 14)),
        FillOperation.Replace
    )
    
    // 内部空洞化
    blocks.fill(
        AIR,
        startPos.add(positions.create(1, 1, 1)),
        startPos.add(positions.create(18, 5, 13)),
        FillOperation.Replace
    )
    
    // 部屋の仕切り壁
    // リビング・ダイニング分離
    blocks.fill(
        COBBLESTONE,
        startPos.add(positions.create(9, 1, 1)),
        startPos.add(positions.create(9, 5, 6)),
        FillOperation.Replace
    )
    
    // 寝室分離
    blocks.fill(
        COBBLESTONE,
        startPos.add(positions.create(1, 1, 7)),
        startPos.add(positions.create(18, 5, 7)),
        FillOperation.Replace
    )
    
    // 複数のドア
    blocks.place(AIR, startPos.add(positions.create(9, 1, 0)))  // 正面玄関
    blocks.place(AIR, startPos.add(positions.create(9, 2, 0)))
    
    blocks.place(AIR, startPos.add(positions.create(9, 1, 4)))  // 部屋間ドア
    blocks.place(AIR, startPos.add(positions.create(9, 2, 4)))
    
    blocks.place(AIR, startPos.add(positions.create(5, 1, 7)))  // 寝室ドア
    blocks.place(AIR, startPos.add(positions.create(5, 2, 7)))
    
    // 多数の窓
    let windows = [
        {x: 3, y: 2, z: 0}, {x: 6, y: 2, z: 0}, {x: 12, y: 2, z: 0}, {x: 15, y: 2, z: 0},
        {x: 0, y: 2, z: 3}, {x: 0, y: 2, z: 6}, {x: 19, y: 2, z: 3}, {x: 19, y: 2, z: 6},
        {x: 3, y: 2, z: 14}, {x: 15, y: 2, z: 14}
    ]
    
    windows.forEach(window => {
        blocks.place(GLASS, startPos.add(positions.create(window.x, window.y, window.z)))
    })
    
    // 2階部分の基礎
    blocks.fill(
        COBBLESTONE,
        startPos.add(positions.create(10, 7, 8)),
        startPos.add(positions.create(19, 7, 14)),
        FillOperation.Replace
    )
    
    player.say("🏘️ 高度な大型住宅が完成しました！")
    player.say("🏠 リビング、ダイニング、寝室付き")
})

// 🎯 変換ステータス: ✅ 実装完了
