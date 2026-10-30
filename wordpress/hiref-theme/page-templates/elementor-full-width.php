<?php
/**
 * Template Name: Elementor Full Width (No Header/Footer)
 * Template Post Type: page
 *
 * Used for pages built entirely with Elementor that supply their own
 * header and footer via Elementor Theme Builder.
 */
defined( 'ABSPATH' ) || exit;
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php wp_head(); ?>
</head>
<body <?php body_class( 'hiref-elementor-canvas' ); ?>>
<?php wp_body_open(); ?>
<?php while ( have_posts() ) : the_post(); the_content(); endwhile; ?>
<?php wp_footer(); ?>
</body>
</html>
