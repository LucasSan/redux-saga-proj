import ipSagas from './ipSagas';
import { loadDataSuccess } from './../actions';
import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';

describe('should test ipSagas', () => {
    const axiosMock = {
        get: jest.fn()
    }
    const it = sagaHelper(ipSagas(axiosMock));
    it('should call api get', result => {
        expect(result).toEqual(call(axiosMock.get, 'http://httpbin.org/ip'));
        return {
            data: {
                origin: 'ip retornado'
            }
        }
    });

    it('should put loadDataSuccess', result => {
        expect(result).toEqual(put(loadDataSuccess('ip retornado')));
    });
});
