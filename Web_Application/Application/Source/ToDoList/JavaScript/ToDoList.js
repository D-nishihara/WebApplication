//テキストボックスの文字数を取得しHTMLに反映
//----------ここから----------
window.addEventListener('DOMContentLoaded',
    function () {
    
    var textnode = document.getElementById('textbox');
    
    textnode.addEventListener('keyup', function () {
        
        var count = this.value.length;
        
        var input = document.getElementById('inputlength');
        
        input.innerHTML = count;
    });
});
//----------ここまで----------

//登録ボタン押下時にテキストボックスの内容を動的に追加
//----------ここから----------
document.getElementById('insert').onclick = function() {
    var textnode = document.getElementById('textbox');
    
    var textinput = textnode.value;
    
    if(textinput != null){
        var p = document.createElement('p');
        
        p.innerHTML = textinput;
        
        var addtodolist = document.getElementById('todolist');
        
        addtodolist.appendChild(p);
    };
};
//----------ここまで----------