<?php
/**
 * HIREF Theme Functions
 */

defined( 'ABSPATH' ) || exit;

define( 'HIREF_VERSION', '1.0.0' );
define( 'HIREF_DIR', get_template_directory() );
define( 'HIREF_URI', get_template_directory_uri() );

/* ── Theme Setup ── */
function hiref_setup() {
	load_theme_textdomain( 'hiref', HIREF_DIR . '/languages' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ] );
	add_theme_support( 'custom-logo' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'responsive-embeds' );

	// Note: elementor-header-footer support intentionally omitted.
	// The theme ships its own complete header.php and footer.php.
	// Enabling Elementor header/footer lets Elementor Pro Theme Builder
	// override them with empty templates on inner pages.

	register_nav_menus( [
		'primary' => __( 'Primary Menu', 'hiref' ),
		'footer'  => __( 'Footer Menu', 'hiref' ),
	] );
}
add_action( 'after_setup_theme', 'hiref_setup' );

/* ── Enqueue Assets ── */
function hiref_enqueue() {
	$main_css = HIREF_DIR . '/assets/css/main.css';
	$main_js  = HIREF_DIR . '/assets/js/main.js';
	$theme_css = HIREF_DIR . '/style.css';

	wp_enqueue_style( 'hiref-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap', [], null );
	wp_enqueue_style( 'hiref-theme', HIREF_URI . '/style.css', [], file_exists( $theme_css ) ? filemtime( $theme_css ) : HIREF_VERSION );
	wp_enqueue_style( 'hiref-style', HIREF_URI . '/assets/css/main.css', [ 'hiref-theme' ], file_exists( $main_css ) ? filemtime( $main_css ) : HIREF_VERSION );
	wp_enqueue_script( 'hiref-main', HIREF_URI . '/assets/js/main.js', [], file_exists( $main_js ) ? filemtime( $main_js ) : HIREF_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'hiref_enqueue' );

/* ── Elementor: remove default margins/padding on full-width pages ── */
function hiref_elementor_body_classes( $classes ) {
	if ( class_exists( '\Elementor\Plugin' ) && is_singular() ) {
		$doc = \Elementor\Plugin::$instance->documents->get( get_the_ID() );
		if ( $doc && $doc->is_built_with_elementor() ) {
			$classes[] = 'hiref-elementor-page';
		}
	}
	return $classes;
}
add_filter( 'body_class', 'hiref_elementor_body_classes' );

/* ── Elementor: theme locations intentionally NOT registered. ──
   The theme provides its own header.php and footer.php. Registering
   Elementor core locations lets Elementor Pro Theme Builder replace them
   with its own (often empty) header/footer templates on inner pages. */

/* ── Page Templates ── */
function hiref_add_page_templates( $templates ) {
	$templates['page-templates/elementor-full-width.php']    = 'Elementor Full Width (No Header/Footer)';
	$templates['page-templates/full-width.php']              = 'Full Width';
	$templates['page-templates/page-message-from-head.php']  = 'Message From Head';
	$templates['page-templates/page-background-vision.php']  = 'Background, Vision & Mission';
	$templates['page-templates/page-academic-staff.php']     = 'Academic Staff';
	$templates['page-templates/page-meet-our-expert.php']    = 'Meet Our Expert';
	$templates['page-templates/page-grants.php']             = 'Grants';
	$templates['page-templates/page-honor-awards.php']       = 'Honor & Awards';
	$templates['page-templates/page-facilities.php']         = 'HiREF Facilities';
	$templates['page-templates/page-services.php']           = 'HiREF Services';
	$templates['page-templates/page-vacancy.php']            = 'Vacancy';
	return $templates;
}
add_filter( 'theme_page_templates', 'hiref_add_page_templates' );

function hiref_redirect_page_template( $template ) {
	if ( is_front_page() ) {
		$front_page = HIREF_DIR . '/front-page.php';
		if ( file_exists( $front_page ) ) return $front_page;
	}

	if ( is_page() ) {
		$meta = get_post_meta( get_the_ID(), '_wp_page_template', true );
		$custom = [
			'page-templates/elementor-full-width.php',
			'page-templates/full-width.php',
			'page-templates/page-message-from-head.php',
			'page-templates/page-background-vision.php',
			'page-templates/page-academic-staff.php',
			'page-templates/page-meet-our-expert.php',
			'page-templates/page-grants.php',
			'page-templates/page-honor-awards.php',
			'page-templates/page-facilities.php',
			'page-templates/page-services.php',
			'page-templates/page-vacancy.php',
		];
		if ( in_array( $meta, $custom, true ) ) {
			$tpl = HIREF_DIR . '/' . $meta;
			if ( file_exists( $tpl ) ) return $tpl;
		}
	}
	return $template;
}
add_filter( 'template_include', 'hiref_redirect_page_template', 999 );

/* ── Custom Post Types ── */
function hiref_register_cpts() {
	register_post_type( 'hiref_news', [
		'labels'       => [ 'name' => 'News', 'singular_name' => 'News Item', 'add_new_item' => 'Add News Item', 'edit_item' => 'Edit News Item' ],
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
		'menu_icon'    => 'dashicons-megaphone',
		'has_archive'  => true,
		'rewrite'      => [ 'slug' => 'news' ],
	] );

	register_post_type( 'hiref_event', [
		'labels'       => [ 'name' => 'Events', 'singular_name' => 'Event', 'add_new_item' => 'Add Event', 'edit_item' => 'Edit Event' ],
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => [ 'title', 'editor', 'thumbnail', 'custom-fields' ],
		'menu_icon'    => 'dashicons-calendar-alt',
		'has_archive'  => true,
		'rewrite'      => [ 'slug' => 'events' ],
	] );

	register_post_type( 'hiref_research', [
		'labels'       => [ 'name' => 'Research Areas', 'singular_name' => 'Research Area', 'add_new_item' => 'Add Research Area', 'edit_item' => 'Edit Research Area' ],
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
		'menu_icon'    => 'dashicons-flask',
		'has_archive'  => false,
		'rewrite'      => [ 'slug' => 'research' ],
	] );

	register_post_type( 'hiref_slide', [
		'labels'       => [ 'name' => 'Hero Slides', 'singular_name' => 'Slide', 'add_new_item' => 'Add Slide', 'edit_item' => 'Edit Slide' ],
		'public'       => false,
		'show_ui'      => true,
		'show_in_rest' => true,
		'supports'     => [ 'title', 'editor', 'thumbnail', 'custom-fields', 'page-attributes' ],
		'menu_icon'    => 'dashicons-images-alt2',
	] );

	register_post_type( 'hiref_staff', [
		'labels'       => [ 'name' => 'Academic Staff', 'singular_name' => 'Staff Member', 'add_new_item' => 'Add Staff Member', 'edit_item' => 'Edit Staff Member' ],
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => [ 'title', 'editor', 'thumbnail', 'custom-fields' ],
		'menu_icon'    => 'dashicons-groups',
		'has_archive'  => false,
		'rewrite'      => [ 'slug' => 'staff' ],
	] );

	register_post_type( 'hiref_grant', [
		'labels'       => [ 'name' => 'Grants', 'singular_name' => 'Grant', 'add_new_item' => 'Add Grant', 'edit_item' => 'Edit Grant' ],
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => [ 'title', 'editor', 'custom-fields' ],
		'menu_icon'    => 'dashicons-awards',
		'has_archive'  => false,
		'rewrite'      => [ 'slug' => 'grants' ],
	] );

	register_post_type( 'hiref_award', [
		'labels'       => [ 'name' => 'Honor & Awards', 'singular_name' => 'Award', 'add_new_item' => 'Add Award', 'edit_item' => 'Edit Award' ],
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => [ 'title', 'editor', 'thumbnail', 'custom-fields' ],
		'menu_icon'    => 'dashicons-star-filled',
		'has_archive'  => false,
		'rewrite'      => [ 'slug' => 'awards' ],
	] );

	register_post_type( 'hiref_facility', [
		'labels'       => [ 'name' => 'Facilities', 'singular_name' => 'Facility', 'add_new_item' => 'Add Facility', 'edit_item' => 'Edit Facility' ],
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
		'menu_icon'    => 'dashicons-building',
		'has_archive'  => false,
		'rewrite'      => [ 'slug' => 'facilities' ],
	] );

	register_post_type( 'hiref_service', [
		'labels'       => [ 'name' => 'Services', 'singular_name' => 'Service', 'add_new_item' => 'Add Service', 'edit_item' => 'Edit Service' ],
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ],
		'menu_icon'    => 'dashicons-hammer',
		'has_archive'  => false,
		'rewrite'      => [ 'slug' => 'services' ],
	] );

	register_post_type( 'hiref_vacancy', [
		'labels'       => [ 'name' => 'Vacancies', 'singular_name' => 'Vacancy', 'add_new_item' => 'Add Vacancy', 'edit_item' => 'Edit Vacancy' ],
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => [ 'title', 'editor', 'custom-fields' ],
		'menu_icon'    => 'dashicons-businessman',
		'has_archive'  => false,
		'rewrite'      => [ 'slug' => 'vacancies' ],
	] );
}
add_action( 'init', 'hiref_register_cpts' );

