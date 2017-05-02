<template>
    <div id="pagination-container">
        <span class="pagination-end">共{{total}}页</span>
        <ul class="pagination">
            <li class="arrow"><a @click="back">«</a>
            </li>
            <li v-for="i in page_num" @click="page(i)" class="page_no" :id="'page_n0_'+i"><a >{{i}}</a>
            </li>
            <li class="arrow"><a @click="next">»</a>
            </li>
        </ul>
        <span class="pagination-front">当前第{{index}}页</span>
    </div>
</template>
<style>
    .pagination-front{
        float: right;
        margin: 3px 5px 0 0;
    }
    .pagination-end{
        float: right;
        margin: 3px 0 0 5px;
    }
    .pagination{
        float: right;
        margin: -3px 5px;
    }
</style>
<script>

    export default{
        data(){
            return{
                page_num:[],
                size:10,
                from:1
            }
        },
        props:{
            index:{
                type:Number,
                required: true
            },
            total:{
                type:Number,
                required: true
            }
        },
        computed:{
            page_num(){
                let page_num = [];
                for(var i=0;i < this.total;i++){
                    page_num.push(i+1);
                }
                return page_num;
            }
        },
        methods:{
            back(){
                if(this.from - this.size <= 0){
                    this.from = 1
                }else {
                    this.from -= this.size;
                }
            },
            next(){
                if(this.from + this.size >= this.page_num.length){
                    this.from = (this.page_num.length - this.size)+1;
                }else {
                    this.from += this.size;
                }
            },
            page(index){
                this.$dispatch('jump_page',index); //向父子派发跳页事件,并把页码作为参数
                this.index = index;
                if((index - parseInt(this.size / 2)) <= 0){
                    this.from = 1
                }else {
                    this.from = index - parseInt(this.size /2 );
                }
                let page_nos = document.getElementsByClassName('page_no');
                for (let i of page_nos){
                    if(i.id == 'page_n0_'+index){
                        i.setAttribute("class","page_no active");
                    }else {
                        i.setAttribute("class","page_no");
                    }
                }
            }
        }

    }
</script>