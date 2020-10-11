const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Mike');
    
    expect(intern.name).toBe('Mike');
    expect(typeof(intern)).toBe('object');
    
});

test('gets intern name', () => {
    const intern = new Intern();

    expect(intern.getName()).toBe(this.name);
});

test('gets intern id', () => {
    const intern = new Intern();

    expect(intern.getID()).toBe(this.id);
});

test('gets intern email', () => {
    const intern = new Intern();

    expect(intern.getEmail()).toBe(this.email);
});

test('gets employee role', () => {
    const intern = new Intern();

    expect(intern.getSchool()).toBe(this.school);
});
