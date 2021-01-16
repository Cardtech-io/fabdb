class User {
    constructor(fields) {
        this.fields = fields;
    }

    get avatar() {
        return this.fields.avatar;
    }

    get name() {
        return this.fields.name || 'Anonymous';
    }
}

export default User;
