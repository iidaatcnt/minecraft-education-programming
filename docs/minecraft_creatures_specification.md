# マインクラフト教育版 巨大生物建築システム - 技術仕様書

## 📋 プロジェクト概要

### 1.1 目的
小学生向けマインクラフト教育版で、ドラゴンと巨人を自動建築するプログラミング学習システム

### 1.2 対象プラットフォーム
- **Minecraft Education Edition**
- **MakeCode for Minecraft** (Block/JavaScript)

### 1.3 学習目標
- 3D座標系の理解
- ループ・条件分岐の習得
- エージェント制御の体験
- 大規模プロジェクトの段階的開発

---

## 🔧 技術要件

### 2.1 開発環境
```
プラットフォーム: MakeCode for Minecraft
言語: JavaScript (TypeScript互換)
対象年齢: 小学生 (8-12歳)
実行環境: Minecraft Education Edition
```

### 2.2 使用可能API
```javascript
// 基本ブロック配置
blocks.place(blockType, position)

// エージェント制御
agent.teleportToPlayer()
agent.move(direction, steps)
agent.getPosition()

// 座標操作
pos(x, y, z)
positions.add(basePos, offsetPos)

// チャットコマンド
player.onChat(command, callback)

// 制御フロー
loops.pause(milliseconds)
Math.randomRange(min, max)
```

### 2.3 使用ブロック一覧
```javascript
// 基本ブロック
STONE, COBBLESTONE, STONE_BRICKS
WOOL, GOLD_BLOCK, DIAMOND_BLOCK, EMERALD_BLOCK
GLOWSTONE, COAL_BLOCK
AIR

// 特殊ブロック（エラー回避済み）
blocks.blockById(35)  // ウール
blocks.blockById(54)  // チェスト
blocks.blockById(168) // プリズマリン
```

---

## 🏗️ アーキテクチャ設計

### 3.1 座標系設計
```
基準点システム: エージェント位置ベース
座標系: 右手座標系 (X:東西, Y:上下, Z:南北)
建築スケール: 1ブロック = 1メートル相当

エージェント基準の相対座標:
- X軸: 負(-) = 西, 正(+) = 東
- Y軸: 負(-) = 下, 正(+) = 上  
- Z軸: 負(-) = 北, 正(+) = 南
```

### 3.2 建築システム設計
```
Phase 1: エージェント配置 (setup_*)
Phase 2: パーツ別建築 (*_body, *_head, etc.)
Phase 3: 統合建築 (*_creature_name)
Phase 4: 特殊機能 (*_army, *_circle)
```

---

## 🐉 ドラゴン建築仕様

### 4.1 ドラゴン基本仕様
```
全長: 約30ブロック
高さ: 約15ブロック  
幅: 約25ブロック (翼含む)
探検可能: Yes (口→通路→宝物庫)
```

### 4.2 ドラゴンパーツ仕様

#### 4.2.1 胴体 (dragon_body)
```javascript
サイズ: 8×6×15 ブロック
材質: STONE
座標範囲: (-4,0,-10) to (4,6,5)
特徴: 楕円形の基本構造
```

#### 4.2.2 頭部 (dragon_head)  
```javascript
サイズ: 6×4×8 ブロック
材質: COBBLESTONE
座標範囲: (-3,1,5) to (3,5,13)
特徴: 光る目 (GLOWSTONE at (-2,4,12), (2,4,12))
```

#### 4.2.3 翼 (dragon_wings)
```javascript
左翼: (-10,2,-3) to (-4,8,3)
右翼: (4,2,-3) to (10,8,3)  
材質: WOOL
特徴: 対称構造
```

#### 4.2.4 体内システム
```javascript
口: (-2,1,10) to (2,4,14) - AIR
通路: (-1,1,-1) to (2,3,10) - AIR  
宝物庫: (-3,1,-8) to (3,5,-1) - AIR
宝物配置: GOLD_BLOCK, DIAMOND_BLOCK, EMERALD_BLOCK
```

### 4.3 ドラゴン複数建築仕様
```javascript
dragon_army: 3体直線配置 (25ブロック間隔)
dragon_circle: 8体円形配置 (半径30ブロック)
rainbow_dragons: 5体カラー別配置 (20ブロック間隔)
```

---

## 🦣 巨人建築仕様

