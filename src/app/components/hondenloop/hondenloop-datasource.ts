import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Hondenloop } from 'src/app/interface/hondenloop';
import { HondenloopService } from 'src/app/services/hondenloop.service';

/**
 * Data source for the Hondenloop view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class HondenloopDataSource extends DataSource<Hondenloop>{
  data: Hondenloop[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private hondenService : HondenloopService) {
    super();
    this.data = [];
    this.gethondenloop();
  }

  gethondenloop() : void {
    this.hondenService.getHondenloop().subscribe(hondenlopen => {
      this.data = hondenlopen;
    });
  }

  /**
   * Connect this data source to the table. The table will only update when   
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Hondenloop[]> {    
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

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Hondenloop[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Hondenloop[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'NAAM': return compare(a.NAAM, b.NAAM, isAsc);
        case 'BEZOEKERSAANTAL': return compare(a.BEZOEKERSAANTAL, b.BEZOEKERSAANTAL, isAsc);
        case 'RINGS': return compare(+a.Lat, +b.lng, isAsc);
        case 'AlGEMEEN_UITZICHT': return compare(a.ALGEMEEN_UITZICHT, b.ALGEMEEN_UITZICHT, isAsc);
        case 'NETHEID': return compare(a.NETHEID, b.NETHEID, isAsc);
        case 'VERLICHTING': return compare(a.VERLICHTING, b.VERLICHTING, isAsc);
        case 'QUOTERING_ALGEMEEN': return compare(a.QUOTERING_ALGEMEEN, b.QUOTERING_ALGEMEEN, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
