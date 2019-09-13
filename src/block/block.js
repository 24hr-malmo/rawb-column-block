//  Import CSS.
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const { InnerBlocks } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'rawb/column-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Rawb Column Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'column' ),
	],
	// this means the block is only allowed as a child of columns block
	parent: ['rawb/columns-block'],
	attributes: {
		// will receive width attribute from columns templating - this is never changed and only read by our headless helper parser
		width: { type: 'string' },
	},

	edit: function( props ) {
		return (
			<div className={ props.className }>
				<InnerBlocks
					// use the pre-made button block appender (not the default paragraph one)
					renderAppender={ () => (
					<InnerBlocks.ButtonBlockAppender />
					) }
					// if we don't disable template lock, it will be inherited from parent
					templateLock = { false }
				/>
			</div>
		);
	},

	save: function() {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
} );


