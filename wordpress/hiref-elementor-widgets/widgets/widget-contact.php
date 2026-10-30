<?php
defined( 'ABSPATH' ) || exit;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

class HIREF_Widget_Contact extends Widget_Base {
    public function get_name()  { return 'hiref_contact'; }
    public function get_title() { return 'HIREF Contact Section'; }
    public function get_icon()  { return 'eicon-map-pin'; }
    public function get_categories() { return [ 'hiref' ]; }

    protected function register_controls() {
        $this->start_controls_section( 'content', [ 'label' => 'Contact Info' ] );
        $this->add_control( 'phone1',    [ 'label' => 'Phone 1', 'type' => Controls_Manager::TEXT, 'default' => 'Prof Dr Mazlan: +607 555 7036' ] );
        $this->add_control( 'phone2',    [ 'label' => 'Phone 2', 'type' => Controls_Manager::TEXT, 'default' => 'Dr Mohd Fairus: +607 553 4574' ] );
        $this->add_control( 'email',     [ 'label' => 'Email', 'type' => Controls_Manager::TEXT, 'default' => 'hirefofficial@gmail.com' ] );
        $this->add_control( 'address',   [ 'label' => 'Address', 'type' => Controls_Manager::TEXTAREA, 'default' => "HiREF, Block E06, Faculty of Mechanical Engineering\nUniversiti Teknologi Malaysia\n81310 Skudai, Johor" ] );
        $this->add_control( 'linkedin',  [ 'label' => 'LinkedIn URL', 'type' => Controls_Manager::URL ] );
        $this->add_control( 'facebook',  [ 'label' => 'Facebook URL', 'type' => Controls_Manager::URL ] );
        $this->end_controls_section();
    }

    protected function render() {
        $s = $this->get_settings_for_display();
        ?>
        <section class="hiref-section hiref-section--gray" id="contact">
          <div class="hiref-container">
            <div class="hiref-contact__grid">
              <div class="hiref-contact__info">
                <span class="hiref-label">Get in Touch</span>
                <h2 class="hiref-heading">Contact Us</h2>
                <p class="hiref-body">Interested in collaboration, postgraduate opportunities, or research partnerships? Reach out to our team.</p>
                <div class="hiref-contact__items">
                  <div class="hiref-contact__item">
                    <div class="hiref-contact__item-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                    <div>
                      <p class="hiref-contact__item-label">Phone</p>
                      <p class="hiref-body--sm"><?php echo esc_html( $s['phone1'] ); ?></p>
                      <p class="hiref-body--sm"><?php echo esc_html( $s['phone2'] ); ?></p>
                    </div>
                  </div>
                  <div class="hiref-contact__item">
                    <div class="hiref-contact__item-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
                    <div>
                      <p class="hiref-contact__item-label">Email</p>
                      <a href="mailto:<?php echo esc_attr( $s['email'] ); ?>" class="hiref-link hiref-link--orange hiref-body--sm"><?php echo esc_html( $s['email'] ); ?></a>
                    </div>
                  </div>
                  <div class="hiref-contact__item">
                    <div class="hiref-contact__item-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
                    <div>
                      <p class="hiref-contact__item-label">Location</p>
                      <p class="hiref-body--sm"><?php echo nl2br( esc_html( $s['address'] ) ); ?></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hiref-contact__cards">
                <div class="hiref-contact-card">
                  <h3 class="hiref-contact-card__title"><span class="hiref-contact-card__dot"></span> Office Hours</h3>
                  <div class="hiref-office-hours">
                    <div class="hiref-office-hours__row"><span>Sunday – Thursday</span><span class="hiref-office-hours__open">9:00 AM – 5:00 PM</span></div>
                    <div class="hiref-office-hours__row"><span>Friday & Saturday</span><span class="hiref-office-hours__closed">Closed</span></div>
                    <div class="hiref-office-hours__row"><span>Public Holidays</span><span class="hiref-office-hours__closed">Closed</span></div>
                  </div>
                </div>
                <div class="hiref-contact-card">
                  <h3 class="hiref-contact-card__title">Follow HIREF</h3>
                  <div class="hiref-social-list">
                    <a href="https://www.utm.my/hiref" target="_blank" rel="noopener noreferrer" class="hiref-social-item">
                      <div class="hiref-social-item__icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg></div>
                      <span>www.utm.my/hiref</span>
                      <svg class="hiref-social-item__arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                    <?php if ( ! empty( $s['linkedin']['url'] ) ) : ?>
                    <a href="<?php echo esc_url( $s['linkedin']['url'] ); ?>" target="_blank" rel="noopener noreferrer" class="hiref-social-item">
                      <div class="hiref-social-item__icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></div>
                      <span>LinkedIn — HIREF</span>
                      <svg class="hiref-social-item__arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                    <?php endif; ?>
                    <?php if ( ! empty( $s['facebook']['url'] ) ) : ?>
                    <a href="<?php echo esc_url( $s['facebook']['url'] ); ?>" target="_blank" rel="noopener noreferrer" class="hiref-social-item">
                      <div class="hiref-social-item__icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></div>
                      <span>Facebook — HIREF</span>
                      <svg class="hiref-social-item__arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <?php
    }
}
