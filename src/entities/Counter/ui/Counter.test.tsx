import {fireEvent, screen} from '@testing-library/react';
import {Counter} from './Counter';
import {componentRender} from "shared/lib/tests/componentRender/componentRender";


describe('Sidebar', () => {
    test('Sidebar render', () => {
        componentRender( <Counter/>, {
            initialState: {counter: {value: 10}}
        })

    });
});