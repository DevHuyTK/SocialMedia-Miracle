import { put, takeEvery } from 'redux-saga/effects'
import getAllAccount from '../../fetchAPIs/AccountAPI/getAllAccount'
import createAccount from '../../fetchAPIs/AccountAPI/createAccount'
import updateAccount from '../../fetchAPIs/AccountAPI/updateAccount'
import userDeleteAccount from '../../fetchAPIs/AccountAPI/userDeleteAccount'
import adminDeleteAccount from '../../fetchAPIs/AccountAPI/adminDeleteAccount'
import loginAccount from '../../fetchAPIs/AccountAPI/loginAccount'
import * as types from '../constant'

function* getAllAccounts(action) {
    try {
        const res = yield getAllAccount(action.payload);
        yield put({
            type: types.GET_ACCOUNT_SUCCESS,
            payload: {
                accData: res.data
            }
        })
    }
    catch (error) {
        yield put({
            type: types.GET_ACCOUNT_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}

function* registerAccount(action) {
    try {
        const res = yield createAccount(action.payload);
        yield put({
            type: types.ADD_ACCOUNT_SUCCESS,
            payload:{
                accData: res.data
            }
        })
        yield put({
            type: types.GET_ACCOUNT_REQUEST,
            payload: {
                accData: res.data
            }
        })
    }
    
    catch (error) {
        yield put({
            type: types.ADD_ACCOUNT_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}
function* editAccount(action) {
    try {
        const res = yield updateAccount(action.payload);
        yield put({
            type: types.EDIT_ACCOUNT_SUCCESS
        })
        yield put({
            type: types.GET_ACCOUNT_REQUEST,
            payload: {
                accData: res.data
            }
        })
    }
    catch (error) {
        yield put({
            type: types.EDIT_ACCOUNT_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}

function* deleteAccount(action) {
    try {
        const res = yield userDeleteAccount(action.payload);
        yield put({
            type: types.DELETE_ACCOUNT_SUCCESS
        })
        yield put ({
            type: types.GET_ACCOUNT_REQUEST,
            payload: {
                accData: res.data
            }
        })
    }
    catch (error) {
        yield put({
            type: types.DELETE_ACCOUNT_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* DeleteAccountByAdmin(action) {
    try {
        const res = yield adminDeleteAccount(action.payload);
        yield put({
            type: types.DELETE_ACCOUNT_SUCCESS
        })
        yield put ({
            type: types.GET_ACCOUNT_REQUEST,
            payload: {
                accData: res.data
            }
        })
    }
    catch (error) {
        yield put({
            type: types.DELETE_ACCOUNT_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* singInAccount(action) {
    try {
        const res = yield loginAccount(action.payload);
        yield put({
            type: types.LOGIN_ACCOUNT_SUCCESS,
            payload: {
                accessToken: res.accessToken,
                refreshToken: res.refreshToken
            }
        })
        yield put ({
            type: types.GET_ACCOUNT_REQUEST,
            payload: {
                accData: res.data
            }
        })
    }
    catch (error) {
        yield put({
            type: types.LOGIN_ACCOUNT_FAILURE,
            payload: {
                error: error.message
            }
        })
    }
}


export const AccountSaga = [
    takeEvery(types.GET_ACCOUNT_REQUEST, getAllAccounts),
    takeEvery(types.ADD_ACCOUNT_REQUEST, registerAccount),
    takeEvery(types.EDIT_ACCOUNT_REQUEST, editAccount),
    takeEvery(types.DELETE_ACCOUNT_REQUEST, deleteAccount),
    takeEvery(types.ADMIN_DELETE_ACCOUNT_REQUEST, adminDeleteAccount),
    takeEvery(types.LOGIN_ACCOUNT_REQUEST, singInAccount)

];