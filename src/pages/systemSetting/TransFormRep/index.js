import React,{Fragment,Component} from 'react';
import { message,Form,Card, Table, Input, Button, DatePicker } from 'antd';
import {connect} from 'react-redux';
import {actionCreators, actionTypes} from './store';
import {withRouter} from 'react-router-dom';
import { compose } from "redux";

class TransFormSys extends Component{

render(){

    
    const renderItem=(v)=>{
        switch(v['type'].toUpperCase()){
            case 'INPUT':
                return <Input style={{width:180}}/>;
            case 'DATEPICKER':
                return <DatePicker />;
            default:
                break;
        }
    }
    const columns ={
        // {title:'表单',dataIndex:'form',align:'center',type:'input'},
       child1:[
       {title:'表单号',dataIndex:'sequenceid',align:'center',type:'input'},
       {title:'ITSR单号',dataIndex:'itsr',align:'center',type:'input'},
       ],
       child2:[
        {title:'原签核人',dataIndex:'prosignerid',align:'center',type:'input'},
        {title:'转签至',dataIndex:'newsignerid',align:'center',type:'input'},
        {title:'转单人',dataIndex:'transid',align:'center',type:'input'},
       ],
       child3:[
        {title:'转单开始日期',dataIndex:'fromdate',align:'center',type:'datepicker'},
        {title:'转单结束日期',dataIndex:'enddate',align:'center',type:'datepicker'},
       ]
    }
    const columns2=[
        {title:'表单名称',dataIndex:'formname',align:'center'},
        {title:'表单号',dataIndex:'sequenceid',align:'center'},
        {title:'签核步骤',dataIndex:'step',align:'center'},
        {title:'原签核人',dataIndex:'prosignerid',align:'center'},
        {title:'转至签核人',dataIndex:'newsignerid',align:'center'},
        {title:'ITSR单号',dataIndex:'itsr',align:'center'},
        {title:'原因',dataIndex:'reason',align:'center'},
        {title:'附件',dataIndex:'attachment',align:'center'},
        {title:'转单人',dataIndex:'transid',align:'center'},
        {title:'转单时间',dataIndex:'transtime',align:'center'},
    ]
    const columns3=[
        {title:'表单名称',dataIndex:'formname',align:'center'},
        {title:'转签次数',dataIndex:'transno',align:'center'},
        
    ]
    const {ranklist,data,form,form:{getFieldDecorator,validateFields},submit,getRankList,tabletype}=this.props
    return(
    <Fragment>
    <Card
    title='表单转签查询'
    style={{marginLeft:5}}
    bordered={false}
    headStyle={{color: '#666'}}
    >
    <div>
        {
            columns.child1.map((v,k)=>{
                return(
                        <span style={{marginLeft:20}}>{v.title}&emsp;
                    {
                        getFieldDecorator(v.dataIndex)
                        (renderItem(v))
                    }
                    </span>
                )
            })
        }
        </div>
        <div>&emsp;</div>
        <div>
         {
            columns.child2.map((v,k)=>{
                return(
                        <span style={{marginLeft:20}}>{v.title}&emsp;
                    {
                        getFieldDecorator(v.dataIndex)
                        (renderItem(v))
                    }
                    </span>
                )
            })
        }
        </div>
        <div>&emsp;</div>
        <div>
         {
            columns.child3.map((v,k)=>{
                return(
                        <span style={{marginLeft:20}}>{v.title}&emsp;
                    {
                        getFieldDecorator(v.dataIndex)
                        (renderItem(v))
                    }
                    </span>
                )
            })
        }
        <span>&emsp;</span>
        <Button
         onClick={()=>submit(form)}
        >明细查询</Button>
        <span>&emsp;</span>
        <Button
        onClick={()=>getRankList(form)}
        >排行榜查询</Button>
        
        </div>
        </Card>
        {
            tabletype==1&&
            <Card
            title='表单转签明细'
            style={{marginLeft:5}}
            bordered={false}
            headStyle={{color: '#666'}}
            >
            <Table
            columns={columns2}
            data={data}
            />
            </Card>
        }
        {
            tabletype==2&&
            <Card
            title='转单排行榜'
            style={{marginLeft:5}}
            bordered={false}
            headStyle={{color: '#666'}}
            >
            <Table
            columns={columns3}
            data={ranklist}
            />
            </Card>
        }
    </Fragment>
    )
}
}

const mapStateToProps=(state)=>{

    const {ranklist,data,tabletype}=state.TransReducer.TransFormRepReducer;
    return {ranklist,data,tabletype}
}
  const mapDispatchToProps=(dispatch)=>{
    return{
        submit(form){
            form.validateFields((err,values)=>{
                if(!err){
                   dispatch(actionCreators.submit(values))
                }
                
            })
        },
        getRankList(form){
            form.validateFields((err,values)=>{
                if(!err){
                    dispatch(actionCreators.getRankList(values))
                }
            })
        }
     
    }
  }
  
  // export default Form.create()(connect(mapStateToProps,mapDispatchToProps)(withRouter(TransFormSys)));

  export default compose(
    withRouter,
    connect( mapStateToProps, mapDispatchToProps ),
    Form.create()
  )(TransFormSys)
  