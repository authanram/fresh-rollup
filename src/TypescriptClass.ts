export class TypescriptClass {
    private readonly _foo: string

    public constructor (message: string) {
        this._foo = message
    }

    public makeFoo (): Foo
    {
        return {bar: this._foo}
    }
}
