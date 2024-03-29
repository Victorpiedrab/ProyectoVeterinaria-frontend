import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "./modules/material.module";

import { ImagePipe } from "./pipes/image.pipe";

import { AccordionComponent } from "./components/accordion/accordion.component";
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from "./components/card/card.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GridCardComponent } from "./components/grid-card/grid-card.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeaderPagesComponent } from "./components/header-pages/header-pages.component";
import { SocialLinksComponent } from "./components/social-links/social-links.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { TextButtonComponent } from "./components/text-button/text-button.component";
import { TitleComponent } from "./components/title/title.component";

@NgModule({
	declarations: [ImagePipe, AccordionComponent, ButtonComponent, CardComponent, FooterComponent, GridCardComponent, HeaderComponent, HeaderPagesComponent, SocialLinksComponent, TabsComponent, TextButtonComponent, TitleComponent],
	imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
	exports: [ReactiveFormsModule, MaterialModule, ImagePipe, AccordionComponent, ButtonComponent, CardComponent, FooterComponent, GridCardComponent, HeaderComponent, HeaderPagesComponent, SocialLinksComponent, TabsComponent, TextButtonComponent, TitleComponent]
})
export class SharedModule {}
