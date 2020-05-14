import React,{Component,useState, useEffect} from 'react';
import {actionCreators} from './store';
import {connect} from 'react-redux';
import {Modal, Card, Table, Button } from 'antd';
import AddAuth from './component/AddAuth';
import ModifyModal from './component/ModifyModal';
import { Record } from 'immutable';


class  SysAdmin extends Component{
    componentDidMount(){
        this.props.getPageData();
        // console.log(this.props)
      }
    
    render(){
        const columns =[{
            title:'管理员工号',
            dataIndex:'EmpNo',
            align:"center",
          },{
           title:'管理员姓名',
           dataIndex:'ChName',
           align:"center",
         },{
             title:'是否有效',
             dataIndex:'IsValid',
             align:"center",
         },{
            title:'修改',
            dataIndex:'Modify',
            align:"center",
            render:(text,record,index)=>(
                <Button type="primary" onClick={this.props.changeStatus.bind(this,record)}>Modify</Button>
            )
        }
        ]
        const  authModalPageData=[
            {title:'工号',id:'Empno',type:'input',
            props:{onBlur:this.props.getName.bind(this)}
           },
           {title:'姓名',id:'ChName',type:'input',
            props:{disable:true}
           }
        ]
        const modifyModalData=[
            {title:'工号',id:'Empno',type:'input',
            dataIndex:'EmpNo',
            props:{disable:true}
           },
           {title:'姓名',id:'ChName',type:'input',
           props:{disable:true},
           dataIndex:'ChName',
           }
        ]

        const {handleShowModalClick,showModal,addAuthOk,handleHideModalClick,tableData,
            modifyok,modifyModalState,modifycancel,id,chname
        }=this.props;
        
        return(
         <Card
         title="管理员维护"
         bordered={false}
         headStyle={{color:'#666'}}
         style={{margin:5}}
         >
          <div>
        <Button type="primary" onClick={handleShowModalClick.bind(this)}>
         新增管理员
        </Button>
        <div>&emsp;</div>
        <AddAuth
           pageData={authModalPageData}
           showModal={showModal}
           addAuthOk={addAuthOk}
           hideModal={handleHideModalClick}
           name={this.props.name}
           ref="abc"
        />
         <Table
           columns={columns}
           dataSource={tableData}
           bordered={true} 
      />
      <ModifyModal  
         pageData={modifyModalData}
         modifyModal={modifyModalState}
         modifyok={modifyok}
         modifycancel={modifycancel}
         empno={id}
         chname={chname}
      />
      </div>
         </Card>
        )
    }
}


const mapStateToProps=(state)=>{
   const {name,showModal,tableData,modifyModalState,id,chname}=state.sysAdminReducer.SysAdminSetReducer;
   return{name,showModal,tableData,modifyModalState,id,chname}
}

const mapDispatchToProps=(dispatch)=>{
 return{
    handleShowModalClick(){
        this.refs.abc.resetFields();
         dispatch(actionCreators.showModal())  
    },
    handleHideModalClick(){
        dispatch(actionCreators.hideModal())
      },
    getName(e){
        dispatch(actionCreators.getName(e.target.value))
      },
    // addAuthOk(values){
    //     dispatch(actionCreators.addAuthOk1(values))
    //   },
    getPageData(){
        dispatch(actionCreators.getPageData());
      },
    changeStatus(record){
        // console.log(record);
        dispatch(actionCreators.modifyModal(record))  
      },
  
      modifyok(values){
        dispatch(actionCreators.modifyok1(values))
        // console.log(values)
      },
      modifycancel(){
        dispatch(actionCreators.modifycancel())
      }
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(SysAdmin)