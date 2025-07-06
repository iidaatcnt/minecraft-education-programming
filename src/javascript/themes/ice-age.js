/**
 * 🧊 Ice Age - アイスエイジ
 * 
 * @description 氷河期の世界を再現
 * @learning_objectives 環境デザイン、大規模地形、テーマ表現
 * @difficulty ⭐⭐⭐ (中級)
 * @chat_command iceage
 */

player.onChat("iceage", function () {
    let pos = player.position()
    let iceSize = 25
    
    player.say("🧊 氷河期の世界を作成中...")
    
    // 氷の大地
    blocks.fill(
        GLASS,  // 氷の代用
        pos.add(positions.create(-iceSize, -1, -iceSize)),
        pos.add(positions.create(iceSize, -1, iceSize)),
        FillOperation.Replace
    )
    
    // 雪の丘陵
    for (let hill = 0; hill < 5; hill++) {
        let hillX = randint(-iceSize + 5, iceSize - 5)
        let hillZ = randint(-iceSize + 5, iceSize - 5)
        let hillHeight = randint(3, 8)
        let hillRadius = randint(4, 7)
        
        for (let x = -hillRadius; x <= hillRadius; x++) {
            for (let z = -hillRadius; z <= hillRadius; z++) {
                let distance = Math.sqrt(x * x + z * z)
                if (distance <= hillRadius) {
                    let height = Math.round(hillHeight * (1 - distance / hillRadius))
                    for (let y = 0; y < height; y++) {
                        blocks.place(WOOL, pos.add(positions.create(hillX + x, y, hillZ + z)))
                    }
                }
            }
        }
    }
    
    // 氷柱
    for (let pillar = 0; pillar < 10; pillar++) {
        let pillarX = randint(-iceSize + 2, iceSize - 2)
        let pillarZ = randint(-iceSize + 2, iceSize - 2)
        let pillarHeight = randint(5, 12)
        
        blocks.fill(
            GLASS,
            pos.add(positions.create(pillarX, 0, pillarZ)),
            pos.add(positions.create(pillarX, pillarHeight, pillarZ)),
            FillOperation.Replace
        )
    }
    
    // 氷河の亀裂
    for (let crack = 0; crack < 8; crack++) {
        let startX = randint(-iceSize, iceSize)
        let startZ = randint(-iceSize, iceSize)
        let length = randint(5, 15)
        let direction = randint(0, 3) * 90  // 4方向
        
        for (let i = 0; i < length; i++) {
            let crackX = startX + Math.round(i * Math.cos(direction * Math.PI / 180))
            let crackZ = startZ + Math.round(i * Math.sin(direction * Math.PI / 180))
            
            if (Math.abs(crackX) < iceSize && Math.abs(crackZ) < iceSize) {
                blocks.place(AIR, pos.add(positions.create(crackX, -1, crackZ)))
                blocks.place(COBBLESTONE, pos.add(positions.create(crackX, -2, crackZ)))  // 深い亀裂
            }
        }
    }
    
    // 古代生物の化石（骨の代用）
    let fossilX = randint(-10, 10)
    let fossilZ = randint(-10, 10)
    
    // 恐竜の骨格もどき
    blocks.fill(
        WOOL,
        pos.add(positions.create(fossilX, 0, fossilZ)),
        pos.add(positions.create(fossilX + 8, 2, fossilZ + 2)),
        FillOperation.Replace
    )
    
    player.say("🧊 氷河期の世界が完成！")
    player.say("❄️ 氷の大地と雪の丘陵、氷柱が出現")
    player.say("🦕 古代生物の化石も発見できます")
})

// 🎯 変換ステータス: ✅ 実装完了
