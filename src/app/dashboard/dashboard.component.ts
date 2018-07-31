import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentItems } from '../../assets/data/content';
import { MyContentService } from '../services/mycontent.service';
import { Router, ActivatedRoute, NavigationExtras, NavigationEnd } from '@angular/router';
import { IFilemanager, userObject, FileTemplate } from '../filemanager';
import { HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import * as moment from 'moment';
import { UIHelperService } from '../services/uihelper.service';
import { AuditTrailService } from '../services/audittrail.service';
import { BroadcasterService } from 'ng-broadcaster';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    team = [{
        'team_id' : 'OEM-001',
        'team_name' : 'Zahiruddin',
        'team_group' : 'QC Team',
        'team_supervisor' : 'Muhammad Zahiruddin',
        'team_members' : [
            'Abdul Kuzi',
            'Ahmad Bin Sudin',
            'Sufian Bin Sudin'
        ]
    }, {
        'team_id' : 'OEM-002',
        'team_name' : 'Zahiruddin',
        'team_group' : 'QC Team',
        'team_supervisor' : 'Muhammad Zahiruddin',
        'team_members' : [
            'Abdul Kuzi',
            'Ahmad Bin Sudin',
            'Sufian Bin Sudin'
        ]
    }, {
        'team_id' : 'OEM-003',
        'team_name' : 'Zahiruddin',
        'team_group' : 'QC Team',
        'team_supervisor' : 'Muhammad Zahiruddin',
        'team_members' : [
            'Abdul Kuzi',
            'Ahmad Bin Sudin',
            'Sufian Bin Sudin'
        ]
    }];

    teamToEdit = {
        'team_id' : '',
        'team_name' : '',
        'team_group' : '',
        'team_supervisor' : '',
        'team_members' : []
    };

    constructor() {
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    editTeam(t)  {
        for (let i = 0; i < this.team.length; i++) {
            if (this.team[i].team_id === t) {
                this.teamToEdit = this.team[i];
            }
        }
    }


}
