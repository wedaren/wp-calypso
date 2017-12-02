/** @format */

/**
 * External dependencies
 */

import { omit } from 'lodash';
import React from 'react';
import { setSection } from 'state/ui/actions';

/**
 * Internal Dependencies
 */
import MainComponent from './main';
import { renderWithReduxStore } from 'lib/react-helpers';

const exported = {
    unsubscribe( context ) {
		// We don't need the sidebar here.
		context.store.dispatch(
			setSection(
				{ name: 'me' },
				{
					hasSidebar: false,
				}
			)
		);

		renderWithReduxStore(
			React.createElement( MainComponent, {
				email: context.query.email,
				category: context.query.category,
				hmac: context.query.hmac,
				context: omit( context.query, [ 'email', 'category', 'hmac' ] ),
			} ),
			document.getElementById( 'primary' ),
			context.store
		);
	}
};

export default exported;

export const {
    unsubscribe
} = exported;
