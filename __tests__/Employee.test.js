const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Mike');
    
    expect(employee.name).toBe('Mike');
    expect(typeof(employee)).toBe('object');
    
});

test('gets employee name', () => {
    const employee = new Employee();

    expect(employee.getName()).toBe(this.name);
});

test('gets employee id', () => {
    const employee = new Employee();

    expect(employee.getID()).toBe(this.id);
});

test('gets employee email', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toBe(this.email);
});

