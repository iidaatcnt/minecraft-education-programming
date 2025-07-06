/**
 * 📍 Position Demo - 座標システムデモ
 * 
 * @description 3次元座標系の理解を深める
 * @learning_objectives 座標系、相対位置、方向感覚
 * @difficulty ⭐ (初級)
 * @chat_command pos
 * @original_file minecraft-positions.mkcd
 */

player.onChat("pos", function () {
    let pos = player.position()
    
    // 現在位置を表示
    player.say(`現在位置: X=${pos.x}, Y=${pos.y}, Z=${pos.z}`)
    
    // 各軸方向にマーカーを配置
    // X軸（東西）- 赤系
    blocks.place(BRICK, pos.add(positions.create(5, 0, 0)))   // 東
    blocks.place(BRICK, pos.add(positions.create(-5, 0, 0)))  // 西
    
    // Y軸（上下）- 白系
    blocks.place(WOOL, pos.add(positions.create(0, 5, 0)))    // 上
    blocks.place(WOOL, pos.add(positions.create(0, -2, 0)))   // 下
    
    // Z軸（南北）- 黄系
    blocks.place(SAND, pos.add(positions.create(0, 0, 5)))    // 南
    blocks.place(SAND, pos.add(positions.create(0, 0, -5)))   // 北
    
    // 中央マーカー
    blocks.place(GLASS, pos)
    
    player.say("📍 座標軸マーカーを設置しました！")
})

// 🎯 変換ステータス: ✅ 基本実装完了
