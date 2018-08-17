const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    const res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    const res = utils.square(5);

    expect(res).toBe(25).toBeA('number');
})

it('should set first and last name', () => {
    const user = {
        age: 27,
        location: 'Dundalk'
    }
    const res = utils.setName(user, 'Mark Anthony');
    console.log(res);

    expect(res).toInclude({firstName: "Mark"}).toBeA('object');
    expect(res).toInclude({lastName: "Anthony"}).toBeA('object');
});

// it('should expect some values', () => {
//    // expect(12).toNotBe(11);
//    // expect({name: 'Mark'}).toNotEqual({name: 'Mark'})
//    // expect([2,3,4]).toExclude(8);
//    expect({
//        name: "Mark Anthony",
//        age: 27,
//        location: "Dundalk"
//    }).toInclude({
//        age: 27
//    })
// });