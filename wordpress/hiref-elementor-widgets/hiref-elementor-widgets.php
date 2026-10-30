<?php
/**
 * Plugin Name: HIREF Elementor Widgets
 * Plugin URI:  https://mech.utm.my/hiref
 * Description: Custom Elementor widgets for the HIREF theme — Hero Slider, Stats Bar, About, Research Grid, News Grid, Events List, Collaborations (tabbed carousel), Contact Info, and inner-page widgets.
 * Version:     2.0.0
 * Author:      HIREF UTM
 * License:     GPL v2 or later
 * Text Domain: hiref-elementor
 */

defined( 'ABSPATH' ) || exit;

define( 'HIREF_EL_VERSION', '2.0.0' );
define( 'HIREF_EL_DIR', plugin_dir_path( __FILE__ ) );
define( 'HIREF_EL_URI', plugin_dir_url( __FILE__ ) );

/* ── Boot ── */
add_action( 'plugins_loaded', function () {
	if ( ! did_action( 'elementor/loaded' ) ) {
		add_action( 'admin_notices', function () {
			echo '<div class="notice notice-warning is-dismissible"><p><strong>HIREF Elementor Widgets</strong> requires the <strong>Elementor</strong> plugin to be installed and active.</p></div>';
		} );
		return;
	}
	add_action( 'elementor/widgets/register',             'hiref_el_register_widgets' );
	add_action( 'elementor/elements/categories_registered', 'hiref_el_add_category' );
} );

function hiref_el_add_category( $manager ) {
	$manager->add_category( 'hiref', [
		'title' => 'HIREF Widgets',
		'icon'  => 'fa fa-fire',
	] );
}

function hiref_el_register_widgets( $manager ) {
	$widget_files = [
		// Homepage sections
		'widget-hero.php',
		'widget-stats.php',
		'widget-about.php',
		'widget-research.php',
		'widget-news.php',
		'widget-events.php',
		'widget-collaborations.php',
		'widget-contact.php',
		// Inner page components
		'widget-page-hero.php',
		'widget-message-head.php',
		'widget-background-vision.php',
		'widget-academic-staff.php',
		'widget-experts.php',
		'widget-grants.php',
		'widget-honors.php',
		'widget-facilities.php',
		'widget-services.php',
		'widget-vacancy.php',
	];

	foreach ( $widget_files as $file ) {
		$path = HIREF_EL_DIR . 'widgets/' . $file;
		if ( file_exists( $path ) ) {
			require_once $path;
		}
	}

	$widget_classes = [
		// Homepage sections
		'HIREF_Widget_Hero',
		'HIREF_Widget_Stats',
		'HIREF_Widget_About',
		'HIREF_Widget_Research',
		'HIREF_Widget_News',
		'HIREF_Widget_Events',
		'HIREF_Widget_Collaborations',
		'HIREF_Widget_Contact',
		// Inner page components
		'HIREF_Widget_Page_Hero',
		'HIREF_Widget_Message_Head',
		'HIREF_Widget_Background_Vision',
		'HIREF_Widget_Academic_Staff',
		'HIREF_Widget_Experts',
		'HIREF_Widget_Grants',
		'HIREF_Widget_Honors',
		'HIREF_Widget_Facilities',
		'HIREF_Widget_Services',
		'HIREF_Widget_Vacancy',
	];

	foreach ( $widget_classes as $class ) {
		if ( class_exists( $class ) ) {
			$manager->register( new $class() );
		}
	}
}
