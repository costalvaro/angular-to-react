/* eslint-disable no-console */
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-error';
import { NgModule, NgModuleRef, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import React from 'react';

export const SELECTOR = 'sb-app-root';

let _uid = 0;

const bootstrapAngularApp = (
  node: HTMLElement,
  AppComponentInstance: any,
): Promise<NgModuleRef<any>> => {
  const uSelector = `sb-story-${_uid++}`;
  const rootElem = document.createElement(SELECTOR);
  rootElem.setAttribute(uSelector, '');
  node.appendChild(rootElem);
  
  const AppModule = NgModule({
    declarations: [AppComponentInstance],
    imports: [BrowserModule],
    entryComponents: [AppComponentInstance],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  })(class {
    ngDoBootstrap(appRef: any) {
      const resolver = appRef._componentFactoryResolver;
      const factory = resolver.resolveComponentFactory(AppComponentInstance);
      const originalSelector = factory.selector;
      factory.selector = `[${uSelector}]`;
      appRef.bootstrap(factory);
      factory.selector = originalSelector;
    }
  });
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

export default (Component: any) => {
  console.log('debugging... trying to display: ', Component);
  return (props: any) => {
    console.log('debugging... Executing function with props', props);
    const el = React.useRef<any>(null);

    React.useEffect(() => {
      console.log('debugging... Executing useEffect with el', el);
      let module: any;
      // eslint-disable-next-line no-return-assign
      bootstrapAngularApp(el.current, Component).then((m) => (module = m));
      // eslint-disable-next-line consistent-return
      return () => {
        while (!module) {
          // eslint-disable-next-line no-continue
          continue;
        }
        console.log('debugging... Destroy.', el);
        module.destroy();
      };
    });
    console.log('debugging... createElement', el);
    return React.createElement('div', { ref: el, className: 'angular-wrapper' });
  };
};
