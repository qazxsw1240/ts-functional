export class Mapper<T> {
	public static of<T>(value: T): Mapper<T> {
		return new Mapper(value);
	}

	private readonly _value: T;

	constructor (value: T) {
		this._value = value;
	}

	public map<U>(mapper: (value: T) => U): Mapper<U> {
		return Mapper.of(mapper(this._value));
	}

	public get(): T {
		return this._value;
	}
}