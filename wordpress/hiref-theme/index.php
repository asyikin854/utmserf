<?php get_header(); ?>
<main class="hiref-page-content">
  <div class="hiref-container hiref-container--narrow">
    <?php while ( have_posts() ) : the_post(); ?>
      <article>
        <h1 class="hiref-heading"><?php the_title(); ?></h1>
        <div class="hiref-prose"><?php the_content(); ?></div>
      </article>
    <?php endwhile; ?>
  </div>
</main>
<?php get_footer(); ?>
