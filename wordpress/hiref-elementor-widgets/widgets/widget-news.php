<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

class HIREF_Widget_News extends Widget_Base {
    public function get_name()  { return 'hiref_news'; }
    public function get_title() { return 'HIREF News Grid'; }
    public function get_icon()  { return 'eicon-posts-grid'; }
    public function get_categories() { return [ 'hiref' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content', [ 'label' => 'News Settings' ] );
        $this->add_control( 'count', [ 'label' => 'Number of posts', 'type' => Controls_Manager::NUMBER, 'default' => 3, 'min' => 1, 'max' => 12 ] );
        $this->add_control( 'all_link', [ 'label' => '"All News" URL', 'type' => Controls_Manager::URL, 'default' => [ 'url' => '' ] ] );
        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $news = get_posts( [ 'post_type' => [ 'hiref_news', 'post' ], 'posts_per_page' => intval( $settings['count'] ) ] );
        $all_url = $settings['all_link']['url'] ?: get_post_type_archive_link( 'hiref_news' );
        ?>
        <section class="hiref-section hiref-section--white" id="news">
          <div class="hiref-container">
            <div class="hiref-section__header">
              <div>
                <span class="hiref-label">Latest Updates</span>
                <h2 class="hiref-heading">News</h2>
              </div>
              <?php if ( $all_url ) : ?>
              <a href="<?php echo esc_url( $all_url ); ?>" class="hiref-link hiref-link--arrow hiref-link--muted">
                All News <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <?php endif; ?>
            </div>
            <div class="hiref-news__grid">
              <?php foreach ( $news as $item ) :
                $tag  = get_post_meta( $item->ID, '_hiref_tag', true )  ?: 'News';
                $date = get_post_meta( $item->ID, '_hiref_date', true ) ?: get_the_date( 'M j, Y', $item->ID );
                $img  = get_the_post_thumbnail_url( $item->ID, 'medium_large' ) ?: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=640';
              ?>
              <article class="hiref-news-card">
                <a href="<?php echo esc_url( get_permalink( $item->ID ) ); ?>" class="hiref-news-card__img-wrap">
                  <img src="<?php echo esc_url( $img ); ?>" alt="<?php echo esc_attr( get_the_title( $item->ID ) ); ?>" loading="lazy" />
                  <span class="hiref-news-card__tag"><?php echo esc_html( $tag ); ?></span>
                </a>
                <div class="hiref-news-card__body">
                  <time class="hiref-news-card__date"><?php echo esc_html( $date ); ?></time>
                  <h3 class="hiref-news-card__title"><a href="<?php echo esc_url( get_permalink( $item->ID ) ); ?>"><?php echo esc_html( get_the_title( $item->ID ) ); ?></a></h3>
                  <p class="hiref-news-card__excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt( $item->ID ), 25 ) ); ?></p>
                  <a href="<?php echo esc_url( get_permalink( $item->ID ) ); ?>" class="hiref-news-card__more">
                    Read more <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </article>
              <?php endforeach; ?>
            </div>
          </div>
        </section>
        <?php
    }
}
