import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, Inject } from '@angular/core';
import { IYoutubeSearchResult, IYoutubeService, YOUTUBE_SERVICE } from '@youtube/common-ui';
import { forkJoin, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { UIStoreService } from '../core/services/ui-store/ui-store.service';

@Component({
  selector: 'yt-likes-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  public likedVideos: IYoutubeSearchResult[] = [];
  public mockItems = new Array(5);

  private readonly onDestroy$ = new Subject<void>();

  constructor(
    private uiStore: UIStoreService,
    @Inject(YOUTUBE_SERVICE) private youtubeService: IYoutubeService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.initStoreData();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private initStoreData(): void {
    this.uiStore
      .selectLikedVideos()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data: string[]) => {
        this.getLikedVideosInfo(data);
        this.cdr.detectChanges();
      });

  }

  private getLikedVideosInfo(videoIds: string[]): void {
    const reqArray: Observable<IYoutubeSearchResult>[] = [];
    videoIds?.forEach((id: string) => {
      const videoRequest = this.youtubeService.searchVideoResults({query: id}).pipe(
        map((data) => data[0])
      );
      reqArray.push(videoRequest);
    });

    forkJoin(reqArray).subscribe((data: IYoutubeSearchResult[]) => {
        console.log(data);
        this.likedVideos = data;
        this.cdr.detectChanges();
    });
  }
}
