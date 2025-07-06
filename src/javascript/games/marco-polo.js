/**
 * 🎯 Marco Polo - 位置探索ゲーム
 * 
 * @description プレイヤーの位置を当てるゲーム
 * @learning_objectives 座標系、距離計算、ゲームロジック
 * @difficulty ⭐⭐ (初中級)
 * @chat_command marco
 * @minecraft_version MEE 1.20+ 対応
 */

player.onChat("marco", function () {
    let pos = player.position()
    
    // ゲームエリアの境界を作成
    let size = 20
    
    // 境界線の作成
    for (let i = -size; i <= size; i++) {
        // 北と南の境界
        blocks.place(WOOL, pos.add(positions.create(i, 0, -size)))
        blocks.place(WOOL, pos.add(positions.create(i, 0, size)))
        // 東と西の境界
        blocks.place(WOOL, pos.add(positions.create(-size, 0, i)))
        blocks.place(WOOL, pos.add(positions.create(size, 0, i)))
    }
    
    // ランダムな目標地点を作成
    let targetX = randint(-size + 5, size - 5)
    let targetZ = randint(-size + 5, size - 5)
    let targetPos = pos.add(positions.create(targetX, 1, targetZ))
    
    // 目標地点にマーカーを配置（透明なので見えない）
    blocks.place(GLASS, targetPos)
    
    // 距離ヒントシステム
    let playerCurrentPos = player.position()
    let distance = Math.sqrt(
        Math.pow(playerCurrentPos.x - targetPos.x, 2) + 
        Math.pow(playerCurrentPos.z - targetPos.z, 2)
    )
    
    if (distance < 3) {
        player.say("🔥 とても近い！")
    } else if (distance < 7) {
        player.say("😊 近い！")
    } else if (distance < 15) {
        player.say("🤔 まだ遠い...")
    } else {
        player.say("❄️ とても遠い...")
    }
    
    player.say(`🎯 Marco Polo ゲーム開始！目標を探せ！現在の距離: ${Math.round(distance)}`)
})

// 🎯 変換ステータス: ✅ 実装完了
