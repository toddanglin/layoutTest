

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    

    let vm = new HelloWorldModel();
    vm.stack = <StackLayout>page.getViewById("stack");
    console.log("StackLayout loaded");

    page.bindingContext = vm;
}