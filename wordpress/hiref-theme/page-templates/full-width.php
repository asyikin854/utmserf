<?php
/**
 * Template Name: Full Width
 * Template Post Type: page
 *
 * Full-width page with theme header and footer but no sidebar.
 */
defined( 'ABSPATH' ) || exit;
get_header();
?>
<main class="hiref-page-content hiref-page-content--full">
	<div class="hiref-container">
		<?php while ( have_posts() ) : the_post(); ?>
		<article <?php post_class(); ?>>
			<h1 class="hiref-heading"><?php the_title(); ?></h1>
			<div class="hiref-prose"><?php the_content(); ?></div>
		</article>
		<?php endwhile; ?>
	</div>
</main>
<?php get_footer(); ?>
