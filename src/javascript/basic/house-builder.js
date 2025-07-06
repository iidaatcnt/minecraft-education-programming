/**
 * 🏠 House Builder - 自動家建設プログラム
 * 
 * @description 小学5年生向けプログラミング教材
 * @learning_objectives 座標系、fill関数、基本建築
 * @difficulty ⭐ (初級)
 * @chat_command house
 * @original_file minecraft-house-sample.mkcd
 */

player.onChat("house", function () {
    // プレイヤーの位置を取得
    let startPos = player.position()
    
    // 📝 学習ポイント: 3次元座標系の理解
    
    // 🏗️ 土台の作成 (10×10の石ブロック)
    blocks.fill(
        STONE,
        startPos,
        startPos.add(positions.create(9, 0, 9)),
        FillOperation.Replace
    )
    
    // 🏗️ 外壁の建設 (高さ5ブロック)
    blocks.fill(
        COBBLESTONE,
        startPos.add(positions.create(0, 1, 0)),
        startPos.add(positions.create(9, 4, 9)),
        FillOperation.Replace
    )
    
    // 🏗️ 内部を空洞化
    blocks.fill(
        AIR,
        startPos.add(positions.create(1, 1, 1)),
        startPos.add(positions.create(8, 3, 8)),
        FillOperation.Replace
    )
    
    // 🚪 ドアの作成
    blocks.place(AIR, startPos.add(positions.create(4, 1, 0)))
    blocks.place(AIR, startPos.add(positions.create(4, 2, 0)))
    
    // 🪟 窓の設置
    blocks.place(GLASS, startPos.add(positions.create(2, 2, 0)))
    blocks.place(GLASS, startPos.add(positions.create(6, 2, 0)))
    
    player.say("🏠 家が完成しました！")
})

// 📚 使用方法:
// 1. Minecraft Education Edition → Code Builder
// 2. このファイルの内容をコピー&ペースト
// 3. チャットで "house" を実行

// 🎯 変換ステータス: ✅ 変換完了（手動実装）
