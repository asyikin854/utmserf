<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Honors extends Widget_Base {
	public function get_name()       { return 'hiref_honors'; }
	public function get_title()      { return 'HIREF Honor & Awards'; }
	public function get_icon()       { return 'eicon-star'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Honor & Awards' ] );
		$this->add_control( 'use_cpt', [ 'label' => 'Pull from Awards CPT', 'type' => Controls_Manager::SWITCHER, 'default' => 'yes' ] );
		$this->add_control( 'section_label', [ 'label' => 'Tag',     'type' => Controls_Manager::TEXT, 'default' => 'Recognition' ] );
		$this->add_control( 'heading',       [ 'label' => 'Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Honor & Awards' ] );

		$repeater = new Repeater();
		$repeater->add_control( 'year',       [ 'label' => 'Year',       'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'award',      [ 'label' => 'Award Name', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'recipient',  [ 'label' => 'Recipient',  'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'event',      [ 'label' => 'Event / Competition', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'level',      [ 'label' => 'Level', 'type' => Controls_Manager::SELECT,
			'options' => [ 'international' => 'International', 'national' => 'National', 'university' => 'University' ], 'default' => 'national' ] );

		$this->add_control( 'awards', [
			'label'       => 'Awards',
			'type'        => Controls_Manager::REPEATER,
			'fields'      => $repeater->get_controls(),
			'condition'   => [ 'use_cpt!' => 'yes' ],
			'default'     => [],
			'title_field' => '{{{ year }}} — {{{ award }}}',
		] );
		$this->end_controls_section();
	}

	protected function render() {
		$s    = $this->get_settings_for_display();
		$list = [];

		if ( $s['use_cpt'] === 'yes' ) {
			$posts = get_posts( [ 'post_type' => 'hiref_award', 'posts_per_page' => -1, 'orderby' => 'date', 'order' => 'DESC' ] );
			foreach ( $posts as $p ) {
				$list[] = [
					'year'      => get_post_meta( $p->ID, '_hiref_year', true ),
					'award'     => get_the_title( $p->ID ),
					'recipient' => get_post_meta( $p->ID, '_hiref_recipient', true ),
					'event'     => get_post_meta( $p->ID, '_hiref_event', true ),
					'level'     => get_post_meta( $p->ID, '_hiref_level', true ) ?: 'national',
				];
			}
		} else {
			$list = $s['awards'] ?? [];
		}
		?>
		<section class="hiref-page-content">
		  <div class="hiref-container">
		    <div class="hiref-section__header">
		      <div>
		        <span class="hiref-label"><?php echo esc_html( $s['section_label'] ); ?></span>
		        <h2 class="hiref-heading"><?php echo esc_html( $s['heading'] ); ?></h2>
		      </div>
		    </div>
		    <div class="hiref-awards__timeline">
		      <?php if ( empty( $list ) ) : ?>
		      <p class="hiref-body">No awards found. Add entries via Elementor or the Awards CPT.</p>
		      <?php else : ?>
		      <?php foreach ( $list as $a ) : ?>
		      <div class="hiref-award-row">
		        <div class="hiref-award-row__year"><?php echo esc_html( $a['year'] ); ?></div>
		        <div class="hiref-award-row__dot"></div>
		        <div class="hiref-award-row__body">
		          <p class="hiref-award-row__name"><?php echo esc_html( $a['award'] ); ?></p>
		          <?php if ( $a['recipient'] ) : ?>
		          <p class="hiref-award-row__recipient"><?php echo esc_html( $a['recipient'] ); ?></p>
		          <?php endif; ?>
		          <?php if ( $a['event'] ) : ?>
		          <p class="hiref-award-row__event"><?php echo esc_html( $a['event'] ); ?></p>
		          <?php endif; ?>
		          <span class="hiref-badge hiref-badge--<?php echo esc_attr( $a['level'] ); ?>"><?php echo esc_html( ucfirst( $a['level'] ) ); ?></span>
		        </div>
		      </div>
		      <?php endforeach; ?>
		      <?php endif; ?>
		    </div>
		  </div>
		</section>
		<?php
	}
}
