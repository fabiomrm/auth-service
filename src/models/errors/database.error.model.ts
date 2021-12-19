export class DatabaseError extends Error {
    constructor(
        public message: string,
        public error?: Error,
    ) {
        super(message);
        this.message = message;
        this.error = error
    }
}



