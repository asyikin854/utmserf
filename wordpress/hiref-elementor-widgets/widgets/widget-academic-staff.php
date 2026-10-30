<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;

class HIREF_Widget_Academic_Staff extends Widget_Base {
	public function get_name()       { return 'hiref_academic_staff'; }
	public function get_title()      { return 'HIREF Academic Staff'; }
	public function get_icon()       { return 'eicon-gallery-grid'; }
	public function get_categories() { return [ 'hiref' ]; }

	protected function register_controls() {
		$this->start_controls_section( 'content', [ 'label' => 'Academic Staff' ] );
		$this->add_control( 'use_cpt', [ 'label' => 'Pull from Staff CPT', 'type' => Controls_Manager::SWITCHER, 'default' => 'yes' ] );
		$this->add_control( 'section_label', [ 'label' => 'Tag',     'type' => Controls_Manager::TEXT, 'default' => 'Organization Structure' ] );
		$this->add_control( 'heading',       [ 'label' => 'Heading', 'type' => Controls_Manager::TEXT, 'default' => 'Academic Staff' ] );

		$repeater = new Repeater();
		$repeater->add_control( 'name',        [ 'label' => 'Name',        'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'title',       [ 'label' => 'Title',       'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'specialisation', [ 'label' => 'Specialisation', 'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'email',       [ 'label' => 'Email',       'type' => Controls_Manager::TEXT ] );
		$repeater->add_control( 'photo',       [ 'label' => 'Photo',       'type' => Controls_Manager::MEDIA ] );
		$this->add_control( 'staff', [
			'label'       => 'Staff Members',
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
			$posts = get_posts( [ 'post_type' => 'hiref_staff', 'posts_per_page' => -1, 'orderby' => 'menu_order', 'order' => 'ASC' ] );
			foreach ( $posts as $p ) {
				$list[] = [
					'name'           => get_the_title( $p->ID ),
					'title'          => get_post_meta( $p->ID, '_hiref_title', true ),
					'specialisation' => get_post_meta( $p->ID, '_hiref_specialisation', true ),
					'email'          => get_post_meta( $p->ID, '_hiref_email', true ),
					'photo'          => [ 'url' => get_the_post_thumbnail_url( $p->ID, 'medium' ) ],
				];
			}
		} else {
			$list = $s['staff'] ?? [];
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
		    <div class="hiref-staff__grid">
		      <?php foreach ( $list as $member ) :
		        $photo = is_array( $member['photo'] ) ? ( $member['photo']['url'] ?? '' ) : '';
		      ?>
		      <div class="hiref-staff-card">
		        <div class="hiref-staff-card__photo">
		          <?php if ( $photo ) : ?>
		          <img src="<?php echo esc_url( $photo ); ?>" alt="<?php echo esc_attr( $member['name'] ); ?>" loading="lazy" />
		          <?php else : ?>
		          <div class="hiref-staff-card__avatar"><?php echo esc_html( mb_substr( $member['name'], 0, 1 ) ); ?></div>
		          <?php endif; ?>
		        </div>
		        <div class="hiref-staff-card__info">
		          <p class="hiref-staff-card__name"><?php echo esc_html( $member['name'] ); ?></p>
		          <?php if ( $member['title'] ) : ?>
		          <p class="hiref-staff-card__title"><?php echo esc_html( $member['title'] ); ?></p>
		          <?php endif; ?>
		          <?php if ( $member['specialisation'] ) : ?>
		          <p class="hiref-staff-card__spec"><?php echo esc_html( $member['specialisation'] ); ?></p>
		          <?php endif; ?>
		          <?php if ( $member['email'] ) : ?>
		          <a href="mailto:<?php echo esc_attr( $member['email'] ); ?>" class="hiref-staff-card__email"><?php echo esc_html( $member['email'] ); ?></a>
		          <?php endif; ?>
		        </div>
		      </div>
		      <?php endforeach; ?>
		    </div>
		  </div>
		</section>
		<?php
	}
}
