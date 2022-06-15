const { override, useBabelRc } = require('customize-cra');
const path = require('path');

module.exports = function override(config, env) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc();
};
