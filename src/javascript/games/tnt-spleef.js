/**
 * 💥 TNT Spleef - 床破壊ゲーム
 * 
 * @description 床を破壊して落下させるゲーム
 * @learning_objectives ゲームロジック、範囲操作、競技設計
 * @difficulty ⭐⭐ (初中級)
 * @chat_command spleef
 */

player.onChat("spleef", function () {
    let pos = player.position()
    
    // ゲームフィールド（プラットフォーム）作成
    let size = 15
    
    // プラットフォーム作成
    blocks.fill(
        WOOL,
        pos.add(positions.create(-size, 0, -size)),
        pos.add(positions.create(size, 0, size)),
        FillOperation.Replace
    )
    
    // 落下防止の底部（3ブロック下）
    blocks.fill(
        STONE,
        pos.add(positions.create(-size-2, -3, -size-2)),
        pos.add(positions.create(size+2, -3, size+2)),
        FillOperation.Replace
    )
    
    // 境界壁
    for (let i = -size-1; i <= size+1; i++) {
        for (let height = 1; height <= 3; height++) {
            blocks.place(GLASS, pos.add(positions.create(i, height, -size-1)))
            blocks.place(GLASS, pos.add(positions.create(i, height, size+1)))
            blocks.place(GLASS, pos.add(positions.create(-size-1, height, i)))
            blocks.place(GLASS, pos.add(positions.create(size+1, height, i)))
        }
    }
    
    player.say("💥 TNT Spleef アリーナ完成！")
    player.say("🎮 ルール: 床を破壊して相手を落下させよう！")
})

// 🎯 変換ステータス: ✅ 実装完了
