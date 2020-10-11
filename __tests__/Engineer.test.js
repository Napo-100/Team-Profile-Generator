const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Mike');
    
    expect(engineer.name).toBe('Mike');
    expect(typeof(engineer)).toBe('object');
    
});

test('gets engineer name', () => {
    const engineer = new Engineer();

    expect(engineer.getName()).toBe(this.name);
});

test('gets engineer id', () => {
    const engineer = new Engineer();

    expect(engineer.getID()).toBe(this.id);
});

test('gets engineer email', () => {
    const engineer = new Engineer();

    expect(engineer.getEmail()).toBe(this.email);
});

test('gets employee role', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toBe(this.github);
});