/* ── Meta Boxes ── */
function hiref_add_meta_boxes() {
	add_meta_box( 'hiref_news_meta',     'News Details',     'hiref_news_meta_cb',     'hiref_news',     'normal', 'high' );
	add_meta_box( 'hiref_event_meta',    'Event Details',    'hiref_event_meta_cb',    'hiref_event',    'normal', 'high' );
	add_meta_box( 'hiref_slide_meta',    'Slide Details',    'hiref_slide_meta_cb',    'hiref_slide',    'normal', 'high' );
	add_meta_box( 'hiref_research_meta', 'Research Details', 'hiref_research_meta_cb', 'hiref_research', 'normal', 'high' );
}
add_action( 'add_meta_boxes', 'hiref_add_meta_boxes' );

function hiref_news_meta_cb( $post ) {
	wp_nonce_field( 'hiref_meta_nonce', 'hiref_meta_nonce' );
	$tag  = get_post_meta( $post->ID, '_hiref_tag', true );
	$date = get_post_meta( $post->ID, '_hiref_date', true );
	echo '<table class="form-table"><tr><th><label>Tag / Category</label></th>';
	echo '<td><input type="text" name="hiref_tag" value="' . esc_attr( $tag ) . '" class="regular-text" placeholder="Publication, Welcome, Event…" /></td></tr>';
	echo '<tr><th><label>Display Date</label></th>';
	echo '<td><input type="text" name="hiref_date" value="' . esc_attr( $date ) . '" class="regular-text" placeholder="Oct 24, 2024" /></td></tr></table>';
}

