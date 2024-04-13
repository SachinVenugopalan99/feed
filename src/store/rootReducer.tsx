import { combineReducers } from "@reduxjs/toolkit";
import {reducer as feed} from './modules/feed'

export const rootReducer = combineReducers({feed})