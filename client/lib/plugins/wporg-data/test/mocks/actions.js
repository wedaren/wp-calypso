/**
 * Needed for store test
 *
 * @format
 */

import sinon from 'sinon';

const exported = {
 fetchPluginData: sinon.spy(),
 fetchPluginsList: sinon.spy()
};

export default exported;

export const {
 fetchPluginData,
 fetchPluginsList
} = exported;