function hiref_event_meta_cb( $post ) {
	wp_nonce_field( 'hiref_meta_nonce', 'hiref_meta_nonce' );
	$abbr     = get_post_meta( $post->ID, '_hiref_abbr', true );
	$dates    = get_post_meta( $post->ID, '_hiref_dates', true );
	$location = get_post_meta( $post->ID, '_hiref_location', true );
	$status   = get_post_meta( $post->ID, '_hiref_status', true ) ?: 'ended';
	echo '<table class="form-table">';
	echo '<tr><th><label>Abbreviation</label></th><td><input type="text" name="hiref_abbr" value="' . esc_attr( $abbr ) . '" class="regular-text" placeholder="IMAT 2024" /></td></tr>';
	echo '<tr><th><label>Dates</label></th><td><input type="text" name="hiref_dates" value="' . esc_attr( $dates ) . '" class="regular-text" placeholder="18 – 20 December 2024" /></td></tr>';
	echo '<tr><th><label>Location</label></th><td><input type="text" name="hiref_location" value="' . esc_attr( $location ) . '" class="regular-text" placeholder="Kuala Lumpur, Malaysia" /></td></tr>';
	echo '<tr><th><label>Status</label></th><td><select name="hiref_status"><option value="upcoming"' . selected( $status, 'upcoming', false ) . '>Upcoming</option><option value="ended"' . selected( $status, 'ended', false ) . '>Ended</option></select></td></tr>';
	echo '</table>';
}

