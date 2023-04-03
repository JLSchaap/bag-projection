
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map } from 'maplibre-gl';

@Component({
  selector: 'app-bag-map',
  templateUrl: './bag-map.component.html',
  styleUrls: ['./bag-map.component.css']
})
export class BagMapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  worldMap: Map | undefined;
  styles = ['assets/bagstd.json', 'https://demotiles.maplibre.org/style.json']


  @ViewChild('map')


  private mapContainer!: ElementRef<HTMLElement>;

  @ViewChild('mapWorld')
  private mapContainerWorld!: ElementRef<HTMLElement>;


  initialState = {
    lng: 5.3896944, lat: 52.1562499, zoom: 17
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {


    this.showmap(this.initialState, this.styles[0], this.mapContainer, this.map!);
    this.showmap(this.initialState, this.styles[1], this.mapContainerWorld, this.worldMap!);

  }

  private showmap(initialState: { lng: number; lat: number; zoom: number; }, style: string, container: { nativeElement: any; }, localvar: Map) {
    console.log(style)
    localvar = new Map({
      container: container.nativeElement,
      style: style,

      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

  }
  getZoom()
  {
    return this.map?.getZoom()
  }

  ngOnDestroy() {
    this.map?.remove();
    this.worldMap?.remove(); 
  }

  changeStyle(style: string) {
    console.log("change")
    console.log(style)
    // this.showmap(this.initialState, style)


  }

}