<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Background_Vision extends Widget_Base {
	public function get_name()       { return 'hiref_background_vision'; }
	public function get_title()      { return 'HIREF Background, Vision & Mission'; }
	public function get_icon()       { return 'eicon-info-circle'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'background_sec', [ 'label' => 'Background' ] );
		$this->add_control( 'bg_heading', [ 'label' => 'Section Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Background' ] );
		$this->add_control( 'bg_content', [ 'label' => 'Content', 'type' => Controls_Manager::WYSIWYG, 'default' => '<p>HIREF was established to pursue fundamental and applied research in combustion, thermofluids, and high-speed reacting flows.</p>' ] );
		$this->end_controls_section();

		$this->start_controls_section( 'vision_sec', [ 'label' => 'Vision' ] );
		$this->add_control( 'vision_heading', [ 'label' => 'Section Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Vision' ] );
		$this->add_control( 'vision_content', [ 'label' => 'Vision Statement', 'type' => Controls_Manager::TEXTAREA, 'default' => 'To be a world-class research group in thermofluids and reacting flow, contributing to sustainable energy solutions.' ] );
		$this->end_controls_section();

		$this->start_controls_section( 'mission_sec', [ 'label' => 'Mission' ] );
		$this->add_control( 'mission_heading', [ 'label' => 'Section Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Mission' ] );
		$repeater = new Repeater();
		$repeater->add_control( 'item', [ 'label' => 'Mission Item', 'type' => Controls_Manager::TEXTAREA ] );
		$this->add_control( 'mission_items', [
			'label'   => 'Mission Points',
			'type'    => Controls_Manager::REPEATER,
			'fields'  => $repeater->get_controls(),
			'default' => [
				[ 'item' => 'Conduct cutting-edge research in combustion and thermofluids.' ],
				[ 'item' => 'Develop state-of-the-art experimental platforms for reacting flow studies.' ],
				[ 'item' => 'Foster international collaborations and partnerships.' ],
				[ 'item' => 'Train and mentor the next generation of researchers.' ],
			],
			'title_field' => '{{{ item }}}',
		] );
		$this->end_controls_section();

		$this->start_controls_section( 'objectives_sec', [ 'label' => 'Objectives' ] );
		$this->add_control( 'obj_heading', [ 'label' => 'Section Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Objectives' ] );
		$rep2 = new Repeater();
		$rep2->add_control( 'item', [ 'label' => 'Objective', 'type' => Controls_Manager::TEXTAREA ] );
		$this->add_control( 'objective_items', [
			'label'   => 'Objectives',
			'type'    => Controls_Manager::REPEATER,
			'fields'  => $rep2->get_controls(),
			'default' => [
				[ 'item' => 'Publish high-impact research in indexed international journals.' ],
				[ 'item' => 'Secure competitive research grants at national and international levels.' ],
				[ 'item' => 'Translate research findings into patents and commercial applications.' ],
			],
			'title_field' => '{{{ item }}}',
		] );
		$this->end_controls_section();
	}

	protected function render() {
		$s = $this->get_settings_for_display();
		?>
		<section class="hiref-page-content">
		  <div class="hiref-container">

		    <div class="hiref-bvm__block">
		      <h2 class="hiref-bvm__heading"><?php echo esc_html( $s['bg_heading'] ); ?></h2>
		      <div class="hiref-prose"><?php echo wp_kses_post( $s['bg_content'] ); ?></div>
		    </div>

		    <div class="hiref-bvm__cards">
		      <div class="hiref-bvm__card hiref-bvm__card--vision">
		        <div class="hiref-bvm__card-icon">
		          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M2 12c2.667-5.333 5.333-8 10-8s7.333 2.667 10 8c-2.667 5.333-5.333 8-10 8s-7.333-2.667-10-8z"/></svg>
		        </div>
		        <h3><?php echo esc_html( $s['vision_heading'] ); ?></h3>
		        <p><?php echo esc_html( $s['vision_content'] ); ?></p>
		      </div>

		      <div class="hiref-bvm__card hiref-bvm__card--mission">
		        <div class="hiref-bvm__card-icon">
		          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
		        </div>
		        <h3><?php echo esc_html( $s['mission_heading'] ); ?></h3>
		        <ul>
		          <?php foreach ( $s['mission_items'] as $m ) : ?>
		          <li><?php echo esc_html( $m['item'] ); ?></li>
		          <?php endforeach; ?>
		        </ul>
		      </div>

		      <div class="hiref-bvm__card hiref-bvm__card--objectives">
		        <div class="hiref-bvm__card-icon">
		          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
		        </div>
		        <h3><?php echo esc_html( $s['obj_heading'] ); ?></h3>
		        <ul>
		          <?php foreach ( $s['objective_items'] as $o ) : ?>
		          <li><?php echo esc_html( $o['item'] ); ?></li>
		          <?php endforeach; ?>
		        </ul>
		      </div>
		    </div>

		  </div>
		</section>
		<?php
	}
}
