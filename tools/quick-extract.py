#!/usr/bin/env python3
"""
.mkcdファイルからJavaScriptコードを抽出するツール
"""
import zipfile
import os
import sys
import json

def extract_from_mkcd(mkcd_path):
    """mkcdファイルからTypeScript/JavaScriptコードを抽出"""
    try:
        with zipfile.ZipFile(mkcd_path, 'r') as zip_ref:
            files = zip_ref.namelist()
            
            print(f"📁 アーカイブ内容: {files}")
            
            # main.ts または main.js を探す
            target_file = None
            if 'main.ts' in files:
                target_file = 'main.ts'
                print("✅ main.ts を発見")
            elif 'main.js' in files:
                target_file = 'main.js'
                print("✅ main.js を発見")
            
            if target_file:
                content = zip_ref.read(target_file).decode('utf-8')
                return content, target_file
            else:
                print("⚠️ main.ts/main.js が見つかりません")
                
                # 他のファイルも確認
                for file in files:
                    if file.endswith('.ts') or file.endswith('.js'):
                        print(f"📄 TypeScript/JSファイル発見: {file}")
                        content = zip_ref.read(file).decode('utf-8')
                        return content, file
                
                return None, None
                
    except Exception as e:
        print(f"❌ エラー: {e}")
        return None, None

def main():
    if len(sys.argv) != 2:
        print("使用方法: python3 tools/quick-extract.py <mkcd_file>")
        return
    
    mkcd_file = sys.argv[1]
    if not os.path.exists(mkcd_file):
        print(f"❌ ファイルが見つかりません: {mkcd_file}")
        return
    
    print(f"🔍 抽出開始: {mkcd_file}")
    print("=" * 50)
    
    content, source_file = extract_from_mkcd(mkcd_file)
    
    if content:
        print(f"✅ 抽出成功! ({source_file})")
        print("=" * 50)
        print(content)
        print("=" * 50)
        print("👆 このコードをJavaScriptファイルにコピーしてください")
    else:
        print("❌ コード抽出に失敗しました")

if __name__ == "__main__":
    main()
