import { DataSource  } from '@angular/cdk/collections';
import { MatPaginator, MatSort} from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Zitmeubilair } from 'src/app/interface/zitmeubilair';
import { ZitmeubilairService } from 'src/app/services/zitmeubilair.service';



/**
 * Data source for the Zitmeubilair view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ZitmeubilairDataSource extends DataSource <Zitmeubilair> {
  data: Zitmeubilair[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private zitmeubilairService: ZitmeubilairService) {
    super();
    this.data= [];
    this.getZitmeubilair();
  }


  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Zitmeubilair[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }
  

  getZitmeubilair() : void{
    this.zitmeubilairService.getZitMeubilair().subscribe(zitmeubilair =>{
      this.data = zitmeubilair;
    })
  }
 

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Zitmeubilair[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Zitmeubilair[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Straatnaam': return compare(a.Straatnaam, b.Straatnaam, isAsc);
        /* case 'Huisnummer': return compare(a.Huisnummer, b.Huisnummer, isAsc); */
        case 'Type_zitmeubel': return compare(+a.Type_zitmeubel, +b.Type_zitmeubel, isAsc);
        case 'Aanvulling': return compare(+a.Aanvulling, +b.Aanvulling, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
