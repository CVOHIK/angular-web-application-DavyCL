import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { HondenloopDataSource } from './hondenloop-datasource';
import { Hondenloop } from '../../interface/hondenloop';
import { HondenloopService } from 'src/app/services/hondenloop.service';
import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hondenloop',
  templateUrl: './hondenloop.component.html',
  styleUrls: ['./hondenloop.component.css']
})
export class HondenloopComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator,{static :false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static :false}) sort: MatSort;
  @ViewChild(MatTable,{static :false}) table: MatTable<Hondenloop>;
  dataSource: HondenloopDataSource;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['NAAM', 'BEZOEKERSAANTAL','ALGEMEEN_UITZICHT', 'NETHEID','VERLICHTING','QUOTERING_ALGEMEEN']; 
  
  constructor(private hondenService : HondenloopService, private breakpointObserver : BreakpointObserver) {}

  ngOnInit() {
    this.dataSource = new HondenloopDataSource(this.hondenService);
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;    
  }

  hondenloopMarkerPlaatsen(rings: string){
    this.hondenService.setHondenloopMarkerrings(rings)
  }

}
