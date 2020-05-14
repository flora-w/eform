import React from 'react';
import {HashRouter, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import CommonPage from './common/';

import Login from './pages/login/';
import Home from './pages/home/';


import SignCenter from './pages/signCenter/';
import Sign from './pages/signCenter/sign';
import Details from './pages/signCenter/details';

import MisCenter from './pages/misCenter/';
import FillForm from './pages/misCenter/FillForm';


import AgentSetting from './pages/agentSetting/';
import AgentSet from './pages/agentSetting/agentSet/';
import FormAgentSet from './pages/agentSetting/formAgent_set/';
import AgentSetHistory from './pages/agentSetting/agentSet_history/';
import AgentQuery from './pages/agentSetting/agentQuery/';
import BeAgentHistory from './pages/agentSetting/beAgentHistory/';
import AgentSignHistory from './pages/agentSetting/agentSignHistory';
import BeAgentSign_History from './pages/agentSetting/beAgentSign_History';



import SysHelpDesk from './pages/systemSetting/SysHelpDesk/';
import zEmpty from './pages/systemSetting/zEmpty/';
import EmployeeTransfer from './pages/systemSetting/EmployeeTransfer/';
import DefaultOT from './pages/systemSetting/DefaultOT/';
import FormCancel from './pages/systemSetting/FormCancel/';
import SystemSetting from './pages/systemSetting/';
import SysAdmin from './pages/systemSetting/SysAdmin';
import AddSpecialPerson from './pages/systemSetting/AddSpecialPerson';
import SearchSpecialPerson from './pages/systemSetting/SearchSpecialPerson';
import TransFormSys from './pages/systemSetting/TransFormSys';
import TransFormRep from './pages/systemSetting/TransFormRep';

const RouteConfig = () => {
  return <HashRouter>
            <Switch>
              <Route exact path='/login' component={Login}/>     
              {/* <Route exact path='/login-admin' component={LoginAdmin} />       */}
              <Route path='/' render={() =>
              <CommonPage>
                <Switch>
                  {/* <Redirect exact from='/' to='/home' /> */}
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/home' component={Home}/>
                  {/* <Route exact path='/sign/:id' component={Sign}/> */}
                  {/* <Route exact path='/mis_center/:type' component={MisCenter}/> */}

                  {/* 代理人 */}
                  <Redirect exact from='/agent-setting' to='/agent-setting/AgentSet' /> 
                  <Route  path='/agent-setting' render={()=> (
                    <AgentSetting>
                        <Route exact path='/agent-setting/AgentSet' component={AgentSet}/>
                        <Route exact path='/agent-setting/FormAgent_set' component={FormAgentSet}/>
                        <Route exact path='/agent-setting/AgentSet_History' component={AgentSetHistory}/>
                        <Route exact path='/agent-setting/Agent_Query' component={AgentQuery}/>
                        <Route exact path='/agent-setting/BeAgent_History' component={BeAgentHistory}/>
                        <Route exact path='/agent-setting/AgentSign_History' component={AgentSignHistory}/>
                        <Route exact path='/agent-setting/BeAgentSign_History' component={BeAgentSign_History}/>
                         
                    </AgentSetting>
                  )}/>

                  {/* 签核中心 */}
                  <Redirect exact path= '/sign' to='/sign/0' component={Sign}/>
                      <Route exact path='/sign/:id' component={Sign}/>
                      <Route exact path='/sign/sign/details' component={Details}/>
              
                  {/* <Redirect exact from='/system-setting' to/> */}
                  <Route path='/system-setting' render={() => (
                    <SystemSetting>
                        <Route exact path='/system-setting/SysHelpDesk' component={SysHelpDesk}/>
                        <Route exact path='/system-setting/zEmpty' component={zEmpty}/>
                        <Route exact path='/system-setting/DefaultOT' component={DefaultOT}/>
                        <Route exact path='/system-setting/FormCancel' component={FormCancel}/>
                        <Route exact path='/system-setting/EmployeeTransfer' component={EmployeeTransfer}/>
                        <Route exact path='/system-setting/SysAdmin' component={SysAdmin}/>
                        <Route exact path='/system-setting/AddSpecialPerson' component={AddSpecialPerson}/>
                        <Route exact path='/system-setting/SearchSpecialPerson' component={SearchSpecialPerson}/>
                        <Route exact path='/system-setting/TransFormSys' component={TransFormSys}/>
                        <Route exact path='/system-setting/TransFormRep' component={TransFormRep}/>
                    </SystemSetting>
                  )}/>



                   {/* <Route exact path='/mis_center' component={MisCenter} /> */}
                   <Route exact path='/personal_center' component={MisCenter} />
                   <Route exact path='/admin_center' component={MisCenter} />
                   <Route exact path='/customs_center' component={MisCenter} />
                   <Route exact path='/finance_center' component={MisCenter} />
                   <Route exact path='/engineer_center' component={MisCenter} />
                   <Route exact path='/factory_center' component={MisCenter} />
                   <Route exact path='/other' component={MisCenter} />


                   <Route exact path='/mis_center' render={()=>(
                     <MisCenter>
                        <Route exact path='/mis_center/FillForm' component={FillForm} />
                     </MisCenter>
                   )}
                   /> 

                </Switch>
              </CommonPage>} />
            </Switch>
        </HashRouter>
}


export default RouteConfig;