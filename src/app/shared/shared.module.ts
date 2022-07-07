import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from '@angular/material/divider';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { HeaderPagesComponent } from './header-pages/header-pages.component';

@NgModule({
	declarations: [HeaderComponent, FooterComponent, SocialLinksComponent, HeaderPagesComponent],
	imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule],
	exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule, HeaderComponent, FooterComponent, HeaderPagesComponent, SocialLinksComponent]
})
export class SharedModule {}