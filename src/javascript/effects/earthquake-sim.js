/**
 * 🌍 Earthquake Simulator - 地震シミュレーション
 * 
 * @description 地震の揺れを視覚的に表現
 * @learning_objectives ランダム関数、時間制御、エフェクト
 * @difficulty ⭐⭐⭐ (中級)
 * @chat_command earthquake
 * @minecraft_version MEE 1.20+ 対応
 */

player.onChat("earthquake", function () {
    let pos = player.position()
    
    player.say("🌍 地震が発生します！3秒後に始まります...")
    
    // 地震エフェクトをシミュレート
    for (let wave = 0; wave < 10; wave++) {
        // ランダムな位置にブロックを配置・削除
        for (let i = 0; i < 20; i++) {
            let randomX = randint(-10, 10)
            let randomZ = randint(-10, 10)
            let randomY = randint(0, 3)
            
            let shakePos = pos.add(positions.create(randomX, randomY, randomZ))
            
            // 50%の確率でブロック配置、50%で削除
            if (randint(0, 1) === 0) {
                blocks.place(DIRT, shakePos)
            } else {
                blocks.place(AIR, shakePos)
            }
        }
        
        // 地震の強度をメッセージで表現
        if (wave < 3) {
            player.say("📳 軽い揺れ...")
        } else if (wave < 7) {
            player.say("🌋 激しい揺れ！")
        } else {
            player.say("🆘 非常に激しい揺れ！！")
        }
    }
    
    player.say("🌅 地震が収まりました。")
})

// 🎯 変換ステータス: ✅ 実装完了
