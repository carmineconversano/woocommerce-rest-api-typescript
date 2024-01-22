/**
 * Represents a File resource.
 * @class
 */
export class Downloads {
    /**
     * File ID.
     * @type {string}
     */
    public id: string;

    /**
     * File name.
     * @type {string}
     */
    public name: string;

    /**
     * File URL.
     * @type {string}
     */
    public file: string;

    /**
     * @constructor
     * @param {Object} data - The initial data for the file.
     */
    constructor(data: { id: string; name: string; file: string }) {
        this.id = data.id;
        this.name = data.name;
        this.file = data.file;
    }
}