function hiref_slide_meta_cb( $post ) {
	wp_nonce_field( 'hiref_meta_nonce', 'hiref_meta_nonce' );
	$tag      = get_post_meta( $post->ID, '_hiref_tag', true );
	$headline = get_post_meta( $post->ID, '_hiref_headline', true );
	$sub      = get_post_meta( $post->ID, '_hiref_sub', true );
	echo '<table class="form-table">';
	echo '<tr><th><label>Tag Label</label></th><td><input type="text" name="hiref_tag" value="' . esc_attr( $tag ) . '" class="regular-text" placeholder="Research Mission" /></td></tr>';
	echo '<tr><th><label>Headline (use \\n for line break)</label></th><td><input type="text" name="hiref_headline" value="' . esc_attr( $headline ) . '" class="regular-text" /></td></tr>';
	echo '<tr><th><label>Sub-text</label></th><td><textarea name="hiref_sub" rows="3" class="large-text">' . esc_textarea( $sub ) . '</textarea></td></tr>';
	echo '</table><p class="description">Set the slide <strong>background image</strong> via the Featured Image above.</p>';
}

function hiref_research_meta_cb( $post ) {
	wp_nonce_field( 'hiref_meta_nonce', 'hiref_meta_nonce' );
	$icon  = get_post_meta( $post->ID, '_hiref_icon', true );
	$color = get_post_meta( $post->ID, '_hiref_color', true );
	$icons  = [ 'flame' => 'Combustion (Flame)', 'zap' => 'Heat Transfer (Zap)', 'microscope' => 'Microscale (Microscope)', 'wind' => 'Supersonic (Wind)', 'beaker' => 'Nanomaterials (Beaker)', 'atom' => 'Thermofluids (Atom)' ];
	$colors = [ 'orange' => 'Orange', 'amber' => 'Amber', 'sky' => 'Sky Blue', 'blue' => 'Blue', 'teal' => 'Teal', 'slate' => 'Slate' ];
	echo '<table class="form-table"><tr><th><label>Icon</label></th><td><select name="hiref_icon">';
	foreach ( $icons  as $v => $l ) echo '<option value="' . esc_attr( $v ) . '"' . selected( $icon,  $v, false ) . '>' . esc_html( $l ) . '</option>';
	echo '</select></td></tr><tr><th><label>Color</label></th><td><select name="hiref_color">';
	foreach ( $colors as $v => $l ) echo '<option value="' . esc_attr( $v ) . '"' . selected( $color, $v, false ) . '>' . esc_html( $l ) . '</option>';
	echo '</select></td></tr></table>';
}

