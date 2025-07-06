/**
 * 🦇 Bat Cave - バットケーブ
 * 
 * @description ダークヒーロー風の洞窟基地
 * @learning_objectives 地下構造、テーマ建築、雰囲気作り
 * @difficulty ⭐⭐ (初中級)
 * @chat_command batcave
 */

player.onChat("batcave", function () {
    let pos = player.position()
    
    // 地下洞窟の掘削
    let caveSize = 20
    let caveDepth = 8
    
    // 洞窟内部を空洞化
    blocks.fill(
        AIR,
        pos.add(positions.create(-caveSize/2, -caveDepth, -caveSize/2)),
        pos.add(positions.create(caveSize/2, -1, caveSize/2)),
        FillOperation.Replace
    )
    
    // 洞窟の床
    blocks.fill(
        STONE,
        pos.add(positions.create(-caveSize/2, -caveDepth-1, -caveSize/2)),
        pos.add(positions.create(caveSize/2, -caveDepth-1, caveSize/2)),
        FillOperation.Replace
    )
    
    // 秘密の入り口（地面レベル）
    blocks.place(AIR, pos.add(positions.create(0, 0, caveSize/2)))
    blocks.place(AIR, pos.add(positions.create(0, -1, caveSize/2)))
    
    // 螺旋階段で地下へ
    for (let level = 0; level < caveDepth; level++) {
        let angle = level * 45
        let radius = 3
        let x = Math.round(radius * Math.cos(angle * Math.PI / 180))
        let z = Math.round(radius * Math.sin(angle * Math.PI / 180))
        
        blocks.place(STONE, pos.add(positions.create(x, -level, z)))
    }
    
    // コンピューター室（中央エリア）
    blocks.fill(
        GLASS,
        pos.add(positions.create(-3, -caveDepth+1, -3)),
        pos.add(positions.create(3, -caveDepth+3, 3)),
        FillOperation.Replace
    )
    
    // 内部を空洞化
    blocks.fill(
        AIR,
        pos.add(positions.create(-2, -caveDepth+1, -2)),
        pos.add(positions.create(2, -caveDepth+2, 2)),
        FillOperation.Replace
    )
    
    // 車庫エリア
    blocks.fill(
        COBBLESTONE,
        pos.add(positions.create(5, -caveDepth+1, -8)),
        pos.add(positions.create(15, -caveDepth+3, 8)),
        FillOperation.Replace
    )
    
    blocks.fill(
        AIR,
        pos.add(positions.create(6, -caveDepth+1, -7)),
        pos.add(positions.create(14, -caveDepth+2, 7)),
        FillOperation.Replace
    )
    
    // 照明システム
    for (let i = -8; i <= 8; i += 4) {
        for (let j = -8; j <= 8; j += 4) {
            blocks.place(GLASS, pos.add(positions.create(i, -2, j)))
        }
    }
    
    player.say("🦇 バットケーブ完成！")
    player.say("🕳️ 地下に秘密基地が出来ました")
})

// 🎯 変換ステータス: ✅ 実装完了
