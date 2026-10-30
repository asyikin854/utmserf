<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

class HIREF_Widget_About extends Widget_Base {
	public function get_name()        { return 'hiref_about'; }
	public function get_title()       { return 'HIREF About Section'; }
	public function get_icon()        { return 'eicon-info-circle'; }
	public function get_categories()  { return [ 'hiref' ]; }
	public function get_keywords()    { return [ 'about', 'hiref', 'who we are' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Content' ] );
		$this->add_control( 'section_label', [ 'label' => 'Tag', 'type' => Controls_Manager::TEXT, 'default' => 'Who We Are' ] );
		$this->add_control( 'heading', [ 'label' => 'Heading', 'type' => Controls_Manager::TEXT, 'default' => 'High Speed Reacting Flow Laboratory' ] );
		$this->add_control( 'body1', [ 'label' => 'Paragraph 1', 'type' => Controls_Manager::TEXTAREA,
			'default' => 'HIREF is dedicated to developing accurate turbulence and thermochemical models for diverse combustion applications. We build state-of-the-art experimental platforms for supersonic shock wave investigations.' ] );
		$this->add_control( 'body2', [ 'label' => 'Paragraph 2', 'type' => Controls_Manager::TEXTAREA,
			'default' => 'We actively conduct fundamental and applied research in Combustion, Heat Transfer, Microscale Reacting Flow, Supersonic Combustion, and Flame-based Synthesis of Nanomaterials.' ] );
		$this->add_control( 'cta_link', [ 'label' => 'CTA Link', 'type' => Controls_Manager::URL, 'default' => [ 'url' => '#research' ] ] );
		$this->end_controls_section();
	}

	protected function render() {
		$s = $this->get_settings_for_display();
		$groups = [
			[ 'name' => 'SERF',  'full' => 'Sustainable Energy and Reacting Flow Research Group', 'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/07/SERF-2.png',              'color' => 'orange' ],
			[ 'name' => 'HIREF', 'full' => 'High Speed Reacting Flow Laboratory',                  'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2023/12/HIREFLogo_WhiteFont-1-300x249.png', 'color' => 'sky' ],
			[ 'name' => 'GTC',   'full' => 'Gas Turbine Combustion Research Group',                'img' => 'https://mech.utm.my/hiref/wp-content/uploads/sites/220/2024/07/GTCRG-Logo-298x300.jpg', 'color' => 'emerald' ],
		];
		?>
		<section class="hiref-section hiref-section--white" id="about">
		  <div class="hiref-container">
		    <div class="hiref-about__grid">
		      <div class="hiref-about__copy">
		        <span class="hiref-label"><?php echo esc_html( $s['section_label'] ); ?></span>
		        <h2 class="hiref-heading"><?php echo esc_html( $s['heading'] ); ?></h2>
		        <p class="hiref-body hiref-body--lg"><?php echo esc_html( $s['body1'] ); ?></p>
		        <p class="hiref-body"><?php echo esc_html( $s['body2'] ); ?></p>
		        <a href="<?php echo esc_url( $s['cta_link']['url'] ?? '#research' ); ?>" class="hiref-link hiref-link--orange hiref-link--arrow" style="margin-top:8px;display:inline-flex;">
		          View Research Areas
		          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
		        </a>
		      </div>
		      <div class="hiref-about__groups">
		        <?php foreach ( $groups as $g ) : ?>
		        <div class="hiref-group-card">
		          <div class="hiref-group-card__icon hiref-group-card__icon--<?php echo esc_attr( $g['color'] ); ?>">
		            <img src="<?php echo esc_url( $g['img'] ); ?>" alt="<?php echo esc_attr( $g['name'] ); ?>"
		              onerror="this.style.display='none';this.parentElement.innerHTML='<span><?php echo esc_attr( $g['name'] ); ?></span>'" />
		          </div>
		          <div class="hiref-group-card__info">
		            <p class="hiref-group-card__name"><?php echo esc_html( $g['name'] ); ?></p>
		            <p class="hiref-group-card__full"><?php echo esc_html( $g['full'] ); ?></p>
		          </div>
		          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
		        </div>
		        <?php endforeach; ?>
		        <div class="hiref-about__utm-note">
		          Part of the <strong>School of Mechanical Engineering</strong>, Universiti Teknologi Malaysia (UTM) — one of Malaysia's premier research universities.
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
		<?php
	}
}
