<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Experts extends Widget_Base {
	public function get_name()       { return 'hiref_experts'; }
	public function get_title()      { return 'HIREF Meet Our Expert'; }
	public function get_icon()       { return 'eicon-person'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Experts' ] );
		$this->add_control( 'section_label', [ 'label' => 'Tag',     'type' => Controls_Manager::TEXT, 'default' => 'Our Expert' ] );
		$this->add_control( 'heading',       [ 'label' => 'Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Meet Our Expert' ] );

		$repeater = new Repeater();
		$repeater->add_control( 'name',      [ 'label' => 'Name',      'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'position',  [ 'label' => 'Position',  'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'expertise', [ 'label' => 'Expertise', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'bio',       [ 'label' => 'Short Bio', 'type' => Controls_Manager::TEXTAREA ] );
		$repeater->add_control( 'photo',     [ 'label' => 'Photo',     'type' => Controls_Manager::MEDIA ] );
		$repeater->add_control( 'email',     [ 'label' => 'Email',     'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'google_scholar', [ 'label' => 'Google Scholar URL', 'type' => Controls_Manager::URL ] );
		$repeater->add_control( 'scopus',    [ 'label' => 'Scopus URL', 'type' => Controls_Manager::URL ] );

		$this->add_control( 'experts', [
			'label'       => 'Experts',
			'type'        => Controls_Manager::REPEATER,
			'fields'      => $repeater->get_controls(),
			'default'     => [
				[ 'name' => 'Prof. Dr. Mazlan Abdul Wahid', 'position' => 'Professor, Head of HIREF', 'expertise' => 'Turbulent Combustion, Flame Dynamics' ],
				[ 'name' => 'Dr. Mohd Fairus Mohd Yasin',  'position' => 'Senior Lecturer',          'expertise' => 'Heat Transfer, Reacting Flows' ],
			],
			'title_field' => '{{{ name }}}',
		] );
		$this->end_controls_section();
	}

	protected function render() {
		$s = $this->get_settings_for_display();
		?>
		<section class="hiref-page-content">
		  <div class="hiref-container">
		    <div class="hiref-section__header">
		      <div>
		        <span class="hiref-label"><?php echo esc_html( $s['section_label'] ); ?></span>
		        <h2 class="hiref-heading"><?php echo esc_html( $s['heading'] ); ?></h2>
		      </div>
		    </div>
		    <div class="hiref-experts__list">
		      <?php foreach ( $s['experts'] as $expert ) :
		        $photo  = is_array( $expert['photo'] ) ? ( $expert['photo']['url'] ?? '' ) : '';
		        $gs_url = is_array( $expert['google_scholar'] ) ? ( $expert['google_scholar']['url'] ?? '' ) : '';
		        $sc_url = is_array( $expert['scopus'] ) ? ( $expert['scopus']['url'] ?? '' ) : '';
		      ?>
		      <div class="hiref-expert-card">
		        <div class="hiref-expert-card__photo">
		          <?php if ( $photo ) : ?>
		          <img src="<?php echo esc_url( $photo ); ?>" alt="<?php echo esc_attr( $expert['name'] ); ?>" loading="lazy" />
		          <?php else : ?>
		          <div class="hiref-expert-card__avatar"><?php echo esc_html( mb_substr( $expert['name'], 0, 1 ) ); ?></div>
		          <?php endif; ?>
		        </div>
		        <div class="hiref-expert-card__body">
		          <h3 class="hiref-expert-card__name"><?php echo esc_html( $expert['name'] ); ?></h3>
		          <p class="hiref-expert-card__pos"><?php echo esc_html( $expert['position'] ); ?></p>
		          <?php if ( $expert['expertise'] ) : ?>
		          <p class="hiref-expert-card__expertise">
		            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/></svg>
		            <?php echo esc_html( $expert['expertise'] ); ?>
		          </p>
		          <?php endif; ?>
		          <?php if ( $expert['bio'] ) : ?>
		          <p class="hiref-expert-card__bio"><?php echo esc_html( $expert['bio'] ); ?></p>
		          <?php endif; ?>
		          <div class="hiref-expert-card__links">
		            <?php if ( $expert['email'] ) : ?>
		            <a href="mailto:<?php echo esc_attr( $expert['email'] ); ?>" class="hiref-expert-card__link">Email</a>
		            <?php endif; ?>
		            <?php if ( $gs_url ) : ?>
		            <a href="<?php echo esc_url( $gs_url ); ?>" target="_blank" rel="noopener noreferrer" class="hiref-expert-card__link">Google Scholar</a>
		            <?php endif; ?>
		            <?php if ( $sc_url ) : ?>
		            <a href="<?php echo esc_url( $sc_url ); ?>" target="_blank" rel="noopener noreferrer" class="hiref-expert-card__link">Scopus</a>
		            <?php endif; ?>
		          </div>
		        </div>
		      </div>
		      <?php endforeach; ?>
		    </div>
		  </div>
		</section>
		<?php
	}
}
