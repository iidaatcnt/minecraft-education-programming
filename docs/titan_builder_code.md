# 🦣 進撃の巨人 - 巨人建築プロジェクト

## 🤖 エージェント準備

### 1. エージェントを配置・準備
```javascript
player.onChat("setup_titan", function () {
    player.say("🤖 巨人建築用エージェント準備中...")
    
    // エージェントをプレイヤーの近くに呼ぶ
    agent.teleportToPlayer()
    
    // エージェントを少し離れた場所に配置
    agent.move(FORWARD, 10)
    agent.move(DOWN, 1)
    
    player.say("✅ エージェント配置完了！")
    player.say("📍 この位置を基準に巨人を建築します")
})
```

## 🦣 巨人のパーツ建築

### 2. 巨人の脚（足）
```javascript
player.onChat("titan_legs", function () {
    player.say("🦵 巨人の脚を作ります...")
    
    let agentPos = agent.getPosition()
    
    // 左脚
    for (let x = -6; x < -2; x++) {
        for (let y = 0; y < 12; y++) {
            for (let z = -2; z < 2; z++) {
                blocks.place(COBBLESTONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    // 右脚
    for (let x = 2; x < 6; x++) {
        for (let y = 0; y < 12; y++) {
            for (let z = -2; z < 2; z++) {
                blocks.place(COBBLESTONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    player.say("🦵 巨人の脚完成！すごく太い！")
})
```

### 3. 巨人の胴体
```javascript
player.onChat("titan_body", function () {
    player.say("💪 巨人の胴体を作ります...")
    
    let agentPos = agent.getPosition()
    
    // 胴体（筋肉質に見えるように）
    for (let x = -5; x < 5; x++) {
        for (let y = 12; y < 22; y++) {
            for (let z = -3; z < 3; z++) {
                blocks.place(STONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    // 胸の筋肉（少し盛り上がらせる）
    for (let x = -3; x < 3; x++) {
        for (let y = 18; y < 21; y++) {
            for (let z = 2; z < 4; z++) {
                blocks.place(COBBLESTONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    player.say("💪 巨人の胴体完成！筋肉ムキムキ！")
})
```

### 4. 巨人の腕
```javascript
player.onChat("titan_arms", function () {
    player.say("💪 巨人の腕を作ります...")
    
    let agentPos = agent.getPosition()
    
    // 左腕
    for (let x = -8; x < -5; x++) {
        for (let y = 15; y < 21; y++) {
            for (let z = -2; z < 2; z++) {
                blocks.place(STONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    // 左手
    for (let x = -10; x < -8; x++) {
        for (let y = 13; y < 16; y++) {
            for (let z = -2; z < 2; z++) {
                blocks.place(COBBLESTONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    // 右腕
    for (let x = 5; x < 8; x++) {
        for (let y = 15; y < 21; y++) {
            for (let z = -2; z < 2; z++) {
                blocks.place(STONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    // 右手
    for (let x = 8; x < 10; x++) {
        for (let y = 13; y < 16; y++) {
            for (let z = -2; z < 2; z++) {
                blocks.place(COBBLESTONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    player.say("👋 巨人の腕完成！とても長い！")
})
```

### 5. 巨人の頭
```javascript
player.onChat("titan_head", function () {
    player.say("😱 巨人の頭を作ります...")
    
    let agentPos = agent.getPosition()
    
    // 頭の基本形
    for (let x = -4; x < 4; x++) {
        for (let y = 22; y < 28; y++) {
            for (let z = -4; z < 4; z++) {
                blocks.place(COBBLESTONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    // 目（少し不気味に）
    blocks.place(COAL_BLOCK, positions.add(agentPos, pos(-2, 25, 3)))
    blocks.place(COAL_BLOCK, positions.add(agentPos, pos(2, 25, 3)))
    
    // 鼻
    blocks.place(STONE, positions.add(agentPos, pos(0, 24, 4)))
    
    // 口（大きく開けた感じ）
    for (let x = -2; x < 2; x++) {
        for (let y = 22; y < 24; y++) {
            blocks.place(AIR, positions.add(agentPos, pos(x, y, 4)))
        }
    }
    
    // 歯
    blocks.place(QUARTZ_STAIRS, positions.add(agentPos, pos(-1, 24, 4)))
    blocks.place(QUARTZ_STAIRS, positions.add(agentPos, pos(1, 24, 4)))
    
    player.say("😱 巨人の頭完成！ちょっと怖い！")
})
```

### 6. 蒸気エフェクト
```javascript
player.onChat("titan_steam", function () {
    player.say("💨 巨人の蒸気を作ります...")
    
    let agentPos = agent.getPosition()
    
    // 体の周りに蒸気（雲ブロック風）
    for (let i = 0; i < 20; i++) {
        let randomX = Math.randomRange(-8, 8)
        let randomY = Math.randomRange(5, 25)
        let randomZ = Math.randomRange(-5, 5)
        
        blocks.place(WOOL, positions.add(agentPos, pos(randomX, randomY, randomZ)))
    }
    
    player.say("💨 蒸気エフェクト完成！リアル！")
})
```

## 🎮 巨人の種類別建築

