import { CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED } from './constants.js';

    import * as reducers from './reducers';

    describe('search robots', () => {
        it('should return the initial state', () => {
            expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
        })
    })