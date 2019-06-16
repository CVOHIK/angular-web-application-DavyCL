import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { ZitmeubilairDataSource} from './zitmeubilair-datasource';
import { ZitmeubilairService } from 'src/app/services/zitmeubilair.service';
import { Zitmeubilair } from 'src/app/interface/zitmeubilair';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zitmeubilair',
  templateUrl: './zitmeubilair.component.html',
  styleUrls: ['./zitmeubilair.component.css']
})
export class ZitmeubilairComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator,{static :false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static :false}) sort: MatSort;
  @ViewChild(MatTable,{static :false}) table: MatTable<Zitmeubilair>;
  dataSource: ZitmeubilairDataSource;
  marker: [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Straatnaam', 'Type_zitmeubel','Aanvulling'];

  constructor(private zitmeubilairService : ZitmeubilairService, private breakpointObserver: BreakpointObserver, private router: Router){
    this.marker = [];
  }

  ngOnInit() {
    this.dataSource = new ZitmeubilairDataSource(this.zitmeubilairService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ZitmeubilairMarkerPlaatsen(latitude: number, longitude: number){
    this.zitmeubilairService.setZitmeubilairMarker(latitude,longitude);
  }
}
