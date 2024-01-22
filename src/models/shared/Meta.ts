export class Meta {
    public readonly id: number;

    public key: string;

    public value: any;

    /**
     * Creates a new order instance with the given properties
     *
     * @param {Object} properties The properties to set in the object.
     */
    public constructor( properties?: Meta ) {
        Object.assign( this, properties );
    }
}