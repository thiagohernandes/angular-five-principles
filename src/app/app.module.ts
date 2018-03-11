import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { RedditComponent } from './reddit/reddit.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesService } from './articles.service';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    HelloWorldComponent,
    RedditComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    JokeService,
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
