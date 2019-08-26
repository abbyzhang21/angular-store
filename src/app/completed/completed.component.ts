import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-completed",
  templateUrl: "./completed.component.html",
  styleUrls: ["./completed.component.scss"]
})
export class CompletedComponent implements OnInit {
  items;
  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }
  clear() {
    this.items = this.cartService.clearCart();
  }
  ngOnInit() {}
}
