
import { combineReducers } from 'redux';
import {reducer as agentsetHistoryReducer} from '../agentSet_history/store';
import{reducer as financeAgentSetReducer} from '../agentSet/store';
import{reducer as formAgentSetReducer} from '../formAgent_set/store';
import {reducer as financeSignDataReducer} from '../beAgentHistory/store';
import {reducer as  agentsignHistoryReducer} from '../agentSignHistory/store';
import {reducer  as  beAgentSignHistoryReducer} from '../beAgentSign_History/store';
import {reducer as agentSetQueryReducer} from '../agentQuery/store';


export default combineReducers({
    agentsetHistoryReducer,
    financeAgentSetReducer,
    formAgentSetReducer,
    financeSignDataReducer,
    agentsignHistoryReducer,
    beAgentSignHistoryReducer,
    agentSetQueryReducer
})
