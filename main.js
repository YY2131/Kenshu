// Vue インスタンスの生成
var vm = new Vue({
    el: '#Vue', //データバインディングの対象となる、DOM要素を指定
    data: {
    },
    mounted(){
    },
      methods: {}
    })
    addtido:function(event){
        if (this.input){
            this.todos.push(title: this.input,done:false});
this.input=''
this.setTodos()
        }
        }
    }
    Vue.component('todo-item', {
        template: '\
          <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">Remove</button>\
          </li>\
        ',
        props: ['title']
      })
      
      new Vue({
        el: '#todo-list-example',
        data: {
          newTodoText: '',
          todos: [
            {
              id: 1,
              title: 'Do the dishes',
            },
            {
              id: 2,
              title: 'Take out the trash',
            },
            {
              id: 3,
              title: 'Mow the lawn'
            }
          ],
          nextTodoId: 4
        },
        methods: {
          addNewTodo: function () {
            this.todos.push({
              id: this.nextTodoId++,
              title: this.newTodoText
            })
            this.newTodoText = ''
          }
        }
      })

