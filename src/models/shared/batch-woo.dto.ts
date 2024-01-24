import {Model} from "./Model";

/**
 * Represents the object to send for a batch update.
 * @template T the type of resource used in the batch update
 * @class
 */
export class BatchWooDto<T> {
    /**
     * Array of resources to create
     * @template T the type of resource used in the creation
     * @type {T[]}
     */
    public create: Partial<T>[] = [];


    /**
     * Array of resources to update
     * @template T the type of resource used in the update
     * @type {T[]}
     */
    public update: (Partial<T> & Pick<Model, "id">)[] = [];

    /**
     * Array of resources to delete
     * @type {number[]}
     */
    public delete: number[] = [];
}