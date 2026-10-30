<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

class HIREF_Widget_Page_Hero extends Widget_Base {
	public function get_name()       { return 'hiref_page_hero'; }
	public function get_title()      { return 'HIREF Inner Page Hero'; }
	public function get_icon()       { return 'eicon-banner'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Page Hero' ] );
		$this->add_control( 'tag',       [ 'label' => 'Breadcrumb / Tag', 'type' => Controls_Manager::TEXT, 'default' => 'About Us' ] );
		$this->add_control( 'heading',   [ 'label' => 'Page Title',       'type' => Controls_Manager::TEXT, 'default' => 'Message From Head of Research Group' ] );
		$this->add_control( 'sub',       [ 'label' => 'Sub-text',         'type' => Controls_Manager::TEXTAREA, 'default' => '' ] );
		$this->add_control( 'bg_image',  [ 'label' => 'Background Image', 'type' => Controls_Manager::MEDIA, 'default' => [] ] );
		$this->add_control( 'bg_color',  [ 'label' => 'Background Colour (fallback)', 'type' => Controls_Manager::COLOR, 'default' => '#0a0a0a' ] );
		$this->end_controls_section();
	}

	protected function render() {
		$s   = $this->get_settings_for_display();
		$bg  = $s['bg_image']['url'] ?? '';
		$col = $s['bg_color'] ?: '#0a0a0a';
		$style = $bg
			? 'background-image:url(' . esc_url( $bg ) . ');background-color:' . esc_attr( $col ) . ';'
			: 'background-color:' . esc_attr( $col ) . ';';
		?>
		<section class="hiref-page-hero" style="<?php echo $style; // phpcs:ignore WordPress.Security.EscapeOutput ?>">
		  <div class="hiref-page-hero__overlay"></div>
		  <div class="hiref-container hiref-page-hero__content">
		    <?php if ( $s['tag'] ) : ?>
		    <div class="hiref-breadcrumb">
		      <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
		      <span>/</span>
		      <span><?php echo esc_html( $s['tag'] ); ?></span>
		    </div>
		    <?php endif; ?>
		    <h1 class="hiref-page-hero__title"><?php echo esc_html( $s['heading'] ); ?></h1>
		    <?php if ( $s['sub'] ) : ?>
		    <p class="hiref-page-hero__sub"><?php echo esc_html( $s['sub'] ); ?></p>
		    <?php endif; ?>
		  </div>
		</section>
		<?php
	}
}
