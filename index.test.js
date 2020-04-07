import throttle from './index'

describe('throttler-js', () => {
    describe('Single call', () => {
        it('Should not call given call back function right now', () => {
            // Given a mock callback function
            const callback = jest.fn();
    
            // Throttle it to 2000ms
            throttle(callback, 2000);
    
             // At this point in time, the callback should not have been called yet
            expect(callback).not.toBeCalled();
        })
    })

    describe('Multiple calls', () => {
        jest.useFakeTimers();

        it('Should call given call back function only once in an interval of 2000ms', () => {
            // Given a mock callback function
            const callback = jest.fn();

            // Call the callback 10 times using a 2000ms throttle
            for (var i=0; i<10; i++) {
                throttle(callback, 2000);
            }

            // At this point in time, the callback should have been called juste once
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
        })
    })
})