### 5.1 巨人基本仕様
```
15m級: 高さ28ブロック
60m級: 高さ60ブロック
幅: 約16ブロック
探検可能: No (外観のみ)
```

### 5.2 巨人パーツ仕様

#### 5.2.1 脚部 (titan_legs)
```javascript
左脚: (-6,0,-2) to (-2,12,2)
右脚: (2,0,-2) to (6,12,2)
材質: COBBLESTONE
特徴: 太く安定した構造
```

#### 5.2.2 胴体 (titan_body)
```javascript
サイズ: 10×10×6 ブロック
座標範囲: (-5,12,-3) to (5,22,3)
材質: STONE (基本), COBBLESTONE (筋肉部)
特徴: 胸筋の突起 (2,18,2) to (4,21,4)
```

#### 5.2.3 腕部 (titan_arms)  
```javascript
左腕: (-8,15,-2) to (-5,21,2)
左手: (-10,13,-2) to (-8,16,2)
右腕: (5,15,-2) to (8,21,2)  
右手: (8,13,-2) to (10,16,2)
材質: STONE (腕), COBBLESTONE (手)
```

#### 5.2.4 頭部 (titan_head)
```javascript
サイズ: 8×6×8 ブロック
座標範囲: (-4,22,-4) to (4,28,4)
材質: COBBLESTONE
目: COAL_BLOCK at (-2,25,3), (2,25,3)
口: (-2,22,4) to (2,24,4) - AIR
```

### 5.3 巨人特殊仕様
```javascript
titan_colossal: 60m級 (2倍スケール)
titan_horde: 5体直線配置 (20ブロック間隔)
wall_titans: 壁構造 + 埋込み巨人 (100×40×5 壁)
titan_steam: ランダム蒸気エフェクト (20個のWOOL)
```

---

## 🎮 コマンドAPI仕様

### 6.1 共通コマンド
```javascript
setup_dragon    // ドラゴン建築用エージェント準備
setup_titan     // 巨人建築用エージェント準備
test           // 動作確認用テストコマンド
```

### 6.2 ドラゴンコマンド
```javascript
// 個別パーツ
dragon_body     // 胴体建築
dragon_head     // 頭部建築  
dragon_wings    // 翼建築
dragon_mouth    // 口（入り口）建築
dragon_tunnel   // 体内通路建築
dragon_treasure // 宝物庫建築
dragon_tail     // 尻尾建築

// 統合建築
dragon          // 完全ドラゴン建築
dragon_quick    // 簡略版ドラゴン建築

// 複数建築
dragon_army     // 3体直線配置
dragon_circle   // 8体円形配置  
rainbow_dragons // 5体カラー配置
```

### 6.3 巨人コマンド
```javascript
// 個別パーツ
titan_legs      // 脚部建築
titan_body      // 胴体建築
titan_arms      // 腕部建築  
titan_head      // 頭部建築
titan_steam     // 蒸気エフェクト

// 統合建築
titan_15m       // 15m級巨人建築
titan_colossal  // 60m級巨人建築

// 複数建築  
titan_horde     // 5体群れ建築
wall_titans     // 壁内巨人建築
```

---

## 🔄 実装パターン

### 7.1 基本建築パターン
```javascript
function buildPart(partName) {
    player.say(`${partName}を作り始めます...`)
    
    let agentPos = agent.getPosition()
    
    // 建築ループ
    for (let x = minX; x < maxX; x++) {
        for (let y = minY; y < maxY; y++) {
            for (let z = minZ; z < maxZ; z++) {
                blocks.place(BLOCK_TYPE, positions.add(agentPos, pos(x, y, z)))
            }
        }
    }
    
    player.say(`${partName}完成！`)
}
```

### 7.2 統合建築パターン
```javascript
function buildFullCreature(creatureName) {
    player.say(`${creatureName}建設開始！`)
    
    let parts = ["part1", "part2", "part3"]
    
    for (let part of parts) {
        player.runChatCommand(part)
        loops.pause(1500)  // 建築間隔
    }
    
    player.say(`${creatureName}完成！`)
}
```

### 7.3 複数建築パターン
```javascript
function buildMultiple(creatureType, count, spacing) {
    for (let i = 1; i <= count; i++) {
        player.say(`${i}体目の${creatureType}建築中...`)
        
        player.runChatCommand(`${creatureType}_quick`)
        loops.pause(buildTime)
        
        if (i < count) {
            agent.move(FORWARD, spacing)
            loops.pause(1000)
        }
    }
}
```

