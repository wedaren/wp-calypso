/** @format */
let storeData = {};

const exported = {
    get( key ) {
		return storeData[ key ];
	},

    set( key, value ) {
		storeData[ key ] = value;
	},

    remove( key ) {
		delete storeData[ key ];
	},

    clear() {
		storeData = {};
	}
};

export default exported;

export const {
    get,
    set,
    remove,
    clear
} = exported;
