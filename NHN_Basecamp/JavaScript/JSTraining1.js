'use strict';

// alert('Hello World!!!');

// (function () {
//     var myContentsEl = document.getElementById('myContents'); // getElementById, getElementsByTagName
//     console.log(myContentsEl.getElementsByTagName('a'));
// }) ();

(function () {
    var input = document.getElementById('test_input');
    var button = document.getElementById('test_button');
    var deletebutton = document.getElementsByClassName('delete_button');
    var list = document.getElementById('test_ul');

    todo()

    function addTodo() {
        var li = newTodo(input.value);
        list.appendChild(li);
        todo()
    }

    function deleteTodo() {
        var li = document.getElementsByClassName('delete_button');
        li[0].parentNode.removeChild();
    }

    function newTodo(text) {
        var li = document.createElement('li');
        // var checkbox = document.createElement('input');

        // li.appendChild(checkbox);
        // checkbox.type = 'checkbox'
        // checkbox.textContent = input.value;
        
        // li.appendChild(checkbox);
        li.innerHTML = `<input type="checkbox" /> ${text} <button>삭제</button>`;
        
        // Delete todo list
        li.querySelector('button').addEventListener('click', (ev) => {
            //ev.stopPropagation();
            li.parentNode.removeChild(li);
        });

        input.value = '';

        li.addEventListener(
            'click',
            (ev) => {
                var [liel] = li.getElementsByTagName('input');
                var hasInputClicked = ev.target === liel;

                if (!hasInputClicked) {
                    liel.checked = !liel.checked;
                }

                li.className = liel.checked ? 'complete' : '';
                todo()
            },
            false
        );

        li.getElementsByTagName('input')[0].addEventListener(
            'click',
            (ev) => {
                ev.stopPropagation();
            },
            false
        );

        return li;
        // list.appendChild(li);
    }

    function todo() {
        var p = document.getElementsByTagName('p')[0];
        var all = document.querySelectorAll('li').length;
        var completed = document.querySelectorAll('.complete').length;
        p.textContent = `전체 : ${all} / 활성 : ${all - completed} / 완료 : ${completed}`;
    }

    // input.addEventListener(
    //     'keypress', addTodo, false
    // )
    button.addEventListener(
        'click', addTodo, false
    )

    deletebutton.addEventListener(
        'click', deleteTodo, false
    )


    // button.addEventListener(
    //     "click",
    //     function() {
    //         // alert(input.value);
            
    //         var newList = document.createElement('li');
            
    //         newList.appendChild(input.value);
    //         list.appendChild(newList);
    //         // list.innerHTML += `<li>${input.value}</li>`;
    //     },
    //     false
    // );

    document.querySelector('#counter').addEventListener('click',
        (ev) => {
            switch(ev.target.id) {
                case 'complete': {
                    list.className = 'hideIncomplete';
                    break;
                }
                case 'incomplete': {
                    list.className = 'hideComplete';
                    break;
                }
                default: {
                    list.className = '';
                }
            }
        },
        false
    );
}) ();