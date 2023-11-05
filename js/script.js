$('#tab-contents .tab[id != "tab1"]').hide();　 //特定の要素と等しくない要素だけを取得。
    //id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示。
    
$('#tab-menu a').on('click', function(e) {   //id="tab-menu"のaタグがクリックされたときに、処理を実行
    $("#tab-contents .tab").hide();     //id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
    $("#tab-menu .active").removeClass("active");   //タブを切り替えるときは、activeクラスを解除
    $(this).addClass("active"); //タブをクリックするというイベントが発生した時に、activeクラスを追加
    $($(this).attr("href")).show();　//href要素を取り出し、取り出したhref属性の中身を表示
    event.preventDefault();
});