<template>
<div class="content-wrapper" style="min-height: 685px">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            <small></small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> 主页</a></li>
            <li><router-link to="/project/list"> 项目列表</router-link></li>
            <li class="active">新增项目</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">新增项目</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->

                <div role="form" style="margin-left: 20px;">
                    <div class="box-body">

                        <div class="row">
                            <div class="col-md-6">
                                <div :class="{'form-group':true, 'has-error':errors.has('项目名称')}">
                                    <label for="project_name">项目名称</label>
                                    <input name="项目名称" v-validate="'required|alpha_dash'" :class="{'input': true, 'is-danger': errors.has('项目名称') }" class="form-control" id="project_name" placeholder="请输入 项目名称" v-model="project_name" initial="off">
                                    <span v-show="errors.has('项目名称')" class="help-block is-danger"><small>{{errors.first('项目名称')}}</small></span>
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
                                        <input type="text" class="form-control pull-right" id="reservation" v-model="time">
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
                                                <input type="text" class="form-control pull-right" id="male_price" v-model="male_price">
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label for="female_price">女基础价格</label>
                                                <input type="text" class="form-control pull-right" id="female_price" v-model="female_price">
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
                                    <textarea name="备注" class="form-control" rows="3" placeholder="备注 ..." v-validate="'required'" v-model="remarks" initial="off"></textarea>
                                    <p class="text-red" v-show="errors.has('备注')"><small>备注不能为空!</small></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- /.box-body -->

                    <div class="box-footer">
                        <button class="btn btn-primary" @click="data_request">新 增</button>
                    </div>
                </div>

        </div>

    </section>
    <!-- /.content -->
</div>
</template>
<style>
    @import url('/static/plugins/daterangepicker/daterangepicker.css');
</style>
<script>
    export default{
        mounted(){
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
                project_name :'',
                type :1, // 项目类型：1-地推，2-线上推广，3-线下活动
                remarks :'', // 备注
                time :'',
                male_price :10,
                female_price :10
            }
        },
        methods:{
            data_request(){
                let self = this;
                let params = {};
                params.project_name = this.project_name;
                params.type = this.type;
                params.remarks = this.remarks;
                params.male_price = this.male_price;
                params.female_price = this.female_price;
                params.start_time = this.start_time;
                params.end_time = this.end_time;

                this.$validator.validateAll().then(() => {
                    alert('提交成功！')
                }).catch(() => {

                });
            }
        }
    }
</script>