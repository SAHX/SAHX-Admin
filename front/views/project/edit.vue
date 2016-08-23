<template xmlns:v-validate="http://www.w3.org/1999/xhtml">
    <div class="content-wrapper" style="min-height: 685px">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                <small></small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> 主页</a></li>
                <li><a v-link="'/project/list'"> 项目列表</a></li>
                <li class="active">项目编辑</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <validator name="validation1">
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">项目编辑</h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->
                    <form role="form" style="margin-left: 20px">
                        <div class="box-body">

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="project_name">项目名称</label>
                                        <input type="text" class="form-control" id="project_name" placeholder="请输入 项目名称"
                                               v-model="project_name" initial="off"
                                               v-validate:project_name="['required']">

                                        <p class="text-red" v-if="$validation1.project_name.required">
                                            <small>项目名称不能为空!</small>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>时间范围</label>
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-calendar"></i>
                                            </div>

                                            <input type="text" class="form-control pull-right" id="reservation"
                                                   v-model="time" value="{{r_start_time|time_format_y_m_d}} - {{r_end_time|time_format_y_m_d}}">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="project_type">项目类型</label>
                                        <select name="" id="project_type" class="form-control" v-model="type">
                                            <option :value="1">地推</option>
                                            <option :value="2">线上推广</option>
                                            <option :value="3">线下活动</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="male_price">男基础价格</label>
                                                    <input type="text" class="form-control pull-right" id="male_price"
                                                           v-model="male_price">
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="female_price">女基础价格</label>
                                                    <input type="text" class="form-control pull-right" id="female_price"
                                                           v-model="female_price">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>备注</label>
                                        <textarea class="form-control" rows="3" placeholder="备注 ..." v-model="remarks"
                                                  initial="off" v-validate:remarks="['required']"></textarea>
                                        <p class="text-red" v-if="$validation1.remarks.required">
                                            <small>备注不能为空!</small>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="box-footer">
                                <button type="submit" class="btn btn-primary">保 存</button>
                            </div>

                            <br>
                            <br>
                            <div class="form-group">
                                <div class="box ">
                                    <div class="box-header with-border">
                                        <h4 class="box-title">规则定制</h4>
                                    </div>
                                    <!-- /.box-header -->
                                    <div class="box-body">
                                        <div class="row">

                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="province">省份</label>
                                                    <select name="" id="province" class="form-control" v-model="province_name" @change="get_school">
                                                        <option v-for="i in provinces" :value="i.province_name">{{i.province_name}}</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <table class="table table-bordered">
                                            <tbody>
                                            <tr>
                                                <th>学校</th>
                                                <th>男基础价格</th>
                                                <th>女基础价格</th>
                                                <th>自定义规则</th>
                                            </tr>
                                            <tr v-for="i in university_list">
                                                <td>{{i.university_name}}</td>
                                                <td>{{i.male_price}}</td>
                                                <td>{{i.female_price}}</td>

                                                <td v-if="i.rules">
                                                    <div class="row">
                                                        <div class="col-sm-10">
                                                            <ul>
                                                                <li v-for="n in i.rules">{{n.rule_description}}</li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <button class="btn btn-xs btn-success" data-toggle="modal"
                                                                    data-target="#myModal" @click="to_edit_university(i.university_id,i.university_name)">编辑
                                                            </button>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td v-else>无 &nbsp;
                                                    <button class="btn btn-xs btn-success" data-toggle="modal"
                                                            data-target="#myModal"
                                                            @click="to_edit_university(i.university_id,i.university_name)">
                                                        编辑
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="myModal" tabindex="-1" role="dialog"
                                 aria-labelledby="myModalLabel">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span></button>
                                            <h4 class="modal-title" id="myModalLabel">{{to_edit_university_name}}-自定义规则</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="box-body">
                                                <table class="table table-bordered">
                                                    <tbody>
                                                    <tr>
                                                        <th>规则</th>
                                                        <th>操作</th>
                                                    </tr>
                                                    <tr v-for="i in to_edit_university_rules">
                                                        <td>{{i.rule_description}}</td>
                                                        <td>
                                                            <button class="btn btn-xs btn-danger" @click="delete_price_rule(i.rule_id)">删除
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <br>
                                            <select name="" style="width: 90px" v-model="type_id">
                                                <option v-for="i in price_rule_type" :value="i.type_id">{{i.type_name}}</option>
                                            </select>
                                            从
                                            <input type="text" style="width: 50px" v-model="rule_min">
                                            到
                                            <input type="text" style="width: 50px" v-model="rule_max">
                                            的
                                            <select name="" style="width: 60px" v-model="sex">
                                                <option :value="1">男生</option>
                                                <option :value="0">女生</option>
                                            </select>
                                            价格为
                                            <input type="text" style="width: 50px" v-model="rule_price">
                                            元
                                            &nbsp;&nbsp;
                                            <button class="btn btn-xs btn-success" @click="add_price_rule">添加
                                            </button>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">取消
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.box-body -->


                    </form>
                </div>
            </validator>
        </section>
        <!-- /.content -->
    </div>
