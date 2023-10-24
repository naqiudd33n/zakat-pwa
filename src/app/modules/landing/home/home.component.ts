import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'landing-home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MatButtonModule, RouterLink, MatIconModule],
})
export class LandingHomeComponent implements OnInit {
    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        console.log("test", this._activatedRoute.snapshot.queryParamMap["params"]);

    }
}
