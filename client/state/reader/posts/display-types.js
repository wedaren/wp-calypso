/** @format */
/**
 * Feed post display types
 * @type {Object} Types of post for display
 */
const exported = {
 UNCLASSIFIED: 0,
 PHOTO_ONLY: 1,
 LARGE_BANNER: 2,
 ONE_LINER: 4,
 LANDSCAPE_BANNER: 8,
 PORTRAIT_BANNER: 16,
 GALLERY: 32,
 VIDEO: 64,
 THUMBNAIL: 128,
 CANONICAL_IN_CONTENT: 256,
 FEATURED_VIDEO: 512,
 X_POST: 1024
};

export default exported;

export const {
 UNCLASSIFIED,
 PHOTO_ONLY,
 LARGE_BANNER,
 ONE_LINER,
 LANDSCAPE_BANNER,
 PORTRAIT_BANNER,
 GALLERY,
 VIDEO,
 THUMBNAIL,
 CANONICAL_IN_CONTENT,
 FEATURED_VIDEO,
 X_POST
} = exported;
