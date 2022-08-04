import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ,private route:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 400px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  showFiller: any = false;

  menu: NavItem [] = [
    {
      displayName: 'Home',
      iconName: 'desktop_windows',
      route: '',
    },        
    {
      displayName: 'Admin',
      iconName: 'ballot',
      route: 'admin',
      // children: [
      //   {
      //     displayName: 'Courses',
      //     iconName: 'how_to_reg',
      //     route: 'admin/courses'
      //   },
      //   { 
      //     displayName: 'Students',
      //     iconName: 'waves',
      //     route: '/todos'
      //   }
      // ]
    },
    
  ];

  ngOnInit(): void {
  }


  mobileQuery: MediaQueryList | any;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener = () => {return};

  

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  routeToRespectivePage(){
    console.log('routeToRespectivePage');
    this.route.navigate(['/']);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

}
