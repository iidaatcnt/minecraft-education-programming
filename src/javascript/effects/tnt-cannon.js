/**
 * 💣 TNT Cannon - TNTキャノン
 * 
 * @description TNT発射装置（安全版）
 * @learning_objectives 軌道計算、発射機構、物理シミュレーション
 * @difficulty ⭐⭐ (初中級)
 * @chat_command cannon
 */

player.onChat("cannon", function () {
    let pos = player.position()
    
    // キャノンの台座
    blocks.fill(
        COBBLESTONE,
        pos.add(positions.create(-2, 0, -2)),
        pos.add(positions.create(2, 1, 2)),
        FillOperation.Replace
    )
    
    // キャノンの砲身
    for (let i = 0; i < 8; i++) {
        blocks.place(STONE, pos.add(positions.create(i, 2, 0)))
        blocks.place(STONE, pos.add(positions.create(i, 2, -1)))
        blocks.place(STONE, pos.add(positions.create(i, 2, 1)))
        
        // 砲身内部は空洞
        blocks.place(AIR, pos.add(positions.create(i, 2, 0)))
    }
    
    // TNTの軌道をシミュレート（白ブロックで表現）
    let range = 20
    let angle = 30  // 発射角度
    
    for (let distance = 0; distance < range; distance++) {
        // 弾道計算（簡易版）
        let x = distance
        let y = Math.round(distance * Math.tan(angle * Math.PI / 180) - (distance * distance) / 40)
        
        if (y >= 0) {
            blocks.place(WOOL, pos.add(positions.create(x + 8, y + 3, 0)))
        }
    }
    
    // 着弾地点
    blocks.fill(
        SAND,
        pos.add(positions.create(range + 6, 0, -3)),
        pos.add(positions.create(range + 10, 0, 3)),
        FillOperation.Replace
    )
    
    // 発射準備のTNT（安全な白ブロック）
    blocks.place(WOOL, pos.add(positions.create(1, 3, 0)))
    
    player.say("💣 TNTキャノン設置完了！")
    player.say("🎯 白いブロックが弾道軌跡です")
    player.say("⚠️ 安全のため実際のTNTは使用していません")
})

// 🎯 変換ステータス: ✅ 実装完了
