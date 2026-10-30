<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Facilities extends Widget_Base {
	public function get_name()       { return 'hiref_facilities'; }
	public function get_title()      { return 'HIREF Facilities'; }
	public function get_icon()       { return 'eicon-image-box'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Facilities' ] );
		$this->add_control( 'use_cpt', [ 'label' => 'Pull from Facilities CPT', 'type' => Controls_Manager::SWITCHER, 'default' => 'yes' ] );
		$this->add_control( 'section_label', [ 'label' => 'Tag',     'type' => Controls_Manager::TEXT, 'default' => 'Lab Infrastructure' ] );
		$this->add_control( 'heading',       [ 'label' => 'Heading', 'type' => Controls_Manager::TEXT, 'default' => 'HiREF Facilities' ] );

		$repeater = new Repeater();
		$repeater->add_control( 'name',  [ 'label' => 'Facility Name', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'desc',  [ 'label' => 'Description',   'type' => Controls_Manager::TEXTAREA ] );
		$repeater->add_control( 'photo', [ 'label' => 'Photo',         'type' => Controls_Manager::MEDIA ] );
		$repeater->add_control( 'lab',   [ 'label' => 'Lab / Location','type' => Controls_Manager::TEXT ] );

		$this->add_control( 'facilities', [
			'label'       => 'Facilities',
			'type'        => Controls_Manager::REPEATER,
			'fields'      => $repeater->get_controls(),
			'condition'   => [ 'use_cpt!' => 'yes' ],
			'default'     => [],
			'title_field' => '{{{ name }}}',
		] );
		$this->end_controls_section();
	}

	protected function render() {
		$s    = $this->get_settings_for_display();
		$list = [];

		if ( $s['use_cpt'] === 'yes' ) {
			$posts = get_posts( [ 'post_type' => 'hiref_facility', 'posts_per_page' => -1, 'orderby' => 'menu_order', 'order' => 'ASC' ] );
			foreach ( $posts as $p ) {
				$list[] = [
					'name'  => get_the_title( $p->ID ),
					'desc'  => get_the_excerpt( $p->ID ),
					'photo' => [ 'url' => get_the_post_thumbnail_url( $p->ID, 'large' ) ],
					'lab'   => get_post_meta( $p->ID, '_hiref_lab', true ),
				];
			}
		} else {
			$list = $s['facilities'] ?? [];
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
		    <div class="hiref-facilities__grid">
		      <?php if ( empty( $list ) ) : ?>
		      <p class="hiref-body">No facilities found. Add entries via Elementor or the Facilities CPT.</p>
		      <?php else : ?>
		      <?php foreach ( $list as $fac ) :
		        $photo = is_array( $fac['photo'] ) ? ( $fac['photo']['url'] ?? '' ) : '';
		      ?>
		      <div class="hiref-facility-card">
		        <?php if ( $photo ) : ?>
		        <div class="hiref-facility-card__img">
		          <img src="<?php echo esc_url( $photo ); ?>" alt="<?php echo esc_attr( $fac['name'] ); ?>" loading="lazy" />
		        </div>
		        <?php endif; ?>
		        <div class="hiref-facility-card__body">
		          <h3 class="hiref-facility-card__name"><?php echo esc_html( $fac['name'] ); ?></h3>
		          <?php if ( $fac['lab'] ) : ?>
		          <p class="hiref-facility-card__lab"><?php echo esc_html( $fac['lab'] ); ?></p>
		          <?php endif; ?>
		          <?php if ( $fac['desc'] ) : ?>
		          <p class="hiref-facility-card__desc"><?php echo esc_html( $fac['desc'] ); ?></p>
		          <?php endif; ?>
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