</template>
<style>
    @import url('/static/plugins/daterangepicker/daterangepicker.css');
</style>
<script>
    import time_format_y_m_d from '../../filters/time_format_y_m_d'
    export default{
        filters:{
            time_format_y_m_d
        },
        ready(){
            $.getScript('/static/plugins/daterangepicker/moment.min.js').done(function () {
                })
                .fail(function () {
                    console.log('js加载出错了');
                });
            $.getScript('/static/plugins/daterangepicker/daterangepicker.js').done(function () {
                    $('#reservation').daterangepicker();
                })
                .fail(function () {
                    console.log('js加载出错了');
                });
            this.data_request();
            this.get_provice();
            this.get_school();
            this.get_price_rule_type();
        },
        computed:{
            start_time(){
                return Math.round(new Date(this.time.substring(0,this.time.indexOf(' - '))).getTime()/1000)
            },
            end_time(){
                return Math.round(new Date(this.time.substr(this.time.indexOf(' - '))).getTime()/1000)
            }
        },
        data(){
            return{
                project_id:this.$route.params.project_id,
                project_name :'',
                type :0, // 项目类型：1-地推，2-线上推广，3-线下活动
                remarks :'', // 备注
                time:'',
                male_price :10, // 男性基础价格
                female_price :10, // 女性基础价格
                provinces:[], // 省份数据
                province_name:'北京', // 被选中的省份
                university_list:[], // 该省份下的学校

                price_rule_type:[], // 价格规则类型
                type_id:1,
                sex:1,
                rule_min:'',
                rule_max:'',
                rule_price:'',
                description:'',

                to_edit_university_id:'',
                to_edit_university_name:'',
                to_edit_university_rules:[]


            }
        },
        methods:{
            data_request(){
                let self = this;

                let params = {};

                params.project_id = this.project_id;

                oam_req(1, params, function (data) {

                })
            },
            get_provice(){
                let self = this;
                let params = {};
                oam_req(1, params, function (data) {
                })
            },
            get_school(){
                let self = this;
                let params = {};
                params.project_id = this.project_id;
                params.university_name = '';
                params.province_name = this.province_name;
                oam_req(1, params, function (data) {
                })
            },
            get_price_rule_type(){
                let self = this;
                let params = {};
                oam_req(1, params, function (data) {
                })
            },
            to_edit_university(university_id,university_name){
                this.to_edit_university_id = university_id;
                this.to_edit_university_name = university_name;
                this.get_price_rule()
            },
            get_price_rule(){
                let self = this;
                let params = {};
                params.project_id = this.project_id;
                params.university_name = this.to_edit_university_name;
                params.province_name = this.province_name;

                oam_req(1, params, function (data) {

                })
            },
            add_price_rule(){
                let self = this;
                let params = {};

                if(!(this.rule_min && this.rule_max)){
                    alert('每项不能为空!');
                    return;
                }

                this.price_rule_type.some(function(value){
                    if(value.type_id == self.type_id){
                        if(self.sex){
                            self.description = value.type_name + '从' + self.rule_min + '到' + self.rule_max + '的男生价格为' + self.rule_price + '元';
                        }else {
                            self.description = value.type_name + '从' + self.rule_min + '到' + self.rule_max + '的女生价格为' + self.rule_price + '元';
                        }
                        return true;
                    }else {
                        return false;
                    }
                });

                params.project_id = this.project_id;
                params.university_id = this.to_edit_university_id;
                params.type_id = this.type_id;
                params.sex = this.sex;
                params.rule_min = parseInt(this.rule_min);
                params.rule_max = parseInt(this.rule_max);
                params.price = parseInt(this.rule_price);
                params.description = this.description;

                oam_req(1, params, function (data) {
                    if(data.common.code == 0){
                        self.type_id = 1;
                        self.sex = 1;
                        self.rule_min = '';
                        self.rule_max = '';
                        self.rule_price = '';
                        self.description = '';
                        self.get_price_rule();
                        self.get_school();
                    }else {
                        alert('添加失败,请重试!')
                    }
                })
            },
            delete_price_rule(rule_id){
                let self = this;
                let params = {};
                params.rule_id = rule_id;
                oam_req(1, params, function (data) {
                    if(data.common.code == 0){
                        self.get_price_rule();
                        self.get_school();
                    }else {
                        alert('删除失败,请重试!')
                    }

                })
            }
        },
        components:{

        }
    }
</script>