function hiref_save_meta( $post_id ) {
	if ( ! isset( $_POST['hiref_meta_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['hiref_meta_nonce'] ) ), 'hiref_meta_nonce' ) ) return;
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
	if ( ! current_user_can( 'edit_post', $post_id ) ) return;

	$text_fields = [ 'hiref_tag' => '_hiref_tag', 'hiref_date' => '_hiref_date', 'hiref_abbr' => '_hiref_abbr',
		'hiref_dates' => '_hiref_dates', 'hiref_location' => '_hiref_location', 'hiref_status' => '_hiref_status',
		'hiref_headline' => '_hiref_headline', 'hiref_icon' => '_hiref_icon', 'hiref_color' => '_hiref_color' ];

	foreach ( $text_fields as $post_key => $meta_key ) {
		if ( isset( $_POST[ $post_key ] ) ) {
			update_post_meta( $post_id, $meta_key, sanitize_text_field( wp_unslash( $_POST[ $post_key ] ) ) );
		}
	}
	if ( isset( $_POST['hiref_sub'] ) ) {
		update_post_meta( $post_id, '_hiref_sub', sanitize_textarea_field( wp_unslash( $_POST['hiref_sub'] ) ) );
	}
}
add_action( 'save_post', 'hiref_save_meta' );

/* ── Customizer ── */
function hiref_customizer( $wp_customize ) {
	$wp_customize->add_section( 'hiref_options', [ 'title' => 'HIREF Settings', 'priority' => 30 ] );
	$settings = [
		'hiref_phone'    => [ 'label' => 'Phone Number', 'default' => '+607 555 7036' ],
		'hiref_email'    => [ 'label' => 'Email Address', 'default' => 'hirefofficial@gmail.com' ],
		'hiref_address'  => [ 'label' => 'Address', 'default' => 'Block E06, Faculty of Mechanical Engineering, UTM, 81310 Skudai, Johor' ],
		'hiref_linkedin' => [ 'label' => 'LinkedIn URL', 'default' => 'https://lnkd.in/gahnE2W9' ],
		'hiref_facebook' => [ 'label' => 'Facebook URL', 'default' => 'http://facebook.com/profile.php?id=100084659865225' ],
	];
	foreach ( $settings as $id => $args ) {
		$wp_customize->add_setting( $id, [ 'default' => $args['default'], 'sanitize_callback' => 'sanitize_text_field', 'transport' => 'refresh' ] );
		$wp_customize->add_control( $id, [ 'label' => $args['label'], 'section' => 'hiref_options', 'type' => 'text' ] );
	}

	$wp_customize->add_section( 'hiref_stats', [ 'title' => 'HIREF Stats Bar', 'priority' => 31 ] );
	$stats = [
		'publications' => [ 'label' => 'Publications Count', 'default' => '120+' ],
		'citations'    => [ 'label' => 'Citations Count',    'default' => '2,400+' ],
		'patents'      => [ 'label' => 'Patents Count',      'default' => '8' ],
		'masters'      => [ 'label' => 'Master Students',    'default' => '25+' ],
		'phd'          => [ 'label' => 'PhD Students',       'default' => '15+' ],
	];
	foreach ( $stats as $id => $args ) {
		$wp_customize->add_setting( 'hiref_stat_' . $id, [ 'default' => $args['default'], 'sanitize_callback' => 'sanitize_text_field' ] );
		$wp_customize->add_control( 'hiref_stat_' . $id, [ 'label' => $args['label'], 'section' => 'hiref_stats', 'type' => 'text' ] );
	}
}
add_action( 'customize_register', 'hiref_customizer' );

/* ── Widgets ── */
function hiref_widgets_init() {
	register_sidebar( [ 'name' => 'Footer Widget Area', 'id' => 'footer-widgets',
		'before_widget' => '<div class="footer-widget">', 'after_widget' => '</div>',
		'before_title' => '<h4 class="footer-widget-title">', 'after_title' => '</h4>' ] );
}
add_action( 'widgets_init', 'hiref_widgets_init' );

/* ── SVG support ── */
add_filter( 'upload_mimes', function( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
} );

/* ── Helper ── */
function hiref_option( $key, $fallback = '' ) {
	return get_theme_mod( $key, $fallback );
}

/* ── Nav Walker (defined here so it loads before header.php renders) ── */
if ( ! class_exists( 'HIREF_Nav_Walker' ) ) :
class HIREF_Nav_Walker extends Walker_Nav_Menu {
	public function start_lvl( &$output, $depth = 0, $args = null ) {
		$output .= '<div class="hiref-dropdown"><div class="hiref-container"><div class="hiref-dropdown__inner">';
		$output .= '<div class="hiref-dropdown__links">';
	}
	public function end_lvl( &$output, $depth = 0, $args = null ) {
		$output .= '</div></div></div></div>';
	}
	public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
		if ( $depth === 0 ) {
			$has_children = is_array( $item->classes ) && in_array( 'menu-item-has-children', $item->classes );
			$output .= '<div class="hiref-nav__item' . ( $has_children ? ' has-dropdown' : '' ) . '">';
			$output .= '<a href="' . esc_url( $item->url ) . '" class="hiref-nav__link">';
			$output .= esc_html( $item->title );
			if ( $has_children ) {
				$output .= '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
			}
			$output .= '</a>';
		} elseif ( $depth === 1 ) {
			$has_sub = is_array( $item->classes ) && in_array( 'menu-item-has-children', $item->classes );
			$output .= '<div class="hiref-dropdown__item' . ( $has_sub ? ' has-submenu' : '' ) . '">';
			$output .= '<a href="' . esc_url( $item->url ) . '" class="hiref-dropdown__link">';
			$output .= '<span class="hiref-dropdown__dot"></span>';
			$output .= esc_html( $item->title );
			if ( $has_sub ) {
				$output .= '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>';
			}
			$output .= '</a>';
		} else {
			$output .= '<a href="' . esc_url( $item->url ) . '" class="hiref-submenu__link">' . esc_html( $item->title ) . '</a>';
		}
	}
	public function end_el( &$output, $item, $depth = 0, $args = null ) {
		if ( $depth === 0 ) {
			$output .= '</div>';
		} elseif ( $depth === 1 ) {
			$output .= '</div>';
		}
	}
}
endif;

function hiref_fallback_nav() {
	echo '<div class="hiref-nav__list">';
	$pages = [
		'About Us'              => '#about',
		'Our Expert'            => '#research',
		'R&D'                   => '#research',
		'Facilities & Services' => '#contact',
		'Vacancy'               => '#contact',
	];
	foreach ( $pages as $label => $href ) {
		echo '<div class="hiref-nav__item"><a href="' . esc_attr( $href ) . '" class="hiref-nav__link">' . esc_html( $label ) . '</a></div>';
	}
	echo '</div>';
}

/* ── Prevent Elementor from overriding header/footer on custom template pages ── */
function hiref_is_custom_template_page() {
	if ( ! is_page() ) return false;
	$meta = get_post_meta( get_the_ID(), '_wp_page_template', true );
	$custom = [
		'page-templates/page-message-from-head.php',
		'page-templates/page-background-vision.php',
		'page-templates/page-academic-staff.php',
		'page-templates/page-meet-our-expert.php',
		'page-templates/page-grants.php',
		'page-templates/page-honor-awards.php',
		'page-templates/page-facilities.php',
		'page-templates/page-services.php',
		'page-templates/page-vacancy.php',
	];
	return in_array( $meta, $custom, true );
}

add_filter( 'elementor/theme/get_location_template', function( $location, $type ) {
	if ( hiref_is_custom_template_page() && in_array( $type, [ 'header', 'footer' ], true ) ) {
		return false;
	}
	return $location;
}, 10, 2 );

add_filter( 'elementor_pro/theme/location/should_render_location', function( $should, $location ) {
	if ( hiref_is_custom_template_page() && in_array( $location, [ 'header', 'footer' ], true ) ) {
		return false;
	}
	return $should;
}, 10, 2 );

/* ── Elementor: remove page title on full-width pages ── */
add_filter( 'the_title', function( $title ) {
	if ( is_singular() && class_exists( '\Elementor\Plugin' ) && is_main_query() ) {
		$doc = \Elementor\Plugin::$instance->documents->get_doc_or_auto_save( get_the_ID() );
		if ( $doc && $doc->is_built_with_elementor() ) {
			$hide = $doc->get_settings( 'hide_title' );
			if ( $hide ) return '';
		}
	}
	return $title;
} );

/* ── Elementor: register template export/import capability ── */
add_filter( 'elementor/template_library/sources/local/register_taxonomy_cpts', function( $cpts ) {
	$cpts[] = 'hiref_news';
	$cpts[] = 'hiref_event';
	return $cpts;
} );
