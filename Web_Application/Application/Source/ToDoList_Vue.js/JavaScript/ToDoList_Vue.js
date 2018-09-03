//----入力文字カウント 開始----
new Vue({
    el: '#vue',
    data: {
        TextInput: ''
    },
//----入力文字カウント 終了----
//----要素の追加 開始----
    methods: { 
        InsertClick: function () {
            if(this.TextInput == '') return;
        
            var p = document.createElement('p');
        
            p.innerHTML = this.TextInput;
        
            var addtodolist = document.getElementById('todolist');
        
            addtodolist.appendChild(p);
        }
    }
})
//----要素の追加 終了----