import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NgxContentfulRichTextModule } from 'ngx-contentful-rich-text';




interface ContentNode {
  nodeType: string;
  content?: ContentNode[];
  value?: string;
}


@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule,NgxContentfulRichTextModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements OnInit {
  constructor(private Route: ActivatedRoute, private contentfulService: ContentfulService){

  }
  blogPost$: Observable<any> | undefined;

  ngOnInit(): void {
    this.Route.params.subscribe((params) =>
    {
      const id = params["id"];
      this.blogPost$ = this.contentfulService.getEntryById(id);
    })


  }

}