### 7. 15m級巨人（標準サイズ）
```javascript
player.onChat("titan_15m", function () {
    player.say("🦣 15m級巨人を建築開始！")
    
    player.runChatCommand("titan_legs")
    loops.pause(2000)
    
    player.runChatCommand("titan_body")
    loops.pause(2000)
    
    player.runChatCommand("titan_arms")
    loops.pause(2000)
    
    player.runChatCommand("titan_head")
    loops.pause(2000)
    
    player.runChatCommand("titan_steam")
    
    player.say("🎉 15m級巨人完成！")
})
```

### 8. 巨大巨人（60m級）
```javascript
player.onChat("titan_colossal", function () {
    player.say("🏢 超大型巨人建設開始！")
    
    let agentPos = agent.getPosition()
    
    // 超巨大な脚
    for (let x = -10; x < -4; x++) {
        for (let y = 0; y < 30; y++) {
            for (let z = -4; z < 4; z++) {
                blocks.place(COBBLESTONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    for (let x = 4; x < 10; x++) {
        for (let y = 0; y < 30; y++) {
            for (let z = -4; z < 4; z++) {
                blocks.place(COBBLESTONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    // 超巨大な胴体
    for (let x = -8; x < 8; x++) {
        for (let y = 30; y < 50; y++) {
            for (let z = -6; z < 6; z++) {
                blocks.place(STONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    // 超巨大な頭
    for (let x = -6; x < 6; x++) {
        for (let y = 50; y < 60; y++) {
            for (let z = -6; z < 6; z++) {
                blocks.place(COBBLESTONE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    // 巨大な目
    blocks.place(COAL_BLOCK, positions.add(agentPos, pos(-3, 55, 5)))
    blocks.place(COAL_BLOCK, positions.add(agentPos, pos(3, 55, 5)))
    
    player.say("🏢 超大型巨人完成！町より大きい！")
})
```

## 🏃‍♂️ 巨人軍団

### 9. 巨人の群れ
```javascript
player.onChat("titan_horde", function () {
    player.say("🦣🦣🦣 巨人の群れ出現！")
    
    for (let i = 1; i <= 5; i++) {
        player.say(`${i}体目の巨人建設中...`)
        
        player.runChatCommand("titan_15m")
        loops.pause(8000)  // 建築完了を待つ
        
        // 次の巨人用にエージェントを移動
        if (i < 5) {
            agent.move(FORWARD, 20)
            loops.pause(1000)
        }
    }
    
    player.say("😱 巨人の群れ完成！町が襲われている！")
})
```

### 10. 壁の中の巨人
```javascript
player.onChat("wall_titans", function () {
    player.say("🧱 壁の中の巨人たち...")
    
    let agentPos = agent.getPosition()
    
    // 巨大な壁を作る
    for (let x = -50; x < 50; x++) {
        for (let y = 0; y < 40; y++) {
            for (let z = 0; z < 5; z++) {
                blocks.place(STONE_BRICKS, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    // 壁の中に巨人を配置
    for (let i = 0; i < 3; i++) {
        let titanX = -30 + (i * 30)
        
        // 壁に埋まった巨人の頭だけ見える
        for (let x = titanX - 3; x < titanX + 3; x++) {
            for (let y = 25; y < 35; y++) {
                for (let z = 2; z < 6; z++) {
                    blocks.place(COBBLESTONE, positions.add(agentPos, pos(x, y, z)))
                }
            }
        }
        
        // 目
        blocks.place(COAL_BLOCK, positions.add(agentPos, pos(titanX - 2, 30, 5)))
        blocks.place(COAL_BLOCK, positions.add(agentPos, pos(titanX + 2, 30, 5)))
    }
    
    player.say("🧱 壁の中の巨人完成！恐ろしい...！")
})
```

## 🎮 使い方

### ステップ1: 準備
```
setup_titan    # エージェントを配置・準備
```

### ステップ2: 巨人建築（種類を選択）

**標準の巨人:**
```
titan_15m      # 15m級巨人（一括建築）
```

**個別パーツ:**
```
titan_legs     # 脚
titan_body     # 胴体
titan_arms     # 腕
titan_head     # 頭
titan_steam    # 蒸気エフェクト
```

**特殊な巨人:**
```
titan_colossal # 超大型巨人（60m級）
titan_horde    # 巨人の群れ（5体）
wall_titans    # 壁の中の巨人
```

## 🌟 学習ポイント

- **スケール感** - 巨大建築の設計
- **人体構造** - 頭身バランスの理解
- **立体構造** - 3D での人型建築
- **特殊効果** - 蒸気や表情の表現
- **軍団制御** - 複数オブジェクトの管理

## 💡 カスタマイズアイデア

- **異常巨人** - 変わった形の巨人
- **鎧の巨人** - 装甲を追加
- **女型の巨人** - より細身に調整
- **巨人vs人類** - 戦闘シーンを再現
- **立体機動装置基地** - 巨人と戦う基地

## ⚠️ 注意事項

- **建築サイズが大きい** - 十分な空間を確保
- **巨人は動きません** - 静的な建築物
- **怖すぎないように調整済み** - 小学生向け
- **協力して作ろう** - 友達と一緒に建築推奨

壁の外には何があるのか...？ 巨人の謎に迫れ！🦣⚔️