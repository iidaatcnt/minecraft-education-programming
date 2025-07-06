/**
 * 💀 Game Over - ゲーム終了処理
 * 
 * @description ゲーム終了時の演出
 * @learning_objectives エフェクト、メッセージ表示、ゲーム管理
 * @difficulty ⭐ (初級)
 * @chat_command gameover
 */

player.onChat("gameover", function () {
    let pos = player.position()
    
    // "GAME OVER" の文字を作成
    // G
    blocks.fill(COBBLESTONE, pos.add(positions.create(0, 1, 0)), pos.add(positions.create(0, 3, 0)), FillOperation.Replace)
    blocks.place(COBBLESTONE, pos.add(positions.create(1, 3, 0)))
    blocks.place(COBBLESTONE, pos.add(positions.create(1, 1, 0)))
    blocks.place(COBBLESTONE, pos.add(positions.create(1, 2, 0)))
    
    // A
    blocks.fill(COBBLESTONE, pos.add(positions.create(3, 1, 0)), pos.add(positions.create(3, 3, 0)), FillOperation.Replace)
    blocks.fill(COBBLESTONE, pos.add(positions.create(5, 1, 0)), pos.add(positions.create(5, 3, 0)), FillOperation.Replace)
    blocks.place(COBBLESTONE, pos.add(positions.create(4, 3, 0)))
    blocks.place(COBBLESTONE, pos.add(positions.create(4, 2, 0)))
    
    // M
    blocks.fill(COBBLESTONE, pos.add(positions.create(7, 1, 0)), pos.add(positions.create(7, 3, 0)), FillOperation.Replace)
    blocks.fill(COBBLESTONE, pos.add(positions.create(9, 1, 0)), pos.add(positions.create(9, 3, 0)), FillOperation.Replace)
    blocks.place(COBBLESTONE, pos.add(positions.create(8, 3, 0)))
    
    // E
    blocks.fill(COBBLESTONE, pos.add(positions.create(11, 1, 0)), pos.add(positions.create(11, 3, 0)), FillOperation.Replace)
    blocks.place(COBBLESTONE, pos.add(positions.create(12, 3, 0)))
    blocks.place(COBBLESTONE, pos.add(positions.create(12, 2, 0)))
    blocks.place(COBBLESTONE, pos.add(positions.create(12, 1, 0)))
    
    player.say("💀 GAME OVER")
    player.say("🔄 リスタートしますか？")
})

// 🎯 変換ステータス: ✅ 実装完了
