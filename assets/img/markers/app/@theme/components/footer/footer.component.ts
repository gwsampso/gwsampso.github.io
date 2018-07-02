import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="#" target="_blank">Restless</a></b> 2017</span>
    <div class="socials">
      <a href="http://192.168.1.179/mediawiki/index.php/Omega-pedia" target="_blank" class="ion ion-ios-world" alt="Omega Wiki"></a>
    </div>
  `,
})
export class FooterComponent {
}

// <a href="#" target = "_blank" class="ion ion-social-facebook" > </a>
//   < a href = "#" target = "_blank" class="ion ion-social-twitter" > </a>
//     < a href = "#" target = "_blank" class="ion ion-social-linkedin" > </a>