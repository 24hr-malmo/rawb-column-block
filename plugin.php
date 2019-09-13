<?php
/**
 * Plugin Name: rawb-column-block — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: rawb-column-block — is a Gutenberg plugin created via create-guten-block.
 * Author: mrahmadawais, maedahbatool
 * Author URI: https://AhmadAwais.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter('headless_helper__rawb/column-block', function($block, $format_blocks) {
	$parsed_block = new stdclass();

	$parsed_block->blocks = $format_blocks($block->innerBlocks);

	// grab width attribute that we receive from the template
	$parsed_block->width = $block->attrs['width'];

	return $parsed_block;
}, 10, 2);


add_filter('allowed_block_types', function($allowed_blocks) {
	array_push($allowed_blocks, 'rawb/column-block');
	return $allowed_blocks;
}, 100);

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
