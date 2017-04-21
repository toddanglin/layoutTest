import {StackLayout} from 'ui/layouts/stack-layout';
import {Observable} from 'data/observable';
import * as Platform from 'Platform';

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    
    public get screenWidthDIP() : number {
        return Platform.screen.mainScreen.widthDIPs;
    }

    public get screenWidthPixel() : number {
        return Platform.screen.mainScreen.widthPixels;
    }

    private _stackLeft: string;
    public get stackLeft(): string {
        return this._stackLeft;
    }
    public set stackLeft(value: string) {
        this._stackLeft = value;
        this.notifyPropertyChange("stackLeft", value);
    }

    private _stackTranX: string;
    public get stackTranX(): string {
        return this._stackTranX;
    }
    public set stackTranX(value: string) {
        this._stackTranX = value;
        this.notifyPropertyChange("stackTranX", value);
    }
    
    private _stack : StackLayout;
    public get stack() : StackLayout {
        return this._stack;
    }
    public set stack(v : StackLayout) {
        this._stack = v;
        this.updateProps();
    }
    

    constructor() {
        super();

    }

   public animateChange() {
       this.stack.animate({
           duration: 1000,
           translate: { x: -200, y: 0}
       }).then(() => {
            this.updateProps(); 
        });
   }

   public styleChange() {
       this.stack.style.translateX = -200;

       this.updateProps();
   }

   public resetLayout() {
        /*this.stack.animate({
            translate: { x: 0, y: 0}
        }).then(() => {
            this.updateProps(); 
        });*/

        this.stack.style.translateX = 0;
        this.updateProps();
   }

   private updateProps() {
       let tmp = <any>this.stack; // ANNNOYING hack -- can't access ".value" directly with TypeScript errors
       this.stackLeft = <any>tmp.left.value;
       this.stackTranX = this.stack.translateX.toString();
   }
}