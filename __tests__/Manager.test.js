const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Mike');
    
    expect(manager.name).toBe('Mike');
    expect(typeof(manager)).toBe('object');
    
});

test('gets manager name', () => {
    const manager = new Manager();

    expect(manager.getName()).toBe(this.name);
});

test('gets manager id', () => {
    const manager = new Manager();

    expect(manager.getID()).toBe(this.id);
});

test('gets manager email', () => {
    const manager = new Manager();

    expect(manager.getEmail()).toBe(this.email);
});

test('gets employee role', () => {
    const manager = new Manager();

    expect(manager.getOfficeNumber()).toBe(this.officenumber);
});
