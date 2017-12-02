/** @format */

/**
 * External dependencies
 */

import React from 'react';

/**
 * Internal dependencies
 */
import PreviewMain from './main';

const exported = {
 preview: function( context, next ) {
	 context.primary = <PreviewMain site={ context.params.site } />;
	 next();
 }
};

export default exported;

export const {
 preview
} = exported;
