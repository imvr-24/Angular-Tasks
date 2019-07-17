import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { EMPTY } from 'rxjs';
declare const navigator;
@Injectable({
  providedIn: 'root'
})
export class NetworkAwarePreloadStrategyService implements PreloadingStrategy {

  preload(route: import('@angular/router').Route, fn: () => import('rxjs').Observable<any>): import('rxjs').Observable<any> {
    return this.hasGoodConnection() ? fn() : EMPTY;
  }

  // TODO: http://wicg.github.io/netinfo/#-dfn-savedata-dfn-attribute

  hasGoodConnection(): boolean {
    const conn = navigator.connection;
    console.log(conn);
    if (conn) {
      if (conn.saveData) {
        console.log(conn.saveData);
        return false; // save data mode is enabled, so dont preload
      }
      const avoidTheseConnections = ['slow-2g', '2g', '3g' /* , '4g' */];
      const effectiveType = conn.effectiveType || '';
      console.log(effectiveType);
      if (avoidTheseConnections.includes(effectiveType)) {
        return false;
      }
    }
    return true;
  }
}
