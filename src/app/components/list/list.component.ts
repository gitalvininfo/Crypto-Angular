import { Component, OnInit } from '@angular/core';
import { CoinDataService } from '../../services/coin-data.service';
import { Coin } from '../../coin';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // coins: any;

  coins: Coin[];
  noDataMsg: string;
  fiat: string;

  constructor(private coinDataServ: CoinDataService) {
    this.coinDataServ.filteredCoinsSubject.subscribe({
      next: (v) => this.updateCoins(v),
    });
    this.coinDataServ.apiSubject.subscribe({
      next: (msg) => this.noDataMsg = msg,
    });
    this.coinDataServ.fiatSubject.subscribe({
      next: (newValue) => this.fiat = newValue,
    });
  }

  updateCoins(coins: Coin[]) {
    this.coins = [];
    coins.forEach((coin) => this.coins.push(coin));
  }

  ngOnInit() {

    // this.coinDataServ.getLatest().subscribe(coindata => {
    //   this.coins = coindata;
    //   console.log('coins', this.coins);
    // })
  }

}
