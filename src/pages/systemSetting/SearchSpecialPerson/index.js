import React, {Component, Fragment , useState, useEffect } from 'react';
import {message,Select, Card, Table, Button, Col, Form, Input, Row } from 'antd';
import {connect} from 'react-redux';
import {actionCreators} from './store';

const { Option } = Select;
class SearchSpecialPerson extends Component {

   onChange(value) {

      }
  onInput(val){
    // console.log(val);
}
 onBlur() {

}

 onFocus() {

}

 onSearch(val) {
  // console.log('search:', val);
}

  render(){

    const columns=[
      {title:'site',dataIndex:'site',align:'center'},
      {title:'是否公共賬號',dataIndex:'public',align:'center'},
      {title:'工號',dataIndex:'id',align:'center'},
      {title:'員工中文名',dataIndex:'chname',align:'center'},
      {title:'員工英文名',dataIndex:'enname',align:'center'},
      {title:'員工性別',dataIndex:'sex',align:'center'},
      {title:'員工類別',dataIndex:'type',align:'center'},
      {title:'mail',dataIndex:'mail',align:'center'},
      {title:'用途',dataIndex:'function',align:'center'},
      {title:'狀態',dataIndex:'status',align:'center'},
    ]

    const{data,onSelect,onInput,onsubmit}=this.props;
    return(
    <Fragment>
      <Card
          title='特殊人員查詢'
          headStyle={{color: '#666'}}
          bordered={false}
          // loading={loading}
          style={{margin: 5}}
         
        >
        <div>
        <span>
                <span>site:&emsp;</span>
            <Select
            showSearch
            style={{ width: 100 }}
            optionFilterProp="children"
            onChange={(value)=>onSelect('site',value)}
            // onChange={onSelect}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
          >
            <Option value="WKS">WKS</Option>
            <Option value="WCD">WCD</Option>
            <Option value="WCQ">WCQ</Option>
            <Option value="WOK">WOK</Option>
            <Option value="WTZ">WTZ</Option>
            <Option value="WHQ">WHQ</Option>
            <Option value="WIH">WIH</Option>
          </Select>
          <span>&emsp;&emsp;</span>
          <span>是否公共賬號:&emsp;&emsp;</span>
            <Select
            showSearch
            style={{ width: 100 }}
            optionFilterProp="children"
            onChange={(value)=>onSelect('ispublic',value)}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
          
          >
            <Option value="YES">Y</Option>
            <Option value="NO">N</Option>
            
          </Select>
          <span>&emsp;&emsp;</span>
          <span>員工工號:&emsp;&emsp;</span>
          <Input 
          style={{width:120}}
          onChange={(e)=>onSelect('empno',e.target.value)}
          />
          <span>&emsp;&emsp;</span>
          <span>員工性別:&emsp;&emsp;</span>
            <Select
            showSearch
            style={{ width: 100 }}
            optionFilterProp="children"
            onChange={(value)=>onSelect('sex',value)}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
           
          >
            <Option value="male">男</Option>
            <Option value="female">女</Option>
            
          </Select>
          <span>&emsp;&emsp;</span>
          <span>員工類別:&emsp;&emsp;</span>
            <Select
            showSearch
            style={{ width: 100 }}
            optionFilterProp="children"
            onChange={(value)=>onSelect('emptype',value)}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
          
          >
            <Option value="DL">DL</Option>
            <Option value="IDL">IDL</Option>
            
          </Select>
          <span>&emsp;</span>
          <Button
          onClick={onsubmit}
          >查詢</Button>
          </span>
        </div>
        </Card>

     <Card
     title="查詢結果"
     headStyle={{color: '#666'}}
     bordered={false}
     // loading={loading}
    //  style={{margin: 5}}
     >
       <Table
       columns={columns}
       dataSource={data}

       />


     </Card>    
</Fragment>  
   
    )
  }
}

const mapStateToProps=(state)=>{
  const {data}=state.SearchSpecialReducer.SearchSpecialPersonReducer;
  return{data};

 
}
const mapDispatchToProps=(dispatch)=>{
  return{

    onSelect(id,value){
      console.log(value)
      dispatch(actionCreators.onSelect(id,value))
    },
    onsubmit(){
      dispatch(actionCreators.onsubmit());
    }
   
    
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchSpecialPerson);
















