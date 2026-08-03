/**
 * EXAMPLE — template for a mock dataset. Copy this file, rename it to your
 * data model (e.g. `users.js`, `orders.js`), rename the exported const, and
 * replace this JSDoc block with your own field-by-field shape documentation.
 * Treat the JSDoc header as the schema — there's no runtime validation library
 * in this boilerplate, so this comment is the only contract a field has.
 *
 * Default shape below is a flat array of objects, which covers most cases.
 * If your data is naturally grouped/keyed instead (e.g. items split into
 * columns or stages), export an object of arrays instead — see the inline
 * note at the bottom of this file for that variant.
 *
 * @typedef {Object} ExampleItem
 * @property {string} id     Stable id, referenced as a foreign key from other datasets if needed.
 * @property {string} label  Human-readable name shown in the UI.
 *
 * @type {ExampleItem[]}
 */
const EXAMPLE_ITEMS = [];

// Grouped/keyed variant, if your model needs it instead of a flat array:
// const EXAMPLE_GROUPED = { columnA: [], columnB: [] };
