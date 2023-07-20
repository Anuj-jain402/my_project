import React from "react";
function Fotter() {
    return (
        <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <span class="logo_name">Pico</span>
        </div>
        <div class="media-icons">
          <a target="on_blank" href="#"><i class="fab fa-facebook"></i></a>
          <a target="on_blank" href="https://www.instagram.com/pico_india/"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Links</li>
          <li><a href="{% url 'home' %}">Home</a></li>
          <li><a href="{% url 'about' %}">About Us</a></li>
          <li><a href="{% url 'upload' %}">Submit Photo</a></li>

        </ul>
        <ul class="box">
          <li class="link_name">Recommended</li>
          <li><a href="{% url 'category' 6 %}">India</a></li>
          <li><a href="{% url 'category' 5 %">Art and Culture</a></li>
          <li><a href="{% url 'category' 11 %">People</a></li>
          <li><a href="{% url 'category' 2 %">Travel</a></li>

        </ul>
        <ul class="box">
          <li class="link_name">Legal Info</li>
          <li><a href="{% url 'licence' %}">Licence</a></li>
          <li><a href="{% url 'terms' %}">Terms and Conditions</a></li>
          <li><a href="{% url 'privacy' %}">Privacy Policies</a></li>

        </ul>
        <ul class="box">
          <li class="link_name">Contact</li>
          <li><a target="on_blank" href="tel:+919079680135">+91 9079680135</a></li>
          <li><a target="on_blank" href="mailto:'connectpicoindia@gmail.com'">contactpicoindia@gmail.com</a></li>
        </ul>
      </div>
    </div>

    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2021 <a href="#">Indore Explore.</a></span>
      </div>
    </div>
  </footer>
    );}
    export default Fotter;
