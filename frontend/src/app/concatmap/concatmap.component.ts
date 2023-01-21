import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of, take } from 'rxjs';
import { UtilityserviceService } from '../utilityservice.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.css']
})
export class ConcatmapComponent implements OnInit {

  constructor(private utiService:UtilityserviceService) { }

  getData(data:any){
return of(data+ ' Video Uploaded').pipe(delay(2000))
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy','News'])


    // Exp 1 Map
    source.pipe(
      map(res => this.getData(res)))
    .subscribe(res => res.subscribe(res2 => {
      console.log(res2)
      this.utiService.print(res, 'elContainers')
    }))

        // Exp 2 mergeMap
        source.pipe(
          mergeMap(res => this.getData(res)))
        .subscribe(res => {
          console.log(res)
         
          this.utiService.print(res, 'elContainers2')
        }
        )


                // Exp 2 concatMap
                source.pipe(
                  concatMap(res => this.getData(res)))
                  .subscribe(res => {
                  console.log(res)
                  this.utiService.print(res, 'elContainers3')
                }
                )

  }

}
