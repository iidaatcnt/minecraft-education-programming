/**
 * 🐔 Chicken Rain - ニワトリの雨
 * 
 * @description 空からニワトリブロックが降る演出
 * @learning_objectives ランダム配置、エフェクト、時間制御
 * @difficulty ⭐⭐ (初中級)
 * @chat_command chickens
 */

player.onChat("chickens", function () {
    let pos = player.position()
    
    player.say("🐔 ニワトリの雨が降ってきます！")
    
    // 空の高い位置からニワトリブロック（白ブロックで代用）を降らせる
    let rainArea = 15
    let rainHeight = 20
    let chickenCount = 50
    
    for (let i = 0; i < chickenCount; i++) {
        // ランダムな位置を決定
        let x = randint(-rainArea, rainArea)
        let z = randint(-rainArea, rainArea)
        let startHeight = rainHeight + randint(0, 10)
        
        // 空から地面まで"ニワトリ"を配置
        for (let y = startHeight; y >= 0; y -= 2) {
            let chickenPos = pos.add(positions.create(x, y, z))
            
            // 白ブロック（ニワトリ代用）を配置
            blocks.place(WOOL, chickenPos)
        }
    }
    
    // 地面にニワトリの着地点をマーク
    for (let i = 0; i < 20; i++) {
        let x = randint(-rainArea, rainArea)
        let z = randint(-rainArea, rainArea)
        blocks.place(WOOL, pos.add(positions.create(x, 0, z)))
    }
    
    player.say("🐔 ニワトリの雨が降り注ぎました！")
    player.say("🪶 白いブロックがニワトリです")
})

// 🎯 変換ステータス: ✅ 実装完了
