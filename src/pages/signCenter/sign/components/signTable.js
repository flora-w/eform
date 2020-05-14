import React, { PureComponent } from 'react';
import { Table, Input, Button, Icon  } from 'antd';
import Highlighter from 'react-highlight-words';
import * as style from '../index.scss';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class SignTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }
  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };
  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  render() {
    const { getColumnSearchProps } = this;
    const columns = [
      {title: '表單號', 
      dataIndex: 'SequenceId', 
      key: 'SequenceId', 
      align: 'left', 
      ...getColumnSearchProps('SequenceId'),
        // render: () => (<a href='javascrip:void(0)'>123131</a>), 
      render:(text,record)=>(
        <Link
        to={{
          pathname:'sign/details',
          search: `?formId=${record.SequenceId}&formName=${record.formName}&id=${this.props.page}`
        }}>
        {text}
        </Link>
      )
    },
      
      {title: '表單名稱', dataIndex: 'formName', key: 'formName', align: 'center'},
      {title: '填單日', dataIndex: 'FillDate', key: 'FillDate', align: 'center'},
      {title: '前次簽核日', dataIndex: 'PreviousFillDate', key: 'PreviousFillDate', align: 'center'},
      {title: '進行步驟', dataIndex: 'Step', key: 'Step', align: 'center'},
      {title: '待簽核人', dataIndex: 'ToBeSignName', key: 'ToBeSignName', align: 'center'},
    ];
    
    const {dataSource}=this.props;

    return (
      <Table 
        columns={columns}
        dataSource={dataSource}
        bordered={true}
        className={style.signTable}
        size='small'
        // loading={true}
      />
    );
  }
}
const mapStateToProps =(state)=>{
  const {dataSource,page}=state.signReducer.signTableReducer;
  
  return {
    dataSource,page
  }
  console.log(dataSource);
}


export default connect(mapStateToProps , null)(SignTable);