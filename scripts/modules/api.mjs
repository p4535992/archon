import { Archon } from "./lib.mjs";
import { getItem } from "./lib/lib.mjs";

const API = {

  /**
   *
   * @param {string} uuid
   * @param {boolean} symbolic
   * @param {Object} overrides
   * @returns {Promise<Item|undefined>}
   */
  async mystify({
    uuid,
    symbolic,
    overrides
  }) {
    const sourceItem = getItem(uuid);
    if (sourceItem) {
      return await Archon.createImpl(sourceItem, symbolic, overrides);
    }
  },

  /**
   *
   * @param {string} uuid
   * @returns {Promise<Item|undefined>}
   */
  async reveal(uuid) {
    const archonItem = getItem(uuid);
    if (archonItem) {
      return await Archon.reveal(archonItem);
    }
  },

  /**
   *
   * @param {string} uuid
   * @returns {Promise<Item|undefined>}
   */
  async isArchon(uuid) {
    const sourceItem = getItem(uuid);
    if (sourceItem) {
      return await Archon.isArchon(sourceItem);
    }
  }
};

export default API;
