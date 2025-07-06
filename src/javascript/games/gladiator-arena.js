/**
 * 🏟️ Gladiator Arena - 対戦アリーナ
 * 
 * @description プレイヤー対戦用のアリーナを自動生成
 * @learning_objectives ループ、座標計算、ゲーム設計
 * @difficulty ⭐⭐⭐ (中級)
 * @chat_command gladiator
 * @minecraft_version MEE 1.20+ 対応
 */

player.onChat("gladiator", function () {
    let pos = player.position()
    
    // アリーナの基盤を作成（円形）
    for (let x = -15; x <= 15; x++) {
        for (let z = -15; z <= 15; z++) {
            let distance = Math.sqrt(x * x + z * z)
            if (distance <= 15) {
                // 床
                blocks.place(SAND, pos.add(positions.create(x, -1, z)))
                
                // 外壁（半径14-15の範囲）
                if (distance > 14) {
                    for (let y = 0; y < 5; y++) {
                        blocks.place(COBBLESTONE, pos.add(positions.create(x, y, z)))
                    }
                }
            }
        }
    }
    
    // 中央の対戦台
    blocks.fill(
        STONE,
        pos.add(positions.create(-3, 0, -3)),
        pos.add(positions.create(3, 0, 3)),
        FillOperation.Replace
    )
    
    // 観客席（階段状）
    for (let ring = 16; ring <= 20; ring++) {
        let height = ring - 15
        for (let angle = 0; angle < 360; angle += 10) {
            let x = Math.round(ring * Math.cos(angle * Math.PI / 180))
            let z = Math.round(ring * Math.sin(angle * Math.PI / 180))
            blocks.place(STONE, pos.add(positions.create(x, height, z)))
        }
    }
    
    player.say("🏟️ グラディエーターアリーナが完成しました！")
})

// 🎯 変換ステータス: ✅ 実装完了
