/** @format */
const exported = {
    me: () => ( {
		get: () => {},
	} ),

    site: () => ( {
		post: () => ( {
			add: ( query, attributes, callback ) => {
				callback( null, attributes );
			},
		} ),
	} )
};

export default exported;

export const {
    me,
    site
} = exported;
