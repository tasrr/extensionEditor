# extensionEditor

★インストール<br>
<br>
右上の Code から zipダ ウンロード<br>
解凍してできた<br>
extensionEditor.js ファイルを<br>
stable-diffusion-webui\javascript\ フォルダに移動<br>
<br>
extensionEditor フォルダを<br>
stable-diffusion-webui\extensions\ フォルダに移動<br>
<br>
AUTOMATIC1111を再起動<br>
左上の OPEN ExtensionEditor ボタン押下で開始<br>
<br>
★アンインストール<br>
<br>
左下のボタン押下で<br>
このツールで作ったローカルストレージデータ削除<br>
その後<br>
javascript フォルダの extensionEditor.js と<br>
extensions フォルダの extensionEdito フォルダを削除<br>
<br>
★セーブ<br>
<br>
オートセーブ<br>
データは各PCのローカルストレージに保存<br>
<br>
たまにバックアップファイル保存おすすめ<br>
現在の作業環境丸ごとファイルに保存<br>
<br>
★コメント<br>
<br>
ラインコメント<br>
// あいうえお<br>
<br>
エリアコメント<br>
/*<br>
あいうえお<br>
かきくけこ<br>
*/<br>
<br>
翻訳文字列<br>
`あいうえお`<br>
<br>
コメント部分とバックダッシュで囲まれた翻訳文字列は<br>
1111に送るときに削除<br>
<br>
波括弧 { } しかない行も削除<br>
<br>
<br>
★オートコンプリート<br>
<br>
数文字打ち込んでから CTRL+SPACE で候補表示<br>
日本語から英単語も可<br>
<br>
頻繁に使いそうな単語だけ分類を入れたので<br>
「：体位」（：は全角） CTRL+SPACE で<br>
ある程度の候補が表示<br>
<br>
分類名一覧<br>
：表情<br>
：ポーズ<br>
：画風<br>
：品質<br>
：構図視点<br>
：シチュ<br>
：体位<br>
：BDSM<br>
：射精<br>
：髪型<br>
：視線<br>
：効果<br>
：背景<br>
<br>
<br>
★左の日本語タグ付けボタン<br>
<br>
メインとネガティブを1行単位でチェックして<br>
知ってるタグなら後ろに日本語文字列追加<br>
知らない単語は何もつきません<br>
<br>
タグデータは tagsEnJa.txt ファイル<br>
３分の２は sankaku の日本語翻訳から<br>
残りは Google 翻訳なので微妙な翻訳も<br>
<br>
自分で単語追加は<br>
tagsEnJa.txt 開いて<br>
英語タグと日本語翻訳をバックダッシュ4つ(````)で繋いで<br>
行末に追加<br>
<br>
例<br>
abcde````あいうえお<br>
<br>
<br>
★ブロック閉じる　開けるボタン<br>
<br>
Ace エディタの便利機能<br>
無理に使わなくても平気です<br>
<br>
()[]{}/**/が複数行に跨るときブロック扱い<br>
行番号の横の小さな三角形で開け閉め可能<br>
作業するときに開いたり閉じたりして見やすく<br>
例　<br>
{<br>
あいうえお<br>
}<br>
/*<br>
あいうえお<br>
*/<br>
<br>
使うのは1111で記号として採用されてない<br>
{ } か/* */が無難<br>
<br>
上のボタンで全ブロックの一括開け閉め<br>
<br>
<br>
★右の自由帳<br>
<br>
ただのメモエリア<br>
何を書いても平気<br>
自分用テンプレートやよく使うタグのメモにでも<br>
<br>
<br>
<br>
動作確認は 現状chrome のみ<br>
<br>









