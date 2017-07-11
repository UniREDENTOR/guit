import Collection from './collection';
import traversable from '../decorators/traversable';

/**
 * An implementation of the pattern "Composite".
 * @class Composite
 * @public
 */
@traversable('children')
export default class Composite {

    /**
     * @constructor
     */
    constructor() {
        this.path = new Collection(Composite);
        this.parent = null;
        this.children = new Collection(Composite);
    }

    /**
     * Add an instance as a child
     * @method addChild
     * @param {Composite} child - an instance of a Composite
     * @throws {TypeError}
     */
    addChild(child) {
        this.children.addItem(child);
        child.parent = this;
        child.path = this.path.clone();
        child.path.addItem(child);
    }

    /**
     * Remove a child by reference to its instance
     * @method removeChild
     * @param {Composite} child - an instance of a Composite
     * @throws {TypeError}
     */
    removeChild(child) {
        this.children.removeItem(child);
    }

    /**
     * Get a child instance by its index
     * @method getChild
     * @param {number} index - index of child
     * @return {(Composite|null)} - an instance of a Composite or null
     * @throws {TypeError}
     */
    getChild(index) {
        return this.children.getItem(index);
    }

    /**
     * Check the availability of children
     * @method hasChildren
     * @return {boolean}
     */
    hasChildren() {
        return this.children.hasItems();
    }

}
