import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { WatchVideoComponent } from './watch-video/watch-video.component';
import { VideoCardComponent } from './video-card/video-card.component';
import {
  APP_API_KEY,
  EventDispatcherService,
  VideoPlayerModule,
  VideoThumbnailLoaderModule,
  VideoThumbnailModule,
  YoutubeServiceV2,
  YOUTUBE_SERVICE,
} from '@youtube/common-ui';
import { MatIconModule } from '@angular/material/icon';
import { RelatedVideosComponent } from './related-videos/related-videos.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { APP_KEY } from './app.constants';

import { ROOT_REDUCERS } from './reducers';

@NgModule({
  declarations: [AppComponent, WatchVideoComponent, VideoCardComponent, RelatedVideosComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    VideoPlayerModule,
    VideoThumbnailModule,
    VideoThumbnailLoaderModule,
    MatIconModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      name: 'Watch App Store',
    }),
  ],
  providers: [
    {
      provide: YOUTUBE_SERVICE,
      useClass: YoutubeServiceV2,
    },
    {
      provide: APP_API_KEY,
      useValue: APP_KEY,
    },
    EventDispatcherService,
  ],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  public ngDoBootstrap(): void {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('watch-app-element', ce);
    // <watch-app-element></watch-app-element>
  }
}
