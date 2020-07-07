// IMPORT MODULES under test here:
import { isSick } from '../jellbeanUtils.js';
const test = QUnit.test;

test('is count is under 10, return false; otherwise return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const aFewBeans = 4;
    const fewExpected = false;

    const tooManyBeans = 30;
    const tooManyExpected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualFew = isSick(aFewBeans);
    const actualTooMany = isSick(tooManyBeans);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualFew, fewExpected);
    expect.equal(actualTooMany, tooManyExpected);
});
