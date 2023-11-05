$('#tab-contents .tab[id != "tab1"]').hide();　 //特定の要素と等しくない要素だけを取得。
    //id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示。
    
$('tab-menu a').on('click', function(e) {   //id="tab-menu"のaタグがクリックされたときに、処理を実行
    $("#tab-contents .tab").hide();     //id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
    $("#tab-menu .active").removeClass("active");   //タブを切り替えるときは、このCSS設定もいったん削除
    $(this).addClass("active"); //タブをクリックしたとき、HTML要素を取り出す（href属性）
    $($(this).attr("href")).show();　//取り出したhref属性の中身を表示
    event.preventDefault();
});