---

## 🚨 エラーハンドリング

### 8.1 既知の制限事項
```javascript
// 使用不可能なAPI
player.getPosition()     // → エージェント基準で回避
positions.add(playerPos) // → agent.getPosition()使用
QUARTZ_BLOCK            // → WOOL等で代替
```

### 8.2 エラー回避パターン
```javascript
// ブロック存在確認
if (blocks.blockById(ID)) {
    blocks.place(blocks.blockById(ID), position)
} else {
    blocks.place(WOOL, position)  // フォールバック
}

// エージェント位置確認
try {
    let agentPos = agent.getPosition()
    // 建築処理
} catch (error) {
    player.say("エージェントを準備してください (setupコマンド)")
}
```

### 8.3 推奨事前チェック
```javascript
// 1. エージェント準備確認
// 2. 十分な建築空間確認
// 3. テストコマンドでの動作確認
```

---

## 📊 パフォーマンス仕様

### 9.1 建築時間
```
ドラゴン個別パーツ: 1-3秒
ドラゴン完全版: 約10秒
巨人個別パーツ: 2-4秒  
巨人完全版: 約8秒
軍団建築: 30-60秒
```

### 9.2 メモリ使用量
```
単体建築: 軽量 (リアルタイム実行)
複数建築: 中程度 (ループ処理)
大規模建築: 重 (巨大構造物)
```

### 9.3 推奨設定
```
建築間隔: 1500ms (安定性重視)
エージェント移動: 1000ms待機
複数建築: 6000-8000ms間隔
```

---

## 🎯 テスト仕様

### 10.1 基本動作テスト
```javascript
// Phase 1: 環境テスト
test              // ブロック配置テスト
setup_dragon      // エージェント配置テスト
setup_titan       // エージェント配置テスト

// Phase 2: 個別パーツテスト  
dragon_head       // ドラゴン頭部テスト
titan_legs        // 巨人脚部テスト

// Phase 3: 統合テスト
dragon            // ドラゴン完全テスト
titan_15m         // 巨人完全テスト
```

### 10.2 回帰テスト項目
```
✓ コマンド認識
✓ エージェント位置取得  
✓ ブロック配置実行
✓ 建築完了メッセージ
✓ 複数実行での位置精度
✓ 探検可能性（ドラゴンのみ）
```

---

## 🔮 拡張仕様

### 11.1 新生物追加パターン
```javascript
// テンプレート構造
function newCreatureTemplate() {
    // 1. setup_[creature] - エージェント準備
    // 2. [creature]_[part] - パーツ別建築
    // 3. [creature] - 統合建築  
    // 4. [creature]_army - 複数建築
}
```

### 11.2 拡張可能な要素
- **新しい生物** (恐竜、ロボット等)
- **新しい機能** (アニメーション、音効)
- **新しい配置** (螺旋、格子状等)
- **新しい素材** (カラーバリエーション)

### 11.3 教育機能拡張
- **段階的ヒント機能**
- **座標表示機能**  
- **建築過程解説機能**
- **協調建築機能**

---

## 📚 参考資料

### 12.1 MakeCode for Minecraft公式
- API仕様: https://makecode.microbit.org/
- ブロック一覧: Minecraft Education Edition公式

### 12.2 座標系参考
- Minecraft座標系: Y軸上向き右手座標系
- 建築スケール: 人間身長 ≈ 2ブロック

### 12.3 学習リソース
- ループ処理: for文による反復建築
- 条件分岐: 形状に応じたブロック選択
- 関数設計: 再利用可能なパーツ設計

---

## ✅ 実装チェックリスト

### Phase 1: 基本実装
- [ ] エージェント制御システム
- [ ] 基本建築ループ実装
- [ ] ドラゴンパーツ実装
- [ ] 巨人パーツ実装

### Phase 2: 統合実装  
- [ ] 統合建築コマンド
- [ ] エラーハンドリング
- [ ] 性能最適化
- [ ] テスト体系

### Phase 3: 高度機能
- [ ] 複数建築システム
- [ ] 特殊エフェクト
- [ ] カスタマイズ機能
- [ ] 教育支援機能

---

*この仕様書により、新しいチャットでも同等のドラゴン・巨人建築システムを再実装できます。*