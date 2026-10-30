<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

class HIREF_Widget_Message_Head extends Widget_Base {
	public function get_name()       { return 'hiref_message_head'; }
	public function get_title()      { return 'HIREF Message From Head'; }
	public function get_icon()       { return 'eicon-person'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Message From Head' ] );
		$this->add_control( 'name',       [ 'label' => 'Name',       'type' => Controls_Manager::TEXT,    'default' => 'Prof. Dr. Mazlan Abdul Wahid' ] );
		$this->add_control( 'position',   [ 'label' => 'Position',   'type' => Controls_Manager::TEXT,    'default' => 'Head of Research Group, HIREF UTM' ] );
		$this->add_control( 'photo',      [ 'label' => 'Photo',      'type' => Controls_Manager::MEDIA,   'default' => [] ] );
		$this->add_control( 'message',    [ 'label' => 'Message',    'type' => Controls_Manager::WYSIWYG, 'default' => '<p>Welcome to the High Speed Reacting Flow Laboratory (HIREF) at Universiti Teknologi Malaysia.</p><p>Our research group is dedicated to advancing the frontiers of combustion science, thermofluids, and supersonic reacting flow research.</p>' ] );
		$this->add_control( 'signature',  [ 'label' => 'Signature Image (optional)', 'type' => Controls_Manager::MEDIA, 'default' => [] ] );
		$this->end_controls_section();
	}

	protected function render() {
		$s     = $this->get_settings_for_display();
		$photo = $s['photo']['url'] ?? '';
		$sig   = $s['signature']['url'] ?? '';
		?>
		<section class="hiref-page-content">
		  <div class="hiref-container">
		    <div class="hiref-message-head__grid">
		      <div class="hiref-message-head__photo-col">
		        <?php if ( $photo ) : ?>
		        <div class="hiref-message-head__photo">
		          <img src="<?php echo esc_url( $photo ); ?>" alt="<?php echo esc_attr( $s['name'] ); ?>" />
		        </div>
		        <?php endif; ?>
		        <div class="hiref-message-head__id">
		          <strong><?php echo esc_html( $s['name'] ); ?></strong>
		          <span><?php echo esc_html( $s['position'] ); ?></span>
		        </div>
		      </div>
		      <div class="hiref-message-head__content">
		        <span class="hiref-label">Message From Head</span>
		        <div class="hiref-prose"><?php echo wp_kses_post( $s['message'] ); ?></div>
		        <?php if ( $sig ) : ?>
		        <img src="<?php echo esc_url( $sig ); ?>" alt="Signature" class="hiref-message-head__sig" />
		        <?php endif; ?>
		        <p class="hiref-message-head__sign-name"><strong><?php echo esc_html( $s['name'] ); ?></strong></p>
		        <p class="hiref-message-head__sign-pos"><?php echo esc_html( $s['position'] ); ?></p>
		      </div>
		    </div>
		  </div>
		</section>
		<?php
	}
}
