import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { ZitmeubilairDataSource, ZitmeubilairItem } from './zitmeubilair-datasource';

@Component({
  selector: 'app-zitmeubilair',
  templateUrl: './zitmeubilair.component.html',
  styleUrls: ['./zitmeubilair.component.css']
})
export class ZitmeubilairComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ZitmeubilairItem>;
  dataSource: ZitmeubilairDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ZitmeubilairDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
