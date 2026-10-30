<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Vacancy extends Widget_Base {
	public function get_name()       { return 'hiref_vacancy'; }
	public function get_title()      { return 'HIREF Vacancy'; }
	public function get_icon()       { return 'eicon-document'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Vacancy' ] );
		$this->add_control( 'use_cpt', [ 'label' => 'Pull from Vacancy CPT', 'type' => Controls_Manager::SWITCHER, 'default' => 'yes' ] );
		$this->add_control( 'section_label', [ 'label' => 'Tag',     'type' => Controls_Manager::TEXT, 'default' => 'Join Our Team' ] );
		$this->add_control( 'heading',       [ 'label' => 'Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Vacancy' ] );
		$this->add_control( 'intro', [ 'label' => 'Intro',  'type' => Controls_Manager::TEXTAREA,
			'default' => 'We are always looking for passionate researchers and students to join our team. Explore current openings below.' ] );

		$repeater = new Repeater();
		$repeater->add_control( 'title',       [ 'label' => 'Position Title', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'type',        [ 'label' => 'Type', 'type' => Controls_Manager::SELECT,
			'options' => [ 'phd' => 'PhD', 'master' => 'Master', 'internship' => 'Internship', 'postdoc' => 'Post-doctoral' ], 'default' => 'phd' ] );
		$repeater->add_control( 'stipend',     [ 'label' => 'Stipend / Allowance', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'requirement', [ 'label' => 'Requirements',        'type' => Controls_Manager::TEXTAREA ] );
		$repeater->add_control( 'closing',     [ 'label' => 'Closing Date',        'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'apply_link',  [ 'label' => 'Apply / Contact Link','type' => Controls_Manager::URL ] );

		$this->add_control( 'vacancies', [
			'label'       => 'Vacancies',
			'type'        => Controls_Manager::REPEATER,
			'fields'      => $repeater->get_controls(),
			'condition'   => [ 'use_cpt!' => 'yes' ],
			'default'     => [
				[ 'title' => 'PhD Scholarship — Combustion Research', 'type' => 'phd', 'stipend' => 'RM 2,000/month', 'closing' => 'Open until filled' ],
				[ 'title' => 'Master Scholarship — Heat Transfer',    'type' => 'master', 'stipend' => 'RM 1,500/month', 'closing' => 'Open until filled' ],
				[ 'title' => 'Internship — Mechanical Engineering',   'type' => 'internship', 'stipend' => 'RM 500/month', 'closing' => 'Open until filled' ],
			],
			'title_field' => '{{{ title }}}',
		] );
		$this->end_controls_section();
	}

	protected function render() {
		$s    = $this->get_settings_for_display();
		$list = [];

		if ( $s['use_cpt'] === 'yes' ) {
			$posts = get_posts( [ 'post_type' => 'hiref_vacancy', 'posts_per_page' => -1, 'orderby' => 'date', 'order' => 'DESC' ] );
			foreach ( $posts as $p ) {
				$apply = get_post_meta( $p->ID, '_hiref_apply_link', true );
				$list[] = [
					'title'       => get_the_title( $p->ID ),
					'type'        => get_post_meta( $p->ID, '_hiref_type', true ) ?: 'phd',
					'stipend'     => get_post_meta( $p->ID, '_hiref_stipend', true ),
					'requirement' => get_the_excerpt( $p->ID ),
					'closing'     => get_post_meta( $p->ID, '_hiref_closing', true ),
					'apply_link'  => [ 'url' => $apply ],
				];
			}
			if ( empty( $list ) ) $list = $s['vacancies'] ?? [];
		} else {
			$list = $s['vacancies'] ?? [];
		}

		$type_labels = [ 'phd' => 'PhD', 'master' => 'Master', 'internship' => 'Internship', 'postdoc' => 'Post-doctoral' ];
		?>
		<section class="hiref-page-content">
		  <div class="hiref-container">
		    <div class="hiref-section__header">
		      <div>
		        <span class="hiref-label"><?php echo esc_html( $s['section_label'] ); ?></span>
		        <h2 class="hiref-heading"><?php echo esc_html( $s['heading'] ); ?></h2>
		      </div>
		      <?php if ( $s['intro'] ) : ?>
		      <p class="hiref-section__desc"><?php echo esc_html( $s['intro'] ); ?></p>
		      <?php endif; ?>
		    </div>
		    <div class="hiref-vacancy__list">
		      <?php foreach ( $list as $v ) :
		        $type_key  = $v['type'] ?? 'phd';
		        $type_lbl  = $type_labels[ $type_key ] ?? $type_key;
		        $apply_url = is_array( $v['apply_link'] ) ? ( $v['apply_link']['url'] ?? '' ) : '';
		      ?>
		      <div class="hiref-vacancy-card">
		        <div class="hiref-vacancy-card__header">
		          <h3 class="hiref-vacancy-card__title"><?php echo esc_html( $v['title'] ); ?></h3>
		          <span class="hiref-badge hiref-badge--<?php echo esc_attr( $type_key ); ?>"><?php echo esc_html( $type_lbl ); ?></span>
		        </div>
		        <div class="hiref-vacancy-card__meta">
		          <?php if ( ! empty( $v['stipend'] ) ) : ?>
		          <span>
		            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
		            <?php echo esc_html( $v['stipend'] ); ?>
		          </span>
		          <?php endif; ?>
		          <?php if ( ! empty( $v['closing'] ) ) : ?>
		          <span>
		            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
		            Closing: <?php echo esc_html( $v['closing'] ); ?>
		          </span>
		          <?php endif; ?>
		        </div>
		        <?php if ( ! empty( $v['requirement'] ) ) : ?>
		        <p class="hiref-vacancy-card__req"><?php echo esc_html( $v['requirement'] ); ?></p>
		        <?php endif; ?>
		        <?php if ( $apply_url ) : ?>
		        <a href="<?php echo esc_url( $apply_url ); ?>" target="_blank" rel="noopener noreferrer" class="hiref-btn hiref-btn--primary hiref-btn--sm">Apply Now</a>
		        <?php else : ?>
		        <a href="mailto:<?php echo esc_attr( hiref_option( 'hiref_email', 'hirefofficial@gmail.com' ) ); ?>" class="hiref-btn hiref-btn--primary hiref-btn--sm">Contact Us</a>
		        <?php endif; ?>
		      </div>
		      <?php endforeach; ?>
		    </div>
		  </div>
		</section>
		<?php
	}
